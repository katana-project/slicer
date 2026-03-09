import { rootContext } from "$lib/script";
import { mappings } from "$lib/workspace/analysis/mapping";
import { write } from "@katana-project/asm";
import type { Remapper } from "@katana-project/asm/analysis/remap";
import {
    arrayType,
    type ArrayType,
    classType,
    type ClassType,
    methodType,
    type MethodType,
    objectType,
    parameterized,
    type ParameterizedType,
    type Type,
    TypeKind,
    typeParameter,
    type TypeParameter,
    wildcard,
    type WildcardType,
} from "@katana-project/asm/type";
import { derived, get } from "svelte/store";
import { TransformationPoint, type Transformer } from "./types";

export const internalTransformers: Transformer[] = [
    // script transforms should be processed last
    {
        id: "script",
        internal: true,
        async run(entry, data) {
            return (await rootContext.dispatchEvent({ type: "preload", name: entry.name, data })).data;
        },
    },
];

interface FlatRemapper extends Remapper {
    typeParameter(tp: TypeParameter): TypeParameter;
}

const remapper = derived(mappings, ($mappings): FlatRemapper => {
    return {
        ref(owner: Type, name: string, type: Type): string {
            const mappedOwner = $mappings.getOrNull(owner.value.slice(1, -1));
            if (!mappedOwner) {
                return name;
            }

            const member =
                type.kind === TypeKind.METHOD
                    ? mappedOwner.methods.getOrNull(name, type.value)
                    : mappedOwner.fields.getOrNull(name, type.value);
            if (member && member.dst) {
                return member.dst;
            }

            return name;
        },
        type(type: Type): Type {
            switch (type.kind) {
                case TypeKind.OBJECT: {
                    const clazz = $mappings.getOrNull(type.value.slice(1, -1));
                    if (clazz && clazz.dst) {
                        return objectType(`L${clazz.dst};`);
                    }
                    break;
                }
                case TypeKind.METHOD: {
                    const mthType = type as MethodType;
                    return methodType(
                        mthType.parameters.map((p) => this.type(p)),
                        this.type(mthType.returnType),
                        mthType.typeParameters ? mthType.typeParameters.map((tp) => this.typeParameter(tp)) : undefined
                    );
                }
                case TypeKind.ARRAY: {
                    const arrType = type as ArrayType;
                    return arrayType(this.type(arrType.elementType), arrType.dimensions);
                }
                case TypeKind.TYPE_PARAMETER:
                    return this.typeParameter(type as TypeParameter);
                case TypeKind.PARAMETERIZED: {
                    const paramType = type as ParameterizedType;
                    return parameterized(
                        this.type(paramType.rawType),
                        paramType.typeArguments.map((t) => this.type(t))
                    );
                }
                case TypeKind.WILDCARD: {
                    const wildcardType = type as WildcardType;
                    if (wildcardType.bound) {
                        return wildcard(wildcardType.boundType, this.type(wildcardType.bound));
                    }
                    break;
                }
                case TypeKind.CLASS: {
                    const clsType = type as ClassType;
                    return classType(
                        this.type(clsType.superClass),
                        clsType.interfaces.map((i) => this.type(i)),
                        clsType.typeParameters.map((tp) => this.typeParameter(tp))
                    );
                }
            }

            return type;
        },
        typeParameter(tp: TypeParameter): TypeParameter {
            if (tp.classBound || tp.interfaceBounds) {
                return typeParameter(
                    tp.identifier,
                    tp.classBound ? this.type(tp.classBound) : undefined,
                    tp.interfaceBounds ? tp.interfaceBounds.map((b) => this.type(b)) : undefined
                );
            }
            return tp;
        },
    };
});

export const internalEarlyTransformers: Transformer[] = [
    {
        id: "remap",
        internal: true,
        point: TransformationPoint.ANY,
        async run(entry, _data) {
            const { remap } = await import("@katana-project/asm/analysis/remap");
            remap(entry.node, get(remapper));

            return write(entry.node);
        },
    },
];
