import type { MappedClass, MappedMember, MappingSet } from "$lib/workspace/analysis/mapping/data";

const sortBySource = <T extends { src: string }>(items: T[]): T[] => {
    return items.sort((left, right) => left.src.localeCompare(right.src));
};

const sortMembers = <T extends { src: string; srcDesc: string }>(items: T[]): T[] => {
    return items.sort(
        (left, right) => left.src.localeCompare(right.src) || left.srcDesc.localeCompare(right.srcDesc)
    );
};

export interface SortedClass extends MappedClass {
    sortedFields: MappedMember[];
    sortedMethods: MappedMember[];
}

export const getSortedClasses = (mappingSet: MappingSet): SortedClass[] => {
    const classes = sortBySource(Object.values(mappingSet.elements));

    const result: SortedClass[] = [];
    for (const klass of classes) {
        const sortedFields = sortMembers(Object.values(klass.fields.elements));
        const sortedMethods = sortMembers(Object.values(klass.methods.elements));

        result.push({
            ...klass,
            sortedFields,
            sortedMethods,
        });
    }

    return result;
};
