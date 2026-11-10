export type CharacteristicGroupType = string;
export enum StandardCharacteristicGroupType {
    GENERAL = "general", // default group for characteristics that don't belong to any other group
    ENTRY_POINT = "entry-point",
}

export type CharacteristicType = string;
export enum StandardCharacteristicType {
    CLASS_LOADING = "class-loading",
    ENCRYPTION = "encryption",
    FILE_IO = "file-io",
    NETWORK_IO = "network-io",
    OBJECT_SERDES = "object-serdes",
    REFLECTION = "reflection",
    NATIVE_CODE = "native-code",
    PROCESS_MANIPULATION = "process-manipulation",

    ENTRY_POINT_MAIN = "entry-point.main",
    ENTRY_POINT_AGENT = "entry-point.agent",
    ENTRY_POINT_MINECRAFT_BUKKIT = "entry-point.minecraft.bukkit",
    ENTRY_POINT_MINECRAFT_BUNGEE = "entry-point.minecraft.bungee",
    ENTRY_POINT_MINECRAFT_VELOCITY = "entry-point.minecraft.velocity",
    ENTRY_POINT_MINECRAFT_FORGE = "entry-point.minecraft.forge",
    ENTRY_POINT_MINECRAFT_FABRIC = "entry-point.minecraft.fabric",
}
