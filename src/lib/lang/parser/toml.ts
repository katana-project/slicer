import { LanguageSupport, StreamLanguage } from "@codemirror/language";
import { toml as parser } from "@codemirror/legacy-modes/mode/toml";

export const toml = (): LanguageSupport => {
    return new LanguageSupport(StreamLanguage.define(parser));
};
