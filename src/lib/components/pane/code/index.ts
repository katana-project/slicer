import { disassemble, disassembleMethod, type Disassembler, type DisassemblerOptions } from "$lib/disasm";
import { fromExtension, type Language } from "$lib/lang";
import { error } from "$lib/log";
import { workers } from "$lib/reader";
import { cancellable, type Cancellable } from "$lib/utils";
import { type ClassEntry, type Entry, EntryType, type MemberEntry } from "$lib/workspace";

export enum Interpretation {
    TEXT = "text",
    HEX = "hex",
    CLASS = "class",
    BINARY_XML = "binary-xml",
    KTPROTO = "ktproto",
}

export interface InterpretationOptions {
    type: Interpretation;

    hexRowBytes: number;
    disasmOptions: Record<string, DisassemblerOptions>;
}

// prettier-ignore
const extensions = {
    [Interpretation.HEX]: [
        "bin", "tar", "gz", "rar", "zip", "7z", "jar", "apk", "xapk", "dex", "lzma", "dll", "so", "dylib", "exe", "nbt", "ogg", "cer", "der", "crt", "mrpack"
    ],
    [Interpretation.KTPROTO]: ["kotlin_module", "kotlin_builtins", "kotlin_metadata"],
};

const typesByExts = new Map(
    (Object.entries(extensions) as [Interpretation, string[]][]).flatMap(([k, v]) => v.map((ext) => [ext, k]))
);

export const detectInterpretation = (entry: Entry): Interpretation => {
    if (entry.type === EntryType.CLASS || entry.type === EntryType.MEMBER) {
        return Interpretation.CLASS;
    } else if (entry.type === EntryType.BINARY_XML) {
        return Interpretation.BINARY_XML;
    }

    return entry.extension ? typesByExts.get(entry.extension) || Interpretation.TEXT : Interpretation.TEXT;
};

export const canInterpret = (entry: Entry, type: Interpretation): boolean => {
    switch (type) {
        case Interpretation.CLASS:
            return entry.type === EntryType.CLASS || entry.type === EntryType.MEMBER;
        case Interpretation.BINARY_XML:
            return entry.type === EntryType.BINARY_XML;
        case Interpretation.KTPROTO:
            return !!entry.extension && extensions[Interpretation.KTPROTO].includes(entry.extension);
    }

    return true;
};

export const detectLanguage = (entry: Entry, disasm: Disassembler, options: InterpretationOptions): Language => {
    switch (options.type) {
        case Interpretation.CLASS:
            return disasm.language(entry as ClassEntry) || "plaintext";
        case Interpretation.HEX:
            return "hex";
        case Interpretation.BINARY_XML:
            return "xml";
        case Interpretation.KTPROTO:
            return "json";
    }

    return entry.extension ? fromExtension(entry.extension) : "plaintext";
};

export const read = (entry: Entry, disasm: Disassembler, options: InterpretationOptions): Cancellable<string> => {
    switch (options.type) {
        case Interpretation.CLASS:
            if (entry.type === EntryType.MEMBER) {
                const memberEntry = entry as MemberEntry;

                return disassembleMethod(memberEntry, memberEntry.member, disasm);
            }

            return disassemble(entry as ClassEntry, disasm);
        case Interpretation.HEX:
            return workers.instance().cancellable(async (w) => w.hex(await entry.data.bytes(), options.hexRowBytes));
        case Interpretation.BINARY_XML: {
            return workers.instance().cancellable(async (w) => {
                try {
                    return await w.axml(await entry.data.bytes());
                } catch (e) {
                    error("failed to interpret entry as binary XML", e);
                    return `<!-- Failed to parse. (${e!.toString()}) -->`;
                }
            });
        }
        case Interpretation.KTPROTO: {
            return workers.instance().cancellable(async (w) => {
                try {
                    switch (entry.extension) {
                        case "kotlin_builtins":
                        case "kotlin_metadata":
                            return await w.ktprotoPackageFragment(await entry.data.bytes());
                        case "kotlin_module":
                            return await w.ktprotoModule(await entry.data.bytes());
                    }

                    // shouldn't happen
                    return `// Unrecognized Kotlin protobuf type: ${entry.extension}`;
                } catch (e) {
                    error("failed to interpret entry as Kotlin protobuf", e);
                    return `// Failed to parse. (${e!.toString()})`;
                }
            });
        }
    }

    return cancellable(() => entry.data.text());
};
