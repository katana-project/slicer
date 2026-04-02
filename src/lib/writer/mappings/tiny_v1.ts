import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { escape } from "./tiny";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = ["v1\tsrc\tdst"];

    for (const klass of mappingSet.values()) {
        lines.push(`CLASS\t${escape(klass.src)}\t${klass.dst ? escape(klass.dst) : ""}`);
        for (const field of klass.fields.values()) {
            lines.push(
                `FIELD\t${escape(klass.src)}\t${escape(field.srcDesc)}\t${escape(field.src)}\t${field.dst ? escape(field.dst) : ""}`
            );
        }

        for (const method of klass.methods.values()) {
            lines.push(
                `METHOD\t${escape(klass.src)}\t${escape(method.srcDesc)}\t${escape(method.src)}\t${method.dst ? escape(method.dst) : ""}`
            );
        }
    }

    return `${lines.join("\n")}\n`;
};
