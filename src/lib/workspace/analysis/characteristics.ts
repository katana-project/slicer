import type { Icon } from "$lib/components/icons";
import type { ClassEntry } from "$lib/workspace";
import { type CharacteristicType, StandardCharacteristicType } from "$lib/workspace/analysis/types";
import { Binary, CloudUpload, Cpu, EarthLock, FilePen, FlipVertical2, LoaderPinwheel, ScanText } from "@lucide/svelte";
import type { Icon as ScriptIcon } from "@run-slicer/script";
import { writable } from "svelte/store";

export interface Characteristic {
    type: CharacteristicType;
    label?: string;
    icon?: Icon | ScriptIcon;
}

export const characteristics = writable<Characteristic[]>([
    {
        type: StandardCharacteristicType.CLASS_LOADING,
        icon: LoaderPinwheel,
    },
    {
        type: StandardCharacteristicType.ENCRYPTION,
        icon: EarthLock,
    },
    {
        type: StandardCharacteristicType.FILE_IO,
        icon: FilePen,
    },
    {
        type: StandardCharacteristicType.NETWORK_IO,
        icon: CloudUpload,
    },
    {
        type: StandardCharacteristicType.OBJECT_SERDES,
        icon: ScanText,
    },
    {
        type: StandardCharacteristicType.REFLECTION,
        icon: FlipVertical2,
    },
    {
        type: StandardCharacteristicType.NATIVE_CODE,
        icon: Binary,
    },
    {
        type: StandardCharacteristicType.PROCESS_MANIPULATION,
        icon: Cpu,
    },
]);

export interface CharacteristicProvider {
    match(entry: ClassEntry): Promise<CharacteristicType[]>;
}

export const providers = writable<Map<string, CharacteristicProvider>>(new Map());
