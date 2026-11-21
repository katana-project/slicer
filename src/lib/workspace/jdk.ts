import { tl } from "$lib/i18n";
import { error } from "$lib/log";
import { analysisJdkVersion } from "$lib/state";
import { record } from "$lib/task";
import { refFromName } from "$lib/utils";
import { parseName, remoteData } from "$lib/workspace/data";
import { openDB } from "idb";
import { toast } from "svelte-sonner";
import { derived, get } from "svelte/store";
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

const BUCKET_URL = "https://data.slicer.run";
export const SUPPORTED_VERSIONS = [21, 25];

export const isVersionSupported = (version: number): boolean => SUPPORTED_VERSIONS.includes(version);

const rawIndex = derived<typeof analysisJdkVersion, RawDataIndex>(
    analysisJdkVersion,
    ($jdkVersion, set) => {
        const url = `${BUCKET_URL}/${$jdkVersion}`;
        if (!isVersionSupported($jdkVersion)) {
            set({ url, data: {} });
            return;
        }

        fetchIndex(url).then(set);
    },
    { url: `${BUCKET_URL}/25`, data: {} }
);

export type DataIndex = Map<string, string>; // [class name -> url]

const createIndex = ({ url, data }: RawDataIndex): DataIndex => {
    const index = new Map<string, string>();
    for (const [module, classes] of Object.entries(data)) {
        for (const klass of classes) {
            index.set(klass, `${url}/${module}/${klass}.class`);
        }
    }

    return index;
};

export const index = derived(rawIndex, ($rawIndex) => createIndex($rawIndex));

const classesStoreId = (version: number) => `classes-${version}`;
const lazyDB = openDB("jdk-cache", 2, {
    upgrade(db) {
        for (const version of SUPPORTED_VERSIONS) {
            const CLASSES_STORE = classesStoreId(version);
            if (!db.objectStoreNames.contains(CLASSES_STORE)) {
                db.createObjectStore(CLASSES_STORE);
            }
        }
    },
});

export const findClass = async (
    name: string,
    // for looking up and caching specific JDK versions, default to the current version in state
    url: string | null = null,
    version: number = get(analysisJdkVersion)
): Promise<Uint8Array | null> => {
    const CLASSES_STORE = classesStoreId(version);

    const db = await lazyDB;
    const cacheData = await db.get(CLASSES_STORE, name);
    if (cacheData) {
        return cacheData;
    }

    url = url ?? get(index).get(name) ?? null;
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
    const version = get(analysisJdkVersion);
    const $rawIndex = get(rawIndex);
    for (const [module0, classes] of Object.entries($rawIndex.data)) {
        if (classes.includes(name)) {
            module = module0;
            url = `${$rawIndex.url}/${module0}/${name}.class`;
            break;
        }
    }

    if (!module || !url) {
        return null;
    }

    const fqName = `${version}/${module}/${name}.class`;
    return {
        ...parseName(fqName),
        type: "file" as EntryType,
        state: 0 as AnalysisState,
        data: {
            ...(await remoteData(fqName, url)),
            // override data methods to fetch from cache if possible
            async bytes(): Promise<Uint8Array> {
                const data = await findClass(name, url, version);
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

export const jdkRefs = derived(rawIndex, ($rawIndex) =>
    Object.entries($rawIndex.data).flatMap(([module, classes]) => classes.map((k) => refFromName(k, module)))
);
