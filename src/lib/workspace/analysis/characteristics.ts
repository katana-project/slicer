import type { Icon } from "$lib/components/icons";
import type { ClassEntry } from "$lib/workspace";
import {
    Binary,
    Box,
    Bug,
    CloudUpload,
    Cpu,
    EarthLock,
    FilePen,
    FlipVertical2,
    LoaderPinwheel,
    Network,
    PlayIcon,
    Puzzle,
    ScanText,
    Server,
    Zap,
} from "@lucide/svelte";
import type { Icon as ScriptIcon } from "@run-slicer/script";
import { writable } from "svelte/store";
import {
    type CharacteristicGroupType,
    type CharacteristicType,
    StandardCharacteristicGroupType,
    StandardCharacteristicType,
} from "./types";

export interface Characteristic {
    type: CharacteristicType;
    label?: string;
    group?: CharacteristicGroupType;
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
    {
        type: StandardCharacteristicType.ENTRY_POINT_MAIN,
        group: StandardCharacteristicGroupType.ENTRY_POINT,
        icon: PlayIcon,
    },
    {
        type: StandardCharacteristicType.ENTRY_POINT_AGENT,
        group: StandardCharacteristicGroupType.ENTRY_POINT,
        icon: Bug,
    },
    {
        type: StandardCharacteristicType.ENTRY_POINT_MINECRAFT_BUKKIT,
        group: StandardCharacteristicGroupType.ENTRY_POINT,
        icon: Server,
    },
    {
        type: StandardCharacteristicType.ENTRY_POINT_MINECRAFT_BUNGEE,
        group: StandardCharacteristicGroupType.ENTRY_POINT,
        icon: Network,
    },
    {
        type: StandardCharacteristicType.ENTRY_POINT_MINECRAFT_VELOCITY,
        group: StandardCharacteristicGroupType.ENTRY_POINT,
        icon: Zap,
    },
    {
        type: StandardCharacteristicType.ENTRY_POINT_MINECRAFT_FORGE,
        group: StandardCharacteristicGroupType.ENTRY_POINT,
        icon: Box,
    },
    {
        type: StandardCharacteristicType.ENTRY_POINT_MINECRAFT_FABRIC,
        group: StandardCharacteristicGroupType.ENTRY_POINT,
        icon: Puzzle,
    },
]);

export interface CharacteristicGroup {
    type: CharacteristicGroupType;
    label?: string;
}

export const groups = writable<CharacteristicGroup[]>([]);

export interface CharacteristicProvider {
    match(entry: ClassEntry): Promise<CharacteristicType[]>;
}

export const providers = writable<Map<string, CharacteristicProvider>>(new Map());
