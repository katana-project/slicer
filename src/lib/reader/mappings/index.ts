import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { read as readCsrg } from "./csrg";
import { read as readProguard } from "./proguard";
import { read as readSrg } from "./srg";
import { read as readTinyV1, readNamespaces as readTinyV1Namespaces } from "./tiny_v1";
import { read as readTinyV2, readNamespaces as readTinyV2Namespaces } from "./tiny_v2";
import { read as readTsrg } from "./tsrg";

export enum MappingType {
    TINY_V1 = "tiny_v1",
    TINY_V2 = "tiny_v2",
    PROGUARD = "proguard",
    SRG = "srg",
    CSRG = "csrg",
    TSRG = "tsrg",
}

const hasIndentedMembers = (data: string): boolean => {
    return data
        .split("\n")
        .some((line) => /^\s+/.test(line) && line.trim() !== "" && !line.trim().startsWith("#"));
};

const isSrg = (data: string): boolean => {
    return /^\s*(PK:|CL:|FD:|MD:)\s+/m.test(data);
};

const isTsrg = (data: string): boolean => {
    if (!hasIndentedMembers(data)) {
        return false;
    }

    const lines = data.split("\n").map((line) => line.trimEnd());
    let hasClass = false;
    let hasMember = false;
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === "" || trimmed.startsWith("#")) {
            continue;
        }

        const parts = trimmed.split(/\s+/g);
        if (/^\s+/.test(line)) {
            hasMember = hasMember || parts.length >= 2;
        } else {
            hasClass = hasClass || parts.length >= 2;
        }
    }

    return hasClass && hasMember;
};

const isCsrg = (data: string): boolean => {
    if (hasIndentedMembers(data)) {
        return false;
    }

    const lines = data.split("\n");
    for (const raw of lines) {
        const line = raw.trim();
        if (line === "" || line.startsWith("#")) {
            continue;
        }

        if (line.includes("->")) {
            return false;
        }

        const parts = line.split(/\s+/g);
        if (parts.length === 2 || parts.length === 3 || parts.length === 4) {
            return true;
        }
    }

    return false;
};

export const detect = (data: string): MappingType | null => {
    if (data.startsWith("v1\t")) {
        return MappingType.TINY_V1;
    } else if (data.startsWith("tiny\t2\t")) {
        return MappingType.TINY_V2;
    } else if (isSrg(data)) {
        return MappingType.SRG;
    } else if (isTsrg(data)) {
        return MappingType.TSRG;
    } else if (isCsrg(data)) {
        return MappingType.CSRG;
    } else if (data.includes("->") && data.includes(":")) {
        return MappingType.PROGUARD;
    }

    return null;
};

export const namespaces = (data: string): string[] => {
    const type = detect(data);
    if (!type) {
        throw new Error("Could not detect mapping format");
    }

    switch (type) {
        case MappingType.TINY_V1:
            return readTinyV1Namespaces(data);
        case MappingType.TINY_V2:
            return readTinyV2Namespaces(data);
    }
    return [];
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
        case MappingType.SRG:
            return readSrg(data);
        case MappingType.CSRG:
            return readCsrg(data);
        case MappingType.TSRG:
            return readTsrg(data);
    }
};
