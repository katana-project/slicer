import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { type MethodType, parseType, TypeKind } from "@katana-project/asm/type";
import { remapType } from "./internal";

const fromInternalName = (name: string): string => {
    return name.replaceAll("/", ".");
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
