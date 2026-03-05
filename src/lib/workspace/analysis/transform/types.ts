import type { Icon } from "$lib/components/icons";
import type { ClassEntry } from "$lib/workspace";

export enum TransformationPoint {
    EARLY = "early",
    LATE = "late",
    ANY = "any",
}

export interface Transformer {
    id: string;
    group?: string;
    icon?: Icon;
    point?: TransformationPoint;

    // hides it from the menu and makes it always enabled
    internal?: boolean;

    run(entry: ClassEntry, data: Uint8Array): Uint8Array | PromiseLike<Uint8Array>;
}
