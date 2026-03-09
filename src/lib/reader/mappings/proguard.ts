import { type MappedClass, mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

// https://github.com/Guardsquare/proguard/blob/master/base/src/main/java/proguard/obfuscate/MappingReader.java

const primTypes: Record<string, string> = {
    byte: "B",
    char: "C",
    double: "D",
    float: "F",
    int: "I",
    long: "J",
    short: "S",
    boolean: "Z",
    void: "V",
};

const formatType = (type: string, mappings: MappingSet): string => {
    if (type.endsWith("[]")) {
        const component = type.replace(/\[]/g, "");
        const dimensions = (type.length - component.length) / 2;
        return "[".repeat(dimensions) + formatType(component, mappings);
    }

    const primType = primTypes[type];
    if (primType) {
        return primType;
    }

    let internalName = type.replaceAll(".", "/");
    // remap dst name to src
    internalName = mappings.getOrNull(internalName)?.dst ?? internalName;

    return `L${internalName};`;
};

const formatMethodParams = (desc: string, mappings: MappingSet): string => {
    const params = desc.slice(1, -1).split(",");
    return `(${params.map((p) => formatType(p, mappings)).join("")})`;
};

export const read = (data: string): MappingSet => {
    const lines = data.split("\n");
    const mappings = mappingSet();

    // first pass: read classes
    for (const line of lines) {
        if (line.startsWith("#") || line.trim() === "") {
            continue; // skip comments and empty lines
        }

        let [dst, src] = line.trim().split("->", 2);
        if (src.endsWith(":")) {
            // class
            src = src.substring(0, src.length - 1);

            const currentClass = mappings.get(src);
            currentClass.dst = dst;
        }
    }

    // second pass: read members
    let currentClass: MappedClass | null = null;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith("#") || line.trim() === "") {
            continue; // skip comments and empty lines
        }

        let [dst, src] = line.trim().split("->", 2);
        if (src.endsWith(":")) {
            // class
            src = src.substring(0, src.length - 1);

            currentClass = mappings.get(src);
            currentClass.dst = dst;
        } else {
            // field or method
            if (!currentClass) {
                throw new Error(`Tried to read a member before reading a class (line ${i})`);
            }

            const colonIdx = dst.lastIndexOf(":");
            if (colonIdx !== -1) {
                // remove line data
                dst = dst.substring(colonIdx + 1, dst.length);
            }

            const [desc, name] = dst.split(" ", 2);
            if (name.endsWith(")")) {
                // method
                const parenIdx = name.indexOf("(");
                const methodName = name.substring(0, parenIdx);
                const methodDesc = name.substring(parenIdx);

                const method = currentClass.methods.get(
                    src,
                    `${formatMethodParams(methodDesc, mappings)}${formatType(desc, mappings)}`
                );
                method.dst = methodName;
            } else {
                // field
                const field = currentClass.fields.get(src, formatType(desc, mappings));
                field.dst = name;
            }
        }
    }

    return mappings;
};
