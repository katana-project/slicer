import { createDefaultWorkerPool } from "$lib/worker";
import type { AnalysisWorker } from "./worker";
import Worker from "./worker?worker";

export const workers = createDefaultWorkerPool<AnalysisWorker>(() => new Worker());
