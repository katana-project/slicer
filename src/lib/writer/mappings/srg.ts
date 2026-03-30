import { type MappingSet, remapType } from "$lib/workspace/analysis/mapping/data";
import { parseType } from "@katana-project/asm/type";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = [];

    for (const klass of mappingSet.values()) {
        const dstClass = klass.dst ?? klass.src;
        lines.push(`CL: ${klass.src} ${dstClass}`);

        for (const field of klass.fields.values()) {
            lines.push(`FD: ${klass.src}/${field.src} ${dstClass}/${field.dst ?? field.src}`);
        }

        for (const method of klass.methods.values()) {
            const dstDesc = remapType(parseType(method.srcDesc), mappingSet).value;
            lines.push(
                `MD: ${klass.src}/${method.src} ${method.srcDesc} ${dstClass}/${method.dst ?? method.src} ${dstDesc}`
            );
        }
    }

    return `${lines.join("\n")}\n`;
};
