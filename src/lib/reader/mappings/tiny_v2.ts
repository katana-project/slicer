import { type MappedClass, mappingSet, type MappingSet, mergeAssociated } from "$lib/workspace/analysis/mapping/data";

// https://wiki.fabricmc.net/documentation:tiny2

const unescape = (str: string): string => {
    return str.replace(/\\([\\nr0t])/g, (_, p1) => {
        switch (p1) {
            case "\\":
                return "\\";
            case "n":
                return "\n";
            case "r":
                return "\r";
            case "0":
                return "\0";
            case "t":
                return "\t";
            default:
                return p1;
        }
    });
};

export const readNamespaces = (data: string): string[] => {
    const lines = data.split("\n", 1);
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "tiny" || header.shift() !== "2") {
        throw new Error("Not a valid Tiny v2 mapping file");
    }

    header.shift(); // skip minor version

    return header.map(unescape);
};

const countLevel = (line: string): number => {
    let level = 0;
    for (const char of line) {
        if (char === "\t") {
            level++;
        } else {
            break;
        }
    }

    return level;
};

const read0 = (data: string, dstIdx: number): MappingSet => {
    const lines = data.split("\n");
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "tiny" || header.shift() !== "2") {
        throw new Error("Not a valid Tiny v2 mapping file");
    }

    const properties = new Map<string, string>();
    while (lines.length > 0 && countLevel(lines[0]) === 1) {
        const line = lines.shift()!;
        const columns = line.trim().split("\t");
        properties.set(unescape(columns[0]), unescape(columns[1]));
    }

    const escapeNames = properties.has("escaped-names");
    const possiblyUnescape = (str: string): string => (escapeNames ? unescape(str) : str);

    const mappings = mappingSet();

    let currentClass: MappedClass | null = null;
    let level = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const lineLevel = countLevel(line);
        if (lineLevel > level) {
            continue; // skip sections that are deeper than the current level
        }

        const columns = line.trim().split("\t");
        const type = columns.shift()!;
        switch (type) {
            case "c": {
                if (lineLevel > 0) {
                    // comment, ignore
                    break;
                }
                currentClass = mappings.get(possiblyUnescape(columns[0]));

                const dst = columns[dstIdx];
                if (dst && dst.trim() !== "") {
                    currentClass.dst = possiblyUnescape(dst);
                }
                level = 1; // enter into members
                break;
            }
            case "f":
            case "m": {
                if (!currentClass) {
                    throw new Error(`Tried to read a member before reading a class (line ${i})`);
                }

                const desc = possiblyUnescape(columns.shift()!);
                const member = (type === "f" ? currentClass.fields : currentClass.methods).get(
                    possiblyUnescape(columns[0]),
                    desc
                );

                const dst = columns[dstIdx];
                if (dst && dst.trim() !== "") {
                    member.dst = possiblyUnescape(dst);
                }
                // level = 2; // members may have comments or local variable names, but we don't care about those for now, so we won't go deeper
                break;
            }
        }
    }

    return mappings;
};

export const read = (data: string, src?: string, dst?: string): MappingSet => {
    const nses = readNamespaces(data);

    const srcIdx = src ? nses.indexOf(src) : 0;
    if (srcIdx === -1) {
        throw new Error(`Source namespace "${src}" not found in mapping file`);
    }

    const dstIdx = dst ? nses.indexOf(dst) : 1;
    if (dstIdx === -1) {
        throw new Error(`Destination namespace "${dst}" not found in mapping file`);
    }

    if (srcIdx === 0) {
        return read0(data, dstIdx);
    }

    const zeroToSrc = read0(data, srcIdx);
    const zeroToDst = read0(data, dstIdx);
    return mergeAssociated(zeroToSrc, zeroToDst);
};
