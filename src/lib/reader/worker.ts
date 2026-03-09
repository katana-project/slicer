import { formatHex } from "$lib/utils";
import { expose } from "comlink";
import type { Reader } from "./";
import { read as axml } from "./axml";
import { read as hprof } from "./hprof";
import { read as mappings } from "./mappings";

expose({
    async hex(bytes, rowBytes) {
        return formatHex(bytes, rowBytes);
    },
    hprof(blob) {
        return hprof(blob);
    },
    async axml(bytes) {
        return axml(bytes);
    },
    async mappings(data, dst) {
        return mappings(data, dst);
    },
} satisfies Reader);
