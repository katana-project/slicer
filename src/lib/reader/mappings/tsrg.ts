import { type MappedClass, mappingSet, type MappingSet, mergeAssociated } from "$lib/workspace/analysis/mapping/data";

// https://github.com/MinecraftForge/SrgUtils/blob/master/src/main/java/net/minecraftforge/srgutils/InternalUtils.java#L260
// https://github.com/MinecraftForge/SrgUtils/blob/master/src/main/java/net/minecraftforge/srgutils/InternalUtils.java#L194

// TSRG and TSRG2

export const readNamespaces = (data: string): string[] => {
    const lines = data.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));
    const header = lines.shift()?.split(" ") ?? [];
    if (header[0] !== "tsrg2") {
        return []; // not a valid TSRG2 mapping file, but maybe it's a TSRG file, which doesn't have a header
    }

    return header.slice(1);
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
    const lines = data.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));
    if (lines[0]?.startsWith("tsrg2")) {
        lines.shift(); // skip header, we already know the dst index from readNamespaces
    }

    const mappings = mappingSet();

    let currentClass: MappedClass | null = null;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const lineLevel = countLevel(line);
        switch (lineLevel) {
            case 0: {
                // top-level, should be a class
                const columns = line.trim().split(" ");
                if (columns.some((c) => c.endsWith("/"))) {
                    // package mapping, skip
                    continue;
                }

                currentClass = mappings.get(columns[0]);
                currentClass.dst = columns[dstIdx];
                break;
            }
            case 1: {
                // member of the current class
                if (!currentClass) {
                    throw new Error(`Tried to parse TSRG member before class (line ${i + 1})`);
                }

                const columns = line.trim().split(" ");
                const src = columns.shift()!;
                const desc = columns.shift()!;

                if (desc.startsWith("(")) {
                    const names = [src, ...columns];

                    const currentMethod = currentClass.methods.get(src, desc);
                    currentMethod.dst = names[dstIdx];
                } else {
                    // not actually a descriptor, put it back
                    const names = [src, desc, ...columns];

                    const currentField = currentClass.fields.get(src);
                    currentField.dst = names[dstIdx];
                }
                break;
            }
            // default: deeper level, skip
        }
    }

    return mappings;
};

export const read = (data: string, src?: string, dst?: string): MappingSet => {
    const nses = readNamespaces(data);
    if (nses.length === 0) {
        // no header, assume it's a TSRG v1 file
        return read0(data, 1);
    }

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
