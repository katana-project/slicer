import { writable } from "svelte/store";
import { mappingSet } from "./data";

export const mappings = writable(mappingSet());
