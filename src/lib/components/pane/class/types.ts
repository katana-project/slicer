export type RenameTarget =
    | { kind: "package" }
    | { kind: "class" }
    | { kind: "field"; name: string; desc: string }
    | { kind: "method"; name: string; desc: string };
