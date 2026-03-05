import { rootContext } from "$lib/script";
import { mappings } from "$lib/workspace/analysis/mapping";
import { write } from "@katana-project/asm";
import type { Remapper } from "@katana-project/asm/analysis/remap";
import {
    type ArrayType,
    type ClassType,
    type MethodType,
    type ParameterizedType,
    type Type,
    TypeKind,
    type TypeParameter,
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
            console.log(`remapping type ${type.value}`);
            switch (type.kind) {
                case TypeKind.OBJECT: {
                    const clazz = $mappings.getOrNull(type.value.slice(1, -1));
                    if (clazz && clazz.dst) {
                        type.value = `L${clazz.dst};`;
                    }
                    break;
                }
                case TypeKind.METHOD: {
                    const methodType = type as MethodType;
                    methodType.returnType = this.type(methodType.returnType);
                    methodType.parameters = methodType.parameters.map((p) => this.type(p));
                    if (methodType.typeParameters) {
                        methodType.typeParameters = methodType.typeParameters.map((tp) => this.typeParameter(tp));
                    }
                    break;
                }
                case TypeKind.ARRAY:
                    (type as ArrayType).elementType = this.type((type as ArrayType).elementType);
                    break;
                case TypeKind.TYPE_PARAMETER:
                    type = this.typeParameter(type as TypeParameter);
                    break;
                case TypeKind.PARAMETERIZED: {
                    const paramType = type as ParameterizedType;
                    paramType.rawType = this.type(paramType.rawType);
                    paramType.typeArguments = paramType.typeArguments.map((t) => this.type(t));
                    break;
                }
                case TypeKind.WILDCARD: {
                    const wildcardType = type as WildcardType;
                    if (wildcardType.bound) {
                        wildcardType.bound = this.type(wildcardType.bound);
                    }
                    break;
                }
                case TypeKind.CLASS: {
                    const classType = type as ClassType;
                    classType.superClass = this.type(classType.superClass);
                    classType.interfaces = classType.interfaces.map((i) => this.type(i));
                    classType.typeParameters = classType.typeParameters.map((tp) => this.typeParameter(tp));
                    break;
                }
            }
            console.log(`remapped type ${type.value}`);

            return type;
        },
        typeParameter(tp: TypeParameter): TypeParameter {
            if (tp.classBound) {
                tp.classBound = this.type(tp.classBound);
            }
            if (tp.interfaceBounds) {
                tp.interfaceBounds = tp.interfaceBounds.map((b) => this.type(b));
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
