import { writable } from "svelte/store";

interface MappingCollection<T extends MappedElement> {
    elements: Map<string, T>;

    get(src: string, srcDesc?: string): T;
    getOrNull(src: string, srcDesc?: string): T | null;
}

const collection = <T extends MappedElement>(func: (src: string) => T): MappingCollection<T> => {
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
    };
};

const memberCollection = <T extends MappedMember = MappedMember>(
    func: (src: string, srcDesc: string) => T
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
    };
};

export interface MappedElement {
    src: string;
    dst?: string;
}

export interface MappedMember extends MappedElement {
    srcDesc: string;
    dstDesc?: string;
}

const mappedMember = (src: string, srcDesc: string): MappedMember => ({ src, srcDesc });

export interface MappedClass extends MappedElement {
    fields: MappingCollection<MappedMember>;
    methods: MappingCollection<MappedMember>;
}

const mappedClass = (src: string): MappedClass => {
    return {
        src,
        fields: memberCollection(mappedMember),
        methods: memberCollection(mappedMember),
    };
};

export interface MappingSet extends MappingCollection<MappedClass> {}

const mappingSet = (): MappingSet => collection(mappedClass);

const testSet = mappingSet();
testSet.get("java/lang/String").dst = "java/lang/MyString";

export const mappings = writable(testSet);
