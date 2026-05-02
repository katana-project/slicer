import { decompile } from "@run-slicer/vf";
import { expose } from "comlink";
import type { DisassemblerOptions } from "../";
import type { EntrySource } from "../source";
import type { DisassemblyWorker } from "./";

expose({
    async class(
        name: string,
        resources: string[],
        source: EntrySource,
        options?: DisassemblerOptions
    ): Promise<string> {
        return (await decompile(name, { resources, source, options }))[name];
    },
    async method(
        name: string,
        signature: string,
        resources: string[],
        source: EntrySource,
        options?: DisassemblerOptions
    ): Promise<string> {
        options = options ?? {};
        options["method-to-decompile"] = signature;

        return (await decompile(name, { resources, source, options }))[name];
    },
} satisfies DisassemblyWorker);
