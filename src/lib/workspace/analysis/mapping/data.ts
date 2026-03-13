interface CollectionProto<T> {
    elements: Record<string, T>;
    size(): number;
    clear(): void;
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
        get(src: string, srcDesc: string): T {
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
                return null;
            }

            return this.elements[`${src}:${srcDesc}`] ?? null;
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
