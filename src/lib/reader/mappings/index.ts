import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { read as readCsrg } from "./csrg";
import { read as readProguard } from "./proguard";
import { read as readSrg } from "./srg";
import { read as readTinyV1, readNamespaces as readTinyV1Namespaces } from "./tiny_v1";
import { read as readTinyV2, readNamespaces as readTinyV2Namespaces } from "./tiny_v2";
import { read as readTsrg, readNamespaces as readTsrgNamespaces } from "./tsrg";

export enum MappingType {
    TINY_V1 = "tiny_v1",
    TINY_V2 = "tiny_v2",
    PROGUARD = "proguard",
    SRG = "srg",
    CSRG = "csrg",
    TSRG = "tsrg",
}

const detect = (data: string): MappingType => {
    const lines = data.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));

    const header = lines[0];
    if (lines.some((l) => l.startsWith("\t"))) {
        // tab indents exist
        if (header?.startsWith("tiny\t2\t")) {
            return MappingType.TINY_V2;
        } else {
            return MappingType.TSRG;
        }
    } else {
        if (header?.startsWith("v1\t")) {
            return MappingType.TINY_V1;
        } else if (data.includes("->") && data.includes(":")) {
            return MappingType.PROGUARD;
        } else if (/^(PK:|CL:|FD:|MD:)/m.test(data)) {
            return MappingType.SRG;
        } else {
            return MappingType.CSRG;
        }
    }
};

export const namespaces = (data: string): string[] => {
    const type = detect(data);
    switch (type) {
        case MappingType.TINY_V1:
            return readTinyV1Namespaces(data);
        case MappingType.TINY_V2:
            return readTinyV2Namespaces(data);
        case MappingType.TSRG:
            return readTsrgNamespaces(data);
    }

    return [];
};

export const read = (data: string, dst?: string): MappingSet => {
    const type = detect(data);
    switch (type) {
        case MappingType.TINY_V1:
            return readTinyV1(data, dst);
        case MappingType.TINY_V2:
            return readTinyV2(data, dst);
        case MappingType.PROGUARD:
            return readProguard(data);
        case MappingType.SRG:
            return readSrg(data);
        case MappingType.CSRG:
            return readCsrg(data);
        case MappingType.TSRG:
            return readTsrg(data);
    }
};
