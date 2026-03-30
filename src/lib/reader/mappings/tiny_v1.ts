import { type MappedClass, mappingSet, type MappingSet, mergeAssociated } from "$lib/workspace/analysis/mapping/data";

// https://wiki.fabricmc.net/documentation:tiny

export const readNamespaces = (data: string): string[] => {
    const lines = data.split("\n", 1);
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "v1") {
        throw new Error("Not a valid Tiny v1 mapping file");
    }

    return header;
};

const read0 = (data: string, dstIdx: number): MappingSet => {
    const lines = data.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));
    const header = lines.shift()?.split("\t") ?? [];
    if (header.shift() !== "v1") {
        throw new Error("Not a valid Tiny v1 mapping file");
    }

    const mappings = mappingSet();

    let currentClass: MappedClass | null = null;
    for (const line of lines) {
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
