export enum EntryPointType {
    MAIN = "main",
    AGENT = "agent",
    MINECRAFT_BUKKIT = "minecraft.bukkit",
    MINECRAFT_BUNGEE = "minecraft.bungee",
    MINECRAFT_VELOCITY = "minecraft.velocity",
    MINECRAFT_FORGE = "minecraft.forge",
    MINECRAFT_FABRIC = "minecraft.fabric",
}

export enum CharacteristicType {
    CLASS_LOADING = "class-loading",
    ENCRYPTION = "encryption",
    FILE_IO = "file-io",
    NETWORK_IO = "network-io",
    OBJECT_SERDES = "object-serdes",
    REFLECTION = "reflection",
    NATIVE_CODE = "native-code",
    PROCESS_MANIPULATION = "process-manipulation",
}
