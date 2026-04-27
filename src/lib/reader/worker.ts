import { formatHex } from "$lib/utils";
import { expose } from "comlink";
import type { Reader } from "./";
import { read as axml } from "./axml";
import { read as hprof } from "./hprof";
import { readBuiltins as readKtprotoBuiltins, readModule as readKtprotoModule } from "./ktproto";
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
    async mappings(data, src, dst) {
        // this will strip any functions, so it's not a full MappingSet,
        // but it should be good enough for most use cases, and it avoids the need to proxy the entire MappingSet object
        return JSON.parse(JSON.stringify(mappings(data, src, dst)));
    },
    async ktprotoModule(bytes) {
        return readKtprotoModule(bytes);
    },
    async ktprotoBuiltins(bytes) {
        return readKtprotoBuiltins(bytes);
    },
} satisfies Reader);
