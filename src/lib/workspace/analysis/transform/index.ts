import { log } from "$lib/log";
import { analysisTransformers } from "$lib/state";
import type { ClassEntry } from "$lib/workspace";
import { transformData, unwrapTransforms } from "$lib/workspace/data";
import { get, writable, type Writable } from "svelte/store";
import { internalEarlyTransformers, internalTransformers } from "./internal";
import normalizationTransformers from "./norm";
import readabilityTransformers from "./read";
import { TransformationPoint, type Transformer } from "./types";

// transformers are responsible for keeping entry structures up-to-date, as the entry does not undergo additional analysis after transformation

export const transformers: Writable<Transformer[]> = writable([
    ...internalEarlyTransformers,
    ...readabilityTransformers,
    ...normalizationTransformers,
    ...internalTransformers,
]);

export const enabled = (trf: Transformer): boolean => trf.internal || get(analysisTransformers).includes(trf.id);
export const toggle = (trf: Transformer, enabled: boolean) => {
    analysisTransformers.update(($analysisTransformers) => {
        // remove existing entry
        $analysisTransformers = $analysisTransformers.filter((i) => i !== trf.id);
        if (enabled) {
            $analysisTransformers.push(trf.id);
        }

        return $analysisTransformers;
    });
};

export const transform = async (
    entry: ClassEntry,
    point: TransformationPoint = TransformationPoint.LATE
): Promise<ClassEntry> => {
    const enabledTrfs = Array.from(get(transformers).values()).filter(
        (trf) =>
            enabled(trf) && ((trf.point ?? TransformationPoint.LATE) === point || trf.point === TransformationPoint.ANY)
    );

    const unwrappedData = unwrapTransforms(entry.data);
    const originalData = await unwrappedData.bytes();
    let data = originalData;

    const cloneEntry: ClassEntry = { ...entry, node: window.structuredClone(entry.node) };
    for (const transformer of enabledTrfs) {
        if (!transformer.internal) {
            log(`running transformer '${transformer.id}' on '${entry.name}'`);
        }

        data = await transformer.run(cloneEntry, data);
    }

    // create transformed entry only if a transformation happened
    // or if there was already a transformation that was unwrapped
    if (data !== originalData || unwrappedData !== entry.data) {
        cloneEntry.data = transformData(unwrappedData, data);
        return cloneEntry;
    }

    return entry;
};

export const transformInPlace = async (
    entry: ClassEntry,
    point: TransformationPoint = TransformationPoint.LATE
): Promise<void> => {
    const transformedEntry = await transform(entry, point);
    if (transformedEntry !== entry) {
        Object.assign(entry, transformedEntry);
    }
};

export * from "./types";
