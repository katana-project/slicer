import type { MappingSet } from "$lib/workspace/analysis/mapping/data";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = [];

    for (const klass of mappingSet.values()) {
        lines.push(`${klass.src} ${klass.dst ?? klass.src}`);

        for (const field of klass.fields.values()) {
            lines.push(`${klass.src} ${field.src} ${field.dst ?? field.src}`);
        }

        for (const method of klass.methods.values()) {
            lines.push(`${klass.src} ${method.src} ${method.srcDesc} ${method.dst ?? method.src}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
