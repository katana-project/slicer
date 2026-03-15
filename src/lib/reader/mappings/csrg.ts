import { mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

// https://github.com/MinecraftForge/SrgUtils/blob/master/src/main/java/net/minecraftforge/srgutils/InternalUtils.java#L202

export const read = (data: string): MappingSet => {
    const lines = data.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));

    const mappings = mappingSet();
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const columns = line.split(" ");
        switch (columns.length) {
            case 2: {
                // top-level, should be a class
                if (columns.some((c) => c.endsWith("/"))) {
                    // package mapping, skip
                    continue;
                }

                const currentClass = mappings.get(columns[0]);
                currentClass.dst = columns[1];
                break;
            }
            case 3: {
                const [owner, src, dst] = columns;
                const currentClass = mappings.get(owner);
                const currentField = currentClass.fields.get(src);
                currentField.dst = dst;
                break;
            }
            case 4: {
                const [owner, src, srcDesc, dst] = columns;
                const currentClass = mappings.get(owner);
                const currentMethod = currentClass.methods.get(src, srcDesc);
                currentMethod.dst = dst;
                break;
            }
            // default: ignore
        }
    }

    return mappings;
};
