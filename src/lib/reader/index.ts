import type { SlurpResult } from "$lib/reader/hprof";
import { createDefaultWorkerPool } from "$lib/worker";
import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import ReaderWorker from "./worker?worker";

export interface Reader {
    hex(bytes: Uint8Array, rowBytes: number): Promise<string>;
    axml(bytes: Uint8Array): Promise<string>;
    hprof(blob: Blob): Promise<SlurpResult>;
    mappings(data: string, src?: string, dst?: string): Promise<MappingSet>;
    ktprotoModule(bytes: Uint8Array): Promise<string>;
    ktprotoPackageFragment(bytes: Uint8Array): Promise<string>;
}

export const workers = createDefaultWorkerPool<Reader>(() => new ReaderWorker());
