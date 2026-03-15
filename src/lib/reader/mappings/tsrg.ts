import { type MappedClass, mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

export const read = (data: string): MappingSet => {
    const mappings = mappingSet();
    const lines = data.split("\n");

    const headerLineIndex = lines.findIndex((line) => {
        const trimmed = line.trim();
        return trimmed !== "" && !trimmed.startsWith("#");
    });
    const isTsrg2 = headerLineIndex !== -1 && lines[headerLineIndex].trim().startsWith("tsrg2");

    const pickDst = (parts: string[], startIdx: number, fallback: string): string => {
        const dst = parts[startIdx];
        return dst && dst.trim() !== "" ? dst : fallback;
    };

    let currentClass: MappedClass | null = null;
    let memberIndent: number | null = null;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed === "" || trimmed.startsWith("#")) {
            continue;
        }

        if (isTsrg2 && i === headerLineIndex) {
            continue;
        }

        if (/^\s+/.test(line)) {
            if (!currentClass) {
                throw new Error(`Tried to parse TSRG member before class (line ${i + 1})`);
            }

            if (isTsrg2) {
                const indent = line.match(/^\s*/)?.[0].length ?? 0;
                if (memberIndent === null) {
                    memberIndent = indent;
                }

                if (indent > memberIndent) {
                    continue;
                }
            }

            const parts = trimmed.split(/\s+/g);
            if (parts.length < 2) {
                throw new Error(`Invalid TSRG member on line ${i + 1}: ${trimmed}`);
            }

            if (isTsrg2) {
                const src = parts[0];
                const second = parts[1];
                if (second.startsWith("(")) {
                    const srcDesc = second;
                    const dst = pickDst(parts, 2, src);
                    currentClass.methods.get(src, srcDesc).dst = dst;
                } else {
                    const dst = pickDst(parts, 1, src);
                    currentClass.fields.get(src, "").dst = dst;
                }
            } else if (parts.length === 2) {
                const [src, dst] = parts;
                currentClass.fields.get(src, "").dst = dst;
            } else {
                const [src, srcDesc, dst] = parts;
                currentClass.methods.get(src, srcDesc).dst = dst;
            }

            continue;
        }

        const parts = trimmed.split(/\s+/g);
        if (parts.length < 2) {
            throw new Error(`Invalid TSRG class line on ${i + 1}: ${trimmed}`);
        }

        const src = parts[0];
        currentClass = mappings.get(src);
        currentClass.dst = pickDst(parts, 1, src);
        memberIndent = null;
    }

    return mappings;
};
