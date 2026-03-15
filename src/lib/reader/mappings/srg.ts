import { mappingSet, type MappingSet } from "$lib/workspace/analysis/mapping/data";

// https://github.com/MinecraftForge/SrgUtils/blob/master/src/main/java/net/minecraftforge/srgutils/InternalUtils.java#L67

// SRG and XSRG

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
    const lines = data.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));

    const mappings = mappingSet();
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const columns = line.split(" ");

        const type = columns.shift()!;
        switch (type) {
            case "PK:":
                break;
            case "CL:": {
                if (columns.length < 2) {
                    throw new Error(`Invalid CL mapping (line ${i + 1})`);
                }

                const currentClass = mappings.get(columns[0]);
                currentClass.dst = columns[1];
                break;
            }
            case "FD:": {
                if (columns.length < 2) {
                    throw new Error(`Invalid FD mapping (line ${i + 1})`);
                }

                const isXsrg = !columns[1].includes("/");

                const src = splitRef(columns[0]);
                const dst = splitRef(columns[isXsrg ? 2 : 1]);

                const currentClass = mappings.get(src.owner);
                currentClass.dst = dst.owner;

                const currentField = currentClass.fields.get(src.name, isXsrg ? columns[1] : undefined);
                currentField.dst = dst.name;
                break;
            }
            case "MD:": {
                if (columns.length < 4) {
                    throw new Error(`Invalid MD mapping (line ${i + 1})`);
                }

                const src = splitRef(columns[0]);
                const dst = splitRef(columns[2]);

                const currentClass = mappings.get(src.owner);
                currentClass.dst = dst.owner;

                const currentMethod = currentClass.methods.get(src.name, columns[1]);
                currentMethod.dst = dst.name;
                break;
            }
            // default: ignore
        }
    }

    return mappings;
};
