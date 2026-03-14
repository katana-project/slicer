import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { getSortedClassesWithMappedMembers } from "./common";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = ["tiny\t2\t0\tsrc\tdst"];

    const classes = getSortedClassesWithMappedMembers(mappingSet);
    for (const klass of classes) {
        const fields = klass.fieldsWithDst;
        const methods = klass.methodsWithDst;

        lines.push(`c\t${klass.src}\t${klass.dst ?? klass.src}`);
        for (const field of fields) {
            lines.push(`\tf\t${field.srcDesc}\t${field.src}\t${field.dst}`);
        }

        for (const method of methods) {
            lines.push(`\tm\t${method.srcDesc}\t${method.src}\t${method.dst}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
