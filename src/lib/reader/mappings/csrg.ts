import { mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

export const read = (data: string): MappingSet => {
    const mappings = mappingSet();
    const lines = data.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const raw = lines[i].trim();
        if (raw === "" || raw.startsWith("#")) {
            continue;
        }

        const parts = raw.split(/\s+/g);
        if (parts.length === 2) {
            const klass = mappings.get(parts[0]);
            klass.dst = parts[1];
            continue;
        }

        if (parts.length === 3) {
            const [owner, src, dst] = parts;
            const klass = mappings.get(owner);
            klass.fields.get(src, "").dst = dst;
            continue;
        }

        if (parts.length === 4) {
            const [owner, src, srcDesc, dst] = parts;
            const klass = mappings.get(owner);
            klass.methods.get(src, srcDesc).dst = dst;
            continue;
        }

        throw new Error(`Invalid CSRG mapping on line ${i + 1}: ${raw}`);
    }

    return mappings;
};
