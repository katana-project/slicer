import { MappingType } from "$lib/reader/mappings";
import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { write as writeCsrg } from "./csrg";
import { write as writeProguard } from "./proguard";
import { write as writeSrg } from "./srg";
import { write as writeTinyV1 } from "./tiny_v1";
import { write as writeTinyV2 } from "./tiny_v2";
import { write as writeTsrg } from "./tsrg";

export const write = (mappingType: MappingType, mappingSet: MappingSet): string => {
    switch (mappingType) {
        case MappingType.TINY_V1:
            return writeTinyV1(mappingSet);
        case MappingType.TINY_V2:
            return writeTinyV2(mappingSet);
        case MappingType.PROGUARD:
            return writeProguard(mappingSet);
        case MappingType.SRG:
            return writeSrg(mappingSet);
        case MappingType.CSRG:
            return writeCsrg(mappingSet);
        case MappingType.TSRG:
            return writeTsrg(mappingSet);
    }
};

export const getExtension = (mappingType: MappingType): string => {
    switch (mappingType) {
        case MappingType.TINY_V1:
        case MappingType.TINY_V2:
            return "tiny";
        case MappingType.PROGUARD:
            return "txt";
        case MappingType.SRG:
            return "srg";
        case MappingType.CSRG:
            return "csrg";
        case MappingType.TSRG:
            return "tsrg";
    }
};
