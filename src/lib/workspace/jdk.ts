import { tl } from "$lib/i18n";
import { error } from "$lib/log";
import { record } from "$lib/task";
import { refFromName } from "$lib/utils";
import { parseName, remoteData } from "$lib/workspace/data";
import type { ExternalTypeReference } from "@katana-project/laser";
import { openDB } from "idb";
import { toast } from "svelte-sonner";
import type { Entry, EntryType } from "./";
import type { AnalysisState } from "./analysis";

// JDK indexes are produced by the ojdk utility (https://github.com/katana-project/ojdk)

interface RawDataIndex {
    url: string;
    data: Record<string, string[]>;
}

const fetchIndex = async (url: string): Promise<RawDataIndex> => {
    let data: Record<string, string[]> = {};
    try {
        data = await (await fetch(`${url}/index.json`)).json();
    } catch (e) {
        error("failed to fetch class index", e);
        toast.error(tl("toast.error.title.generic"), {
            description: tl("toast.error.class-index"),
        });
    }

    return { url, data };
};

// use the OpenJDK 25 index globally
const JDK_VERSION = "25";
const rawIndex = await fetchIndex(`https://data.slicer.run/${JDK_VERSION}`);

type DataIndex = Map<string, string>; // [class name -> url]

const createIndex = ({ url, data }: RawDataIndex): DataIndex => {
    const index = new Map<string, string>();
    for (const [module, classes] of Object.entries(data)) {
        for (const klass of classes) {
            index.set(klass, `${url}/${module}/${klass}.class`);
        }
    }

    return index;
};

export const index = createIndex(rawIndex);

const CLASSES_STORE = `classes-${JDK_VERSION}`;
const lazyDB = openDB("jdk-cache", 1, {
    upgrade(db) {
        db.createObjectStore(CLASSES_STORE);
    },
});

export const findClass = async (name: string): Promise<Uint8Array | null> => {
    const db = await lazyDB;
    const cacheData = await db.get(CLASSES_STORE, name);
    if (cacheData) {
        return cacheData;
    }

    const url = index.get(name);
    if (!url) {
        return null;
    }

    return await record("task.fetch", name, async () => {
        const res = await fetch(url);
        if (!res.ok) {
            error(`failed to fetch class '${name}', status code ${res.status}`);
            return null;
        }

        const data = new Uint8Array(await res.arrayBuffer());
        await db.put(CLASSES_STORE, data, name);
        return data;
    });
};

export const createEntry = async (name: string): Promise<Entry | null> => {
    let module: string | null = null,
        url: string | null = null;
    for (const [module0, classes] of Object.entries(rawIndex.data)) {
        if (classes.includes(name)) {
            module = module0;
            url = `${rawIndex.url}/${module0}/${name}.class`;
            break;
        }
    }

    if (!module || !url) {
        return null;
    }

    const fqName = `${module}/${name}.class`;
    return {
        ...parseName(fqName),
        type: "file" as EntryType,
        state: 0 as AnalysisState,
        data: {
            ...(await remoteData(fqName, url)),
            // override data methods to fetch from cache if possible
            async bytes(): Promise<Uint8Array> {
                const data = await findClass(name);
                if (!data) {
                    throw new Error(`failed to fetch class '${name}'`);
                }

                return data;
            },
            async blob(): Promise<Blob> {
                return new Blob([(await this.bytes()) as Uint8Array<ArrayBuffer>]);
            },
            async stream(): Promise<ReadableStream<Uint8Array>> {
                const data = await this.bytes();
                return new ReadableStream({
                    start(controller) {
                        controller.enqueue(data);
                        controller.close();
                    },
                });
            },
            async text(): Promise<string> {
                const data = await this.bytes();
                return new TextDecoder().decode(data);
            },
        },
    };
};

export const jdkRefs: ExternalTypeReference[] = Object.entries(rawIndex.data).flatMap(([module, classes]) =>
    classes.map((k) => refFromName(k, module))
);
