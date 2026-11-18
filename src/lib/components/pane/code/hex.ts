import { RangeSetBuilder } from "@codemirror/state";
import { Decoration, EditorView, ViewPlugin, type DecorationSet } from "@codemirror/view";

const selectionMatch = Decoration.mark({ class: "cm-selectionMatch" });

export const hexSelectionMatches = (rowBytes: number) =>
    ViewPlugin.fromClass(
        class {
            decorations: DecorationSet;

            constructor(readonly view: EditorView) {
                this.decorations = this.build(view);
            }

            update(update: { view: EditorView; docChanged: boolean; selectionSet: boolean }) {
                if (update.docChanged || update.selectionSet) {
                    this.decorations = this.build(update.view);
                }
            }

            build(view: EditorView): DecorationSet {
                const selected = new Set<string>();
                const doc = view.state.doc;

                for (const range of view.state.selection.ranges) {
                    if (range.empty) continue;

                    const from = Math.min(range.from, range.to);
                    const to = Math.max(range.from, range.to);

                    for (let lineNumber = 1; lineNumber <= doc.lines; lineNumber++) {
                        const line = doc.line(lineNumber);
                        const hexStart = line.from + 10;
                        const asciiStart = hexStart + rowBytes * 3 + 1;

                        for (let byte = 0; byte < rowBytes; byte++) {
                            const hexFrom = hexStart + byte * 3;
                            const hexTo = hexFrom + 2;
                            const asciiFrom = asciiStart + byte;

                            if (
                                (from < hexTo &&
                                    to > hexFrom &&
                                    /^[0-9a-f]{2}$/i.test(doc.slice(hexFrom, hexTo).toString())) ||
                                (asciiFrom < line.to && from <= asciiFrom && to > asciiFrom)
                            ) {
                                selected.add(`${lineNumber}:${byte}`);
                            }
                        }
                    }
                }

                const builder = new RangeSetBuilder<Decoration>();
                const decorations: [number, number, Decoration][] = [];

                for (const key of selected) {
                    const [lineNumber, byteText] = key.split(":");
                    const line = doc.line(Number(lineNumber));
                    const byte = Number(byteText);
                    const hexFrom = line.from + 10 + byte * 3;
                    const asciiFrom = line.from + 10 + rowBytes * 3 + 1 + byte;

                    if (/^[0-9a-f]{2}$/i.test(doc.slice(hexFrom, hexFrom + 2).toString())) {
                        decorations.push([hexFrom, hexFrom + 2, selectionMatch]);
                    }
                    if (asciiFrom < line.to) {
                        decorations.push([asciiFrom, asciiFrom + 1, selectionMatch]);
                    }
                }

                decorations.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
                for (const [from, to, decoration] of decorations) {
                    if (from >= 0 && to <= doc.length) {
                        builder.add(from, to, decoration);
                    }
                }

                return builder.finish();
            }
        },
        { decorations: (value) => value.decorations }
    );
