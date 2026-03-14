import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { getSortedClassesWithMappedMembers } from "./common";

const fromInternalName = (name: string): string => {
    return name.replaceAll("/", ".");
};

const primitiveDescriptorTypes: Record<string, string> = {
    B: "byte",
    C: "char",
    D: "double",
    F: "float",
    I: "int",
    J: "long",
    S: "short",
    Z: "boolean",
    V: "void",
};

const mapInternalClassToDst = (internalName: string, mappingSet: MappingSet): string => {
    return mappingSet.getOrNull(internalName)?.dst ?? internalName;
};

const readDescriptorType = (
    descriptor: string,
    start: number,
    mappingSet: MappingSet
): { type: string; nextIndex: number } => {
    let index = start;
    let dimensions = 0;
    while (descriptor[index] === "[") {
        dimensions++;
        index++;
    }

    const kind = descriptor[index];
    const primitive = primitiveDescriptorTypes[kind];
    if (primitive) {
        return { type: `${primitive}${"[]".repeat(dimensions)}`, nextIndex: index + 1 };
    }

    if (kind !== "L") {
        throw new Error(`Invalid JVM descriptor type: ${descriptor}`);
    }

    const end = descriptor.indexOf(";", index);
    if (end === -1) {
        throw new Error(`Invalid JVM descriptor type: ${descriptor}`);
    }

    const internalName = descriptor.slice(index + 1, end);
    const mappedName = fromInternalName(mapInternalClassToDst(internalName, mappingSet));
    return {
        type: `${mappedName}${"[]".repeat(dimensions)}`,
        nextIndex: end + 1,
    };
};

const decodeMethodDescriptor = (
    descriptor: string,
    mappingSet: MappingSet
): { parameters: string[]; returnType: string } => {
    if (!descriptor.startsWith("(")) {
        throw new Error(`Invalid method descriptor: ${descriptor}`);
    }

    const closeParen = descriptor.indexOf(")");
    if (closeParen === -1) {
        throw new Error(`Invalid method descriptor: ${descriptor}`);
    }

    const parameters: string[] = [];
    let index = 1;
    while (index < closeParen) {
        const { type, nextIndex } = readDescriptorType(descriptor, index, mappingSet);
        parameters.push(type);
        index = nextIndex;
    }

    const { type: returnType, nextIndex } = readDescriptorType(descriptor, closeParen + 1, mappingSet);
    if (nextIndex !== descriptor.length) {
        throw new Error(`Invalid method descriptor: ${descriptor}`);
    }

    return { parameters, returnType };
};

const decodeFieldDescriptor = (descriptor: string, mappingSet: MappingSet): string => {
    const { type, nextIndex } = readDescriptorType(descriptor, 0, mappingSet);
    if (nextIndex !== descriptor.length) {
        throw new Error(`Invalid field descriptor: ${descriptor}`);
    }

    return type;
};

export const write = (mappingSet: MappingSet): string => {
    const lines: string[] = [];
    const classes = getSortedClassesWithMappedMembers(mappingSet);

    for (const klass of classes) {
        const fields = klass.fieldsWithDst;
        const methods = klass.methodsWithDst;

        const srcName = fromInternalName(klass.src);
        const dstName = fromInternalName(klass.dst ?? klass.src);
        lines.push(`${dstName} -> ${srcName}:`);

        for (const field of fields) {
            const fieldType = decodeFieldDescriptor(field.srcDesc, mappingSet);
            lines.push(`    ${fieldType} ${field.dst} -> ${field.src}`);
        }

        for (const method of methods) {
            const { parameters, returnType } = decodeMethodDescriptor(method.srcDesc, mappingSet);
            lines.push(`    ${returnType} ${method.dst}(${parameters.join(",")}) -> ${method.src}`);
        }
    }

    return `${lines.join("\n")}\n`;
};
