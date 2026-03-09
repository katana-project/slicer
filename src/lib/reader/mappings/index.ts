import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { read as readProguard } from "./proguard";
import { read as readTinyV1 } from "./tiny_v1";
import { read as readTinyV2 } from "./tiny_v2";

export enum MappingType {
    TINY_V1 = "tiny_v1",
    TINY_V2 = "tiny_v2",
    PROGUARD = "proguard",
}

export const detect = (data: string): MappingType | null => {
    if (data.startsWith("v1\t")) {
        return MappingType.TINY_V1;
    } else if (data.startsWith("tiny\t2\t")) {
        return MappingType.TINY_V2;
    } else if (data.includes("->") && data.includes(":")) {
        return MappingType.PROGUARD;
    }

    return null;
};

export const read = (data: string, dst?: string): MappingSet => {
    const type = detect(data);
    if (!type) {
        throw new Error("Could not detect mapping format");
    }

    switch (type) {
        case MappingType.TINY_V1:
            return readTinyV1(data, dst);
        case MappingType.TINY_V2:
            return readTinyV2(data, dst);
        case MappingType.PROGUARD:
            return readProguard(data);
    }
};
