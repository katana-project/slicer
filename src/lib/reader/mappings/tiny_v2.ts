import { type MappedClass, mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

// https://wiki.fabricmc.net/documentation:tiny2

export const readNamespaces = (data: string): string[] => {
    const lines = data.split("\n", 1);
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "tiny" || header.shift() !== "2") {
        throw new Error("Not a valid Tiny v2 mapping file");
    }

    header.shift(); // skip minor version

    return header;
};

const shouldSkip = (line: string, wantedLevel: number): boolean => {
    let level = 0;
    for (const char of line) {
        if (char === "\t") {
            level++;
        } else {
            break;
        }
    }

    return level > wantedLevel;
};

// src is always the first one
export const read = (data: string, dst?: string): MappingSet => {
    const lines = data.split("\n");
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "tiny" || header.shift() !== "2") {
        throw new Error("Not a valid Tiny v2 mapping file");
    }

    header.shift(); // skip minor version

    const dstIdx = dst ? header.indexOf(dst) : 1;
    if (dstIdx === -1) {
        throw new Error(`Destination namespace "${dst}" not found in mapping file`);
    }

    const mappings = mappingSet();

    let currentClass: MappedClass | null = null;
    let level = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (shouldSkip(line, level)) {
            continue; // skip sections that are deeper than the current level
        }

        const columns = line.trim().split("\t");
        const type = columns.shift()!;
        switch (type) {
            case "c": {
                currentClass = mappings.get(columns[0]);
                currentClass.dst = columns[dstIdx];
                level = 1; // enter into members
                break;
            }
            case "f":
            case "m": {
                if (!currentClass) {
                    throw new Error(`Tried to read a member before reading a class (line ${i})`);
                }

                const desc = columns.shift()!;
                const member = (type === "f" ? currentClass.fields : currentClass.methods).get(columns[0], desc);

                member.dst = columns[dstIdx];
                // level = 2; // members may have comments or local variable names, but we don't care about those for now, so we won't go deeper
                break;
            }
        }
    }

    return mappings;
};
