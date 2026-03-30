import { type ArrayType, type MethodType, parseType, type Type, TypeKind } from "@katana-project/asm/type";

interface CollectionProto<T> {
    elements: Record<string, T>;
    size(): number;
    clear(): void;
    values(): T[];
}

interface MappingCollection<T extends MappedElement> extends CollectionProto<T> {
    get(src: string, srcDesc?: string): T;
    getOrNull(src: string, srcDesc?: string): T | null;
    merge(coll: MappingCollection<T>): void;
}

const collection = <T>(): CollectionProto<T> => {
    return {
        elements: {},
        size(): number {
            return Object.keys(this.elements).length;
        },
        clear(): void {
            this.elements = {};
        },
        values(): T[] {
            return Object.entries(this.elements)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([, element]) => element);
        },
    };
};

const elementCollection = <T extends MappedElement>(
    func: (src: string) => T,
    mergeFunc: (src: T, dst: T) => void
): MappingCollection<T> => {
    return {
        ...collection(),
        get(key: string): T {
            let element = this.elements[key];
            if (!element) {
                element = func(key);
                this.elements[key] = element;
            }

            return element;
        },
        getOrNull(key: string): T | null {
            return this.elements[key] ?? null;
        },
        merge(coll: MappingCollection<T>): void {
            for (const [key, element] of Object.entries(coll.elements)) {
                const elem = this.get(key);
                mergeFunc(elem, element);
            }
        },
    };
};

const memberCollection = <T extends MappedMember = MappedMember>(
    func: (src: string, srcDesc: string) => T,
    mergeFunc: (src: T, dst: T) => void
): MappingCollection<T> => {
    return {
        ...collection(),
        get(src: string, srcDesc: string = ""): T {
            const key = `${src}:${srcDesc}`;
            let element = this.elements[key];
            if (!element) {
                element = func(src, srcDesc);
                this.elements[key] = element;
            }

            return element;
        },
        getOrNull(src: string, srcDesc?: string): T | null {
            if (!srcDesc) {
                return this.elements[`${src}:`] ?? null;
            }

            return this.elements[`${src}:${srcDesc}`] ?? this.elements[`${src}:`] ?? null;
        },
        merge(coll: MappingCollection<T>): void {
            for (const [key, element] of Object.entries(coll.elements)) {
                let elem = this.elements[key];
                if (!elem) {
                    elem = func(element.src, element.srcDesc);
                    this.elements[key] = elem;
                }

                mergeFunc(elem, element);
            }
        },
    };
};

export interface MappedElement {
    src: string;
    dst?: string;
}

export interface MappedMember extends MappedElement {
    srcDesc: string;
}

const mappedMember = (src: string, srcDesc: string): MappedMember => ({ src, srcDesc });
const mergeMembers = (src: MappedMember, dst: MappedMember): void => {
    if (dst.dst) {
        src.dst = dst.dst;
    }
};

export interface MappedClass extends MappedElement {
    fields: MappingCollection<MappedMember>;
    methods: MappingCollection<MappedMember>;
}

const mappedClass = (src: string): MappedClass => {
    return {
        src,
        fields: memberCollection(mappedMember, mergeMembers),
        methods: memberCollection(mappedMember, mergeMembers),
    };
};
const mergeClasses = (src: MappedClass, dst: MappedClass): void => {
    if (dst.dst) {
        src.dst = dst.dst;
    }

    src.fields.merge(dst.fields);
    src.methods.merge(dst.methods);
};

export interface MappingSet extends MappingCollection<MappedClass> {}

export const mappingSet = (): MappingSet => elementCollection(mappedClass, mergeClasses);

export const remapType = (type: Type, mappingSet: MappingSet): Type => {
    switch (type.kind) {
        case TypeKind.OBJECT: {
            const clazz = mappingSet.getOrNull(type.value.slice(1, -1));
            if (clazz && clazz.dst) {
                type.value = `L${clazz.dst};`;
            }
            break;
        }
        case TypeKind.METHOD: {
            const mthType = type as MethodType;
            mthType.parameters = mthType.parameters.map((p) => remapType(p, mappingSet));
            mthType.returnType = remapType(mthType.returnType, mappingSet);
            break;
        }
        case TypeKind.ARRAY: {
            const arrType = type as ArrayType;
            arrType.elementType = remapType(arrType.elementType, mappingSet);
            break;
        }
    }

    return type;
};

// 0+src + 0+dst -> src+dst
export const mergeAssociated = (zeroToSrc: MappingSet, zeroToDst: MappingSet): MappingSet => {
    const merged = mappingSet();
    for (const zeroToSrcKlass of zeroToSrc.values()) {
        const zeroToDstKlass = zeroToDst.getOrNull(zeroToSrcKlass.src);
        if (!zeroToDstKlass) {
            continue;
        }

        const mergedKlass = merged.get(zeroToSrcKlass.dst!);
        mergedKlass.dst = zeroToDstKlass.dst;

        for (const zeroToSrcField of zeroToSrcKlass.fields.values()) {
            const zeroToDstField = zeroToDstKlass.fields.getOrNull(zeroToSrcField.src, zeroToSrcField.srcDesc);
            if (!zeroToDstField) {
                continue;
            }

            const srcDesc = remapType(parseType(zeroToSrcField.srcDesc), zeroToSrc).value;
            const mergedField = mergedKlass.fields.get(zeroToSrcField.dst!, srcDesc);
            mergedField.dst = zeroToDstField.dst;
        }

        for (const zeroToSrcMethod of zeroToSrcKlass.methods.values()) {
            const zeroToDstMethod = zeroToDstKlass.methods.getOrNull(zeroToSrcMethod.src, zeroToSrcMethod.srcDesc);
            if (!zeroToDstMethod) {
                continue;
            }

            const srcDesc = remapType(parseType(zeroToSrcMethod.srcDesc), zeroToSrc).value;
            const mergedMethod = mergedKlass.methods.get(zeroToSrcMethod.dst!, srcDesc);
            mergedMethod.dst = zeroToDstMethod.dst;
        }
    }

    return merged;
};
