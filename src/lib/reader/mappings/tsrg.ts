import { type MappedClass, mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

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

export const read = (data: string, dst?: string): MappingSet => {
    const lines = data.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));

    let dstIdx = 1;
    if (lines[0]?.startsWith("tsrg2")) {
        const header = lines.shift()!.split(" ").slice(1);
        if (dst) {
            dstIdx = header.indexOf(dst);
            if (dstIdx === -1) {
                throw new Error(`Destination namespace "${dst}" not found in mapping file`);
            }
        }
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
