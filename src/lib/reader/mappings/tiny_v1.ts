import { type MappedClass, mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

// https://wiki.fabricmc.net/documentation:tiny

export const readNamespaces = (data: string): string[] => {
    const lines = data.split("\n", 1);
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "v1") {
        throw new Error("Not a valid Tiny v1 mapping file");
    }

    return header;
};

// src is always the first one
export const read = (data: string, dst?: string): MappingSet => {
    const lines = data.split("\n");
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "v1") {
        throw new Error("Not a valid Tiny v1 mapping file");
    }

    const dstIdx = dst ? header.indexOf(dst) : 1;
    if (dstIdx === -1) {
        throw new Error(`Destination namespace "${dst}" not found in mapping file`);
    }

    const mappings = mappingSet();

    let currentClass: MappedClass | null = null;
    for (const line of lines) {
        if (line.startsWith("#") || line.trim() === "") {
            continue; // skip comments and empty lines
        }

        const columns = line.split("\t");
        const type = columns.shift()!;
        switch (type) {
            case "CLASS": {
                currentClass = mappings.get(columns[0]);

                const dst = columns[dstIdx];
                if (dst && dst.trim() !== "") {
                    currentClass.dst = dst;
                }
                break;
            }
            case "FIELD":
            case "METHOD": {
                const className = columns.shift()!;
                if (!currentClass || currentClass.src !== className) {
                    currentClass = mappings.get(className!);
                }

                const desc = columns.shift()!;
                const member = (type === "FIELD" ? currentClass.fields : currentClass.methods).get(columns[0], desc);

                const dst = columns[dstIdx];
                if (dst && dst.trim() !== "") {
                    member.dst = dst;
                }
                break;
            }
        }
    }

    return mappings;
};
