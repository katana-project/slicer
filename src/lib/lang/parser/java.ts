import { foldInside, foldNodeProp, LanguageSupport, LRLanguage } from "@codemirror/language";
import { parser } from "@run-slicer/lezer-java";

export const javaLanguage = LRLanguage.define({
    name: "java",
    parser: parser.configure({
        props: [
            foldNodeProp.add({
                ["Block SwitchBlock ClassBody ElementValueArrayInitializer ModuleBody EnumBody " +
                "ConstructorBody InterfaceBody ArrayInitializer RecordBody"]: foldInside,
                BlockComment(tree) {
                    return { from: tree.from + 2, to: tree.to - 2 };
                },
            }),
        ],
    }),
    languageData: {
        commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    },
});

export const java = (): LanguageSupport => new LanguageSupport(javaLanguage);
