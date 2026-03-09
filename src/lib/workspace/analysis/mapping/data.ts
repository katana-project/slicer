interface MappingCollection<T extends MappedElement> {
    elements: Map<string, T>;

    get(src: string, srcDesc?: string): T;
    getOrNull(src: string, srcDesc?: string): T | null;
    merge(coll: MappingCollection<T>): void;
}

const collection = <T extends MappedElement>(
    func: (src: string) => T,
    mergeFunc: (src: T, dst: T) => void
): MappingCollection<T> => {
    return {
        elements: new Map(),
        get(key: string): T {
            let element = this.elements.get(key);
            if (!element) {
                element = func(key);
                this.elements.set(key, element);
            }

            return element;
        },
        getOrNull(key: string): T | null {
            return this.elements.get(key) ?? null;
        },
        merge(coll: MappingCollection<T>): void {
            for (const [key, element] of coll.elements) {
                const existing = this.elements.get(key);
                if (existing) {
                    mergeFunc(existing, element);
                } else {
                    this.elements.set(key, element);
                }
            }
        },
    };
};

const memberCollection = <T extends MappedMember = MappedMember>(
    func: (src: string, srcDesc: string) => T,
    mergeFunc: (src: T, dst: T) => void
): MappingCollection<T> => {
    return {
        elements: new Map(),
        get(src: string, srcDesc: string): T {
            const key = `${src}${srcDesc}`;
            let element = this.elements.get(key);
            if (!element) {
                element = func(src, srcDesc);
                this.elements.set(key, element);
            }

            return element;
        },
        getOrNull(src: string, srcDesc?: string): T | null {
            if (!srcDesc) {
                return null;
            }

            return this.elements.get(`${src}${srcDesc}`) ?? null;
        },
        merge(coll: MappingCollection<T>): void {
            for (const [key, element] of coll.elements) {
                const existing = this.elements.get(key);
                if (existing) {
                    mergeFunc(existing, element);
                } else {
                    this.elements.set(key, element);
                }
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

export const mappingSet = (): MappingSet => collection(mappedClass, mergeClasses);
