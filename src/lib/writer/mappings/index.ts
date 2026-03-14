import { MappingType } from "$lib/reader/mappings";
import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { write as writeProguard } from "./proguard";
import { write as writeTinyV1 } from "./tiny_v1";
import { write as writeTinyV2 } from "./tiny_v2";

export const write = (mappingType: MappingType, mappingSet: MappingSet): string => {
    switch (mappingType) {
        case MappingType.TINY_V1:
            return writeTinyV1(mappingSet);
        case MappingType.TINY_V2:
            return writeTinyV2(mappingSet);
        case MappingType.PROGUARD:
            return writeProguard(mappingSet);
    }
};

export const getExtension = (mappingType: MappingType): string => {
    switch (mappingType) {
        case MappingType.TINY_V1:
        case MappingType.TINY_V2:
            return "tiny";
        case MappingType.PROGUARD:
            return "txt";
    }
};
