import type { MappingSet } from "$lib/workspace/analysis/mapping/data";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = ["v1\tsrc\tdst"];

    for (const klass of mappingSet.values()) {
        lines.push(`CLASS\t${klass.src}\t${klass.dst ?? ""}`);
        for (const field of klass.fields.values()) {
            lines.push(`FIELD\t${klass.src}\t${field.srcDesc}\t${field.src}\t${field.dst ?? ""}`);
        }

        for (const method of klass.methods.values()) {
            lines.push(`METHOD\t${klass.src}\t${method.srcDesc}\t${method.src}\t${method.dst ?? ""}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
