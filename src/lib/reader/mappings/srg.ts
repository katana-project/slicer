import { mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

const splitRef = (value: string): { owner: string; name: string } => {
    const index = value.lastIndexOf("/");
    if (index === -1) {
        throw new Error(`Invalid member reference: ${value}`);
    }

    return {
        owner: value.slice(0, index),
        name: value.slice(index + 1),
    };
};

export const read = (data: string): MappingSet => {
    const mappings = mappingSet();
    const lines = data.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const raw = lines[i].trim();
        if (raw === "" || raw.startsWith("#")) {
            continue;
        }

        const parts = raw.split(/\s+/g);
        const kind = parts[0];

        switch (kind) {
            case "PK:":
                break;
            case "CL:": {
                if (parts.length < 3) {
                    throw new Error(`Invalid CL mapping on line ${i + 1}`);
                }

                const klass = mappings.get(parts[1]);
                klass.dst = parts[2];
                break;
            }
            case "FD:": {
                if (parts.length < 3) {
                    throw new Error(`Invalid FD mapping on line ${i + 1}`);
                }

                const src = splitRef(parts[1]);
                const dst = splitRef(parts[2]);

                const klass = mappings.get(src.owner);
                if (dst.owner !== src.owner) {
                    klass.dst = dst.owner;
                }

                klass.fields.get(src.name, "").dst = dst.name;
                break;
            }
            case "MD:": {
                if (parts.length < 5) {
                    throw new Error(`Invalid MD mapping on line ${i + 1}`);
                }

                const src = splitRef(parts[1]);
                const srcDesc = parts[2];
                const dst = splitRef(parts[3]);

                const klass = mappings.get(src.owner);
                if (dst.owner !== src.owner) {
                    klass.dst = dst.owner;
                }

                klass.methods.get(src.name, srcDesc).dst = dst.name;
                break;
            }
            default:
                throw new Error(`Unsupported SRG line on ${i + 1}: ${raw}`);
        }
    }

    return mappings;
};
