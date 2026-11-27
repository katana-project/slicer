import type { LanguageSupport } from "@codemirror/language";

export type Language =
    | "java"
    | "kotlin"
    | "xml"
    | "json"
    | "js"
    | "ts"
    | "yaml"
    | "properties"
    | "toml"
    | "hex"
    | "jasm"
    | "plaintext";

export const load = async (lang: Language): Promise<LanguageSupport | null> => {
    switch (lang) {
        case "java":
            return (await import("./parser/java")).java();
        case "xml":
            return (await import("@codemirror/lang-xml")).xml();
        case "json":
        case "js":
            return (await import("@codemirror/lang-javascript")).javascript({ jsx: true });
        case "ts":
            return (await import("@codemirror/lang-javascript")).javascript({ typescript: true, jsx: true });
        case "yaml":
            return (await import("@codemirror/lang-yaml")).yaml();
        case "kotlin":
            return (await import("./parser/kotlin")).kotlin();
        case "properties":
            return (await import("./parser/properties")).properties();
        case "hex":
            return (await import("./parser/hex")).hex();
        case "jasm":
            return (await import("./parser/jasm")).jasm();
        case "toml":
            return (await import("./parser/toml")).toml();
    }

    return null;
};

export const toExtension = (lang: Language): string => {
    switch (lang) {
        case "hex":
        case "plaintext":
            return "txt";
        case "kotlin":
            return "kt";
    }

    return lang;
};

export const fromExtension = (ext: string): Language => {
    switch (ext) {
        case "java":
        case "class":
            return "java";
        case "kt":
        case "kts":
            return "kotlin";
        case "html":
        case "xml":
        case "xhtml":
        case "mhtml":
        case "htm":
        case "svg":
            return "xml";
        case "json":
        case "jsonc":
        case "json5":
            return "json";
        case "yaml":
        case "yml":
            return "yaml";
        case "properties":
            return "properties";
        case "toml":
            return "toml";
        case "js":
        case "mjs":
        case "cjs":
        case "jsx":
            return "js";
        case "ts":
        case "tsx":
            return "ts";
    }

    return "plaintext";
};
