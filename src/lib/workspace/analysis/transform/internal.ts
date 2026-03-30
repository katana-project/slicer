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
import { get } from "svelte/store";
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

const remapper = async (): Promise<FlatRemapper | null> => {
    const $mappings = get(mappings);
    if ($mappings.size() === 0) {
        return null;
    }

    // circular dependency, so we import this lazily
    const { inheritanceGraph, WalkDirection } = await import("$lib/workspace/analysis/graph");
    const $inheritanceGraph = get(inheritanceGraph);

    return {
        ref(owner: Type, name: string, type: Type): string {
            const ownerInternal = owner.value.slice(1, -1);
            const mappedOwner = $mappings.getOrNull(ownerInternal);
            if (!mappedOwner) {
                return name;
            }

            let member =
                type.kind === TypeKind.METHOD
                    ? mappedOwner.methods.getOrNull(name, type.value)
                    : mappedOwner.fields.getOrNull(name, type.value);

            // if method is not found, attempt to find it in superclasses and interfaces
            const iNode = $inheritanceGraph[ownerInternal];
            if (!member && type.kind === TypeKind.METHOD && iNode) {
                const descWithoutReturn = type.value.substring(0, type.value.lastIndexOf(")") + 1);
                console.log(`trying for ${ownerInternal}`);

                const visited = new Set<string>([ownerInternal]);
                for (const node of iNode.walk(WalkDirection.UP, (n) => n)) {
                    if (visited.has(node.name)) {
                        continue;
                    }
                    visited.add(node.name);

                    const mappedNode =
                        $mappings.getOrNull(node.name) || $mappings.values().find((c) => c.dst === node.name);
                    if (!mappedNode) {
                        continue;
                    }

                    member =
                        mappedNode.methods
                            .values()
                            .find((m) => m.src === name && m.srcDesc.startsWith(descWithoutReturn)) || null;

                    if (member) {
                        break;
                    }
                }
            }

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
    } satisfies FlatRemapper;
};

export const internalEarlyTransformers: Transformer[] = [
    {
        id: "remap",
        internal: true,
        point: TransformationPoint.ANY,
        async run(entry, data) {
            // if no mappings are loaded, skip remapping to avoid unnecessary processing
            const $remapper = await remapper();
            if (!$remapper) {
                return data;
            }

            const { remap } = await import("@katana-project/asm/analysis/remap");
            remap(entry.node, $remapper);

            return write(entry.node);
        },
    },
];
