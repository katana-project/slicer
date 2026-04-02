import { type Language, toExtension } from "$lib/lang";
import { error, log } from "$lib/log";
import { toolsDisasmCache } from "$lib/state";
import { cancellable, type Cancellable, CancelledError, cyrb53, prettyError } from "$lib/utils";
import { type ClassEntry, type Entry, transformEntry } from "$lib/workspace";
import type { Member } from "@katana-project/asm";
import { get, writable } from "svelte/store";
import { cfr, jasm, procyon, slicer, vf } from "./builtin";

export type DisassemblerOptions = Record<string, string>;
export interface Disassembler {
    id: string;
    name?: string;
    version?: string;
    concurrency?: number;
    options: DisassemblerOptions;

    language(entry?: ClassEntry): Language;

    class: (entry: ClassEntry) => Cancellable<string>;
    method?: (entry: ClassEntry, method: Member) => Cancellable<string>;
}

export const all = writable<Map<string, Disassembler>>(
    new Map([
        [slicer.id, slicer],
        [jasm.id, jasm],
        [cfr.id, cfr],
        [vf.id, vf],
        [procyon.id, procyon],
    ])
);

export const find = (id: string): Disassembler | null => {
    return get(all).get(id) || null;
};

export const add = (disasm: Disassembler) => {
    all.update(($all) => {
        $all.set(disasm.id, disasm);
        return $all;
    });
};

export const remove = (id: string) => {
    all.update(($all) => {
        $all.delete(id);
        return $all;
    });
};

interface DisassemblyCacheEntry {
    hash: string;
    value: string;

    lastAccessed: number;
}

interface DisassemblyCache {
    get(id: string, key: string, entry: ClassEntry, func: () => Cancellable<string>): Cancellable<string>;
}

const dummyCache: DisassemblyCache = {
    get(_id, _key, _entry, func) {
        return func();
    },
};

const MAX_ENTRIES = 100;
const createCache = (): DisassemblyCache => {
    const cache0 = new Map<string, Map<string, DisassemblyCacheEntry>>();
    const tryEvict = () => {
        // evict least recently accessed entries from each disassembler's cache until we're under the limit
        for (const disasmCache of cache0.values()) {
            const entries = Array.from(disasmCache.entries());
            if (entries.length < MAX_ENTRIES) {
                return;
            }

            entries.sort(([, a], [, b]) => a.lastAccessed - b.lastAccessed);
            while (entries.length >= MAX_ENTRIES) {
                const [key] = entries.shift()!;
                disasmCache.delete(key);
            }
        }
    };

    return {
        get(id, key, entry, func) {
            let disasmCache = cache0.get(id);
            if (!disasmCache) {
                disasmCache = new Map<string, DisassemblyCacheEntry>();
                cache0.set(id, disasmCache);
            }

            return cancellable(async () => {
                const dataHash = cyrb53(await entry.data.bytes()).toString(16);
                const cached = disasmCache!.get(key);
                if (cached && cached.hash === dataHash) {
                    log(`cache hit for ${key} (hash: ${dataHash})`);
                    cached.lastAccessed = Date.now();
                    return cached;
                }

                log(`cache miss for ${key} (hash: ${dataHash})`);
                return { hash: dataHash };
            }).flatMap((cached) => {
                if ("value" in cached) {
                    return cancellable(async () => cached.value);
                }

                tryEvict();
                return func().map((value) => {
                    log(`caching result for ${key} (hash: ${cached.hash})`);
                    disasmCache!.set(key, { hash: cached.hash, value, lastAccessed: Date.now() });
                    return value;
                });
            });
        },
    };
};

// Svelte derived stores don't keep their value if there are no subscribers, so we need to keep a reference to the current cache instance like this
let cacheInstance = dummyCache;
toolsDisasmCache.subscribe(($toolsDisasmCache) => {
    cacheInstance = $toolsDisasmCache ? createCache() : dummyCache;
});

export const disassemble = (entry: ClassEntry, disasm: Disassembler): Cancellable<string> => {
    return cacheInstance
        .get(disasm.id, entry.name, entry, () => disasm.class(entry))
        .map(null, (e) => {
            if (e instanceof CancelledError) {
                return "";
            }

            error(`failed to disassemble ${entry.name}`, e);
            return `// Failed to disassemble ${entry.name}; disassembler threw error.\n${prettyError(e).replaceAll(/^/gm, "// ")}`;
        });
};

export const disassembleMethod = (entry: ClassEntry, method: Member, disasm: Disassembler): Cancellable<string> => {
    if (!disasm.method) {
        return cancellable(() => {
            throw new Error("Disassembler does not support single-method disassembly");
        });
    }

    const signature = method.name.string + method.type.string;
    return cacheInstance
        .get(disasm.id, `${entry.name}#${signature}`, entry, () => disasm.method!(entry, method))
        .map(null, (e) => {
            if (e instanceof CancelledError) {
                return "";
            }

            error(`failed to disassemble ${entry.name}#${signature} method`, e);
            return `// Failed to disassemble ${entry.name}#${signature} method; disassembler threw error.\n${prettyError(e).replaceAll(/^/gm, "// ")}`;
        });
};

export const disassembleEntry = (entry: ClassEntry, disasm: Disassembler): Cancellable<Entry> => {
    return disassemble(entry, disasm).map((output) =>
        transformEntry(entry, toExtension(disasm.language(entry) || "plaintext"), output)
    );
};
