import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { type ArrayType, type MethodType, parseType, type Type, TypeKind } from "@katana-project/asm/type";

const fromInternalName = (name: string): string => {
    return name.replaceAll("/", ".");
};

const remapType = (type: Type, mappingSet: MappingSet): Type => {
    switch (type.kind) {
        case TypeKind.OBJECT: {
            const clazz = mappingSet.getOrNull(type.value.slice(1, -1));
            if (clazz && clazz.dst) {
                type.value = `L${clazz.dst};`;
            }
            break;
        }
        case TypeKind.METHOD: {
            const mthType = type as MethodType;
            mthType.parameters = mthType.parameters.map((p) => remapType(p, mappingSet));
            mthType.returnType = remapType(mthType.returnType, mappingSet);
            break;
        }
        case TypeKind.ARRAY: {
            const arrType = type as ArrayType;
            arrType.elementType = remapType(arrType.elementType, mappingSet);
            break;
        }
    }

    return type;
};

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = [];

    for (const klass of mappingSet.values()) {
        const srcName = fromInternalName(klass.src);
        const dstName = fromInternalName(klass.dst ?? klass.src);
        lines.push(`${dstName} -> ${srcName}:`);

        for (const field of klass.fields.values()) {
            const fieldType = remapType(parseType(field.srcDesc), mappingSet);
            lines.push(`    ${fieldType.name} ${field.dst ?? field.src} -> ${field.src}`);
        }

        for (const method of klass.methods.values()) {
            const methodType = remapType(parseType(method.srcDesc), mappingSet) as MethodType;
            if (methodType.kind !== TypeKind.METHOD) {
                throw new Error(`Unexpected method descriptor: ${method.srcDesc}`);
            }

            const returnType = methodType.returnType.name;
            const parameters = methodType.parameters.map((p) => p.name);
            lines.push(`    ${returnType} ${method.dst ?? method.src}(${parameters.join(",")}) -> ${method.src}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
