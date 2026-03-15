import type { MappingSet } from "$lib/workspace/analysis/mapping/data";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = [];

    for (const klass of mappingSet.values()) {
        const dstClass = klass.dst ?? klass.src;
        lines.push(`CL: ${klass.src} ${dstClass}`);

        for (const field of klass.fields.values()) {
            lines.push(`FD: ${klass.src}/${field.src} ${dstClass}/${field.dst ?? field.src}`);
        }

        for (const method of klass.methods.values()) {
            const srcDesc = method.srcDesc || "()V";
            lines.push(`MD: ${klass.src}/${method.src} ${srcDesc} ${dstClass}/${method.dst ?? method.src} ${srcDesc}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
