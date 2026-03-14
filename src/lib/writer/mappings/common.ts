import type { MappedClass, MappedMember, MappingSet } from "$lib/workspace/analysis/mapping/data";

export interface MappedMemberWithDst extends MappedMember {
    dst: string;
}

const sortBySource = <T extends { src: string }>(items: T[]): T[] => {
    return items.sort((left, right) => left.src.localeCompare(right.src));
};

const sortMembers = <T extends { src: string; srcDesc: string }>(items: T[]): T[] => {
    return items.sort(
        (left, right) => left.src.localeCompare(right.src) || left.srcDesc.localeCompare(right.srcDesc)
    );
};

const hasDst = (member: MappedMember): member is MappedMemberWithDst => {
    return typeof member.dst === "string" && member.dst.length > 0;
};

const getMappedMembers = (members: Record<string, MappedMember>): MappedMemberWithDst[] => {
    return sortMembers(Object.values(members)).filter(hasDst);
};

const shouldWriteClass = (classDst: string | undefined, fieldCount: number, methodCount: number): boolean => {
    return Boolean(classDst) || fieldCount > 0 || methodCount > 0;
};

export interface MappedClassWithMembers extends MappedClass {
    fieldsWithDst: MappedMemberWithDst[];
    methodsWithDst: MappedMemberWithDst[];
}

export const getSortedClassesWithMappedMembers = (mappingSet: MappingSet): MappedClassWithMembers[] => {
    const classes = sortBySource(Object.values(mappingSet.elements));

    const result: MappedClassWithMembers[] = [];
    for (const klass of classes) {
        const fieldsWithDst = getMappedMembers(klass.fields.elements);
        const methodsWithDst = getMappedMembers(klass.methods.elements);

        if (!shouldWriteClass(klass.dst, fieldsWithDst.length, methodsWithDst.length)) {
            continue;
        }

        result.push({
            ...klass,
            fieldsWithDst,
            methodsWithDst,
        });
    }

    return result;
};
