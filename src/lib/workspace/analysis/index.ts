import { error } from "$lib/log";
import { analysisBackground } from "$lib/state";
import { recordProgress } from "$lib/task";
import { cancellable, type Cancellable, rateLimit } from "$lib/utils";
import { createDefaultWorkerPool } from "$lib/worker";
import { type ClassEntry, entries, type Entry, EntryType, type MemberEntry } from "$lib/workspace";
import { TransformationPoint, transformInPlace } from "$lib/workspace/analysis/transform";
import { unwrapTransforms } from "$lib/workspace/data";
import { FLAG_SKIP_ATTR_PARSE, FLAG_SLICE_BUFFER } from "@katana-project/asm";
import { get } from "svelte/store";
import { QueryType, SearchMode, type SearchQuery, type SearchResult } from "./search";
import type { AnalysisWorker } from "./worker";
import Worker from "./worker?worker";

export * from "./types";

export const enum AnalysisState {
    NONE,
    PARTIAL,
    FULL,
}

export const workers = createDefaultWorkerPool<AnalysisWorker>(() => new Worker());
const analyzeClass = async (entry: Entry, skipAttr: boolean) => {
    const buffer = await entry.data.bytes();

    try {
        const classEntry = entry as ClassEntry;

        classEntry.node = await workers
            .instance()
            .task((w) => w.read(buffer, skipAttr ? FLAG_SKIP_ATTR_PARSE | FLAG_SLICE_BUFFER : 0));
        if (entry.type === EntryType.MEMBER) {
            const memberEntry = entry as MemberEntry;

            // replace the member with a newly analyzed one
            const member = memberEntry.member;
            memberEntry.member =
                (member.type.string.charAt(0) === "(" ? memberEntry.node.methods : memberEntry.node.fields).find(
                    (m) => m.name.string === member.name.string && m.type.string === member.type.string
                ) || member;
        } else {
            classEntry.type = EntryType.CLASS;
        }

        await transformInPlace(classEntry, TransformationPoint.EARLY);

        // post-transform analysis
        if (entry.type === EntryType.CLASS) {
            const [entryPoints, characteristics] = await workers
                .instance()
                .task(async (w) => [
                    await w.collectEntryPoints(classEntry.node),
                    await w.collectCharacteristics(classEntry.node),
                ]);

            classEntry.entryPoints = entryPoints;
            classEntry.characteristics = characteristics;
        }
    } catch (e) {
        error(`failed to analyze class ${entry.name}`, e);
    }
};

export const analyze = async (entry: Entry, state: AnalysisState = AnalysisState.PARTIAL) => {
    if (entry.state === AnalysisState.FULL) return;

    // unwrap all transforms before analysis to get the original data
    entry.data = unwrapTransforms(entry.data);

    // full analysis does more expensive magic header detection
    // and reads class nodes in their entirety
    switch (state) {
        case AnalysisState.PARTIAL: {
            switch (entry.extension) {
                case "class":
                    await analyzeClass(entry, true);
                    break;
            }
            break;
        }
        case AnalysisState.FULL: {
            const blob = await entry.data.blob();
            const magic = new DataView(await blob.slice(0, Math.min(8, blob.size)).arrayBuffer());
            if (magic.byteLength >= 8) {
                if (entry.extension?.includes("xml") && magic.getUint16(0, true) === 0x0003 /* ChunkType.ResXml */) {
                    entry.type = EntryType.BINARY_XML;
                    break;
                }
            }
            if (magic.byteLength >= 4) {
                if (magic.getUint32(0, false) === 0xcafebabe) {
                    await analyzeClass(entry, false);
                    break;
                }
            }
            break;
        }
    }

    entry.state = state;
};

const queue = new Set<Entry>();

export const analyzeSchedule = (...entries: Entry[]) => {
    entries.forEach((e) => queue.add(e));
};

let backgroundRunning = false;
const backgroundCallbacks: (() => boolean)[] = [];
export const analyzeBackground = async () => {
    // schedule another run if one is already running, since something new was added to the queue
    if (backgroundRunning) {
        backgroundCallbacks.push(() => true);
        return;
    }

    backgroundRunning = true;

    // snapshot queue
    const $queue = Array.from(queue.values()).filter((e) => e.state === AnalysisState.NONE);

    queue.clear();

    if (get(analysisBackground) && $queue.length > 0) {
        await recordProgress("task.analyze", null, async (task) => {
            let completed = 0;
            await Promise.all(
                $queue.map(
                    rateLimit(async (entry) => {
                        await analyze(entry);

                        completed++;
                        task.desc.set(`${completed}/${$queue.length}`);
                        task.progress?.set((completed / $queue.length) * 100);
                    }, workers.size * 2)
                )
            );

            task.desc.set(`${$queue.length}`);
        });

        // very hacky, but we need to trigger post-analysis updates to entries -> classes -> consumers
        entries.update(($entries) => $entries);
    }

    backgroundRunning = false;
    const wantsAgain = backgroundCallbacks.map((cb) => cb()).some((v) => v);
    backgroundCallbacks.length = 0; // clear callbacks

    if (wantsAgain) {
        analyzeBackground().then();
    }
};

export const waitForBackgroundAnalysis = (func: () => boolean) => {
    if (!backgroundRunning) {
        const wantsAgain = func();
        if (wantsAgain) {
            analyzeBackground().then();
        }
    } else {
        backgroundCallbacks.push(func);
    }
};

export { QueryType, SearchMode, type SearchQuery, type SearchResult };

export const search = (
    entries: Entry[],
    query: SearchQuery,
    onResult: (result: SearchResult) => void
): Cancellable<void> => {
    entries = entries.filter((e) => e.type === EntryType.CLASS);

    return cancellable((isCancelled) =>
        recordProgress("task.search", null, async (task) => {
            let completed = 0;
            await Promise.all(
                (entries as ClassEntry[]).map(
                    rateLimit(async (entry) => {
                        if (isCancelled()) {
                            return;
                        }

                        (await workers.instance().task((w) => w.search({ ...query, node: entry.node }))).forEach(
                            (res) => onResult({ ...res, entry })
                        );

                        completed++;
                        task.desc.set(`${completed}/${entries.length}`);
                        task.progress?.set((completed / entries.length) * 100);
                    }, workers.size * 2)
                )
            );

            task.desc.set(`${completed}`);
        })
    );
};
