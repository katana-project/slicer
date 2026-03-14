import type { MappingSet } from "$lib/workspace/analysis/mapping/data";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = ["tiny\t2\t0\tsrc\tdst"];

    for (const klass of mappingSet.values()) {
        lines.push(`c\t${klass.src}\t${klass.dst ?? ""}`);
        for (const field of klass.fields.values()) {
            lines.push(`\tf\t${field.srcDesc}\t${field.src}\t${field.dst ?? ""}`);
        }

        for (const method of klass.methods.values()) {
            lines.push(`\tm\t${method.srcDesc}\t${method.src}\t${method.dst ?? ""}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
