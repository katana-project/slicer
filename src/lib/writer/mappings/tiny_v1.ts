import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { getSortedClassesWithMappedMembers } from "./common";

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = ["v1\tsrc\tdst"];

    const classes = getSortedClassesWithMappedMembers(mappingSet);
    for (const klass of classes) {
        const fields = klass.fieldsWithDst;
        const methods = klass.methodsWithDst;

        lines.push(`CLASS\t${klass.src}\t${klass.dst ?? klass.src}`);
        for (const field of fields) {
            lines.push(`FIELD\t${klass.src}\t${field.srcDesc}\t${field.src}\t${field.dst}`);
        }

        for (const method of methods) {
            lines.push(`METHOD\t${klass.src}\t${method.srcDesc}\t${method.src}\t${method.dst}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
