import { mappings } from "$lib/workspace/analysis/mapping";
import { get } from "svelte/store";

export const splitInternalName = (name: string): [string, string] => {
    const parts = name.split("/");
    return [parts.slice(0, parts.length - 1).join("/"), parts[parts.length - 1] ?? ""];
};

export const replaceClassPackage = (name: string, pkg: string): string => {
    const [, simple] = splitInternalName(name);
    return pkg ? `${pkg}/${simple}` : simple;
};

export const replaceClassSimpleName = (name: string, simple: string): string => {
    const [pkg] = splitInternalName(name);
    return pkg ? `${pkg}/${simple}` : simple;
};

export const canonicalizeClassName = (name: string): string => {
    const currentMappings = get(mappings);
    if (currentMappings.size() === 0) {
        return name;
    }

    const seen = new Set<string>();
    let current = name;

    while (!seen.has(current)) {
        seen.add(current);

        const previous = currentMappings.values().find((klass) => klass.dst === current);
        if (!previous) {
            break;
        }

        current = previous.src;
    }

    return current;
};

export const removeClassChainAliases = (sourceName: string): void => {
    const currentMappings = get(mappings);
    const seen = new Set<string>([sourceName]);
    let current = currentMappings.getOrNull(sourceName)?.dst;

    while (current && !seen.has(current)) {
        seen.add(current);

        const next = currentMappings.getOrNull(current)?.dst;
        delete currentMappings.elements[current];

        current = next;
    }
};

export const canonicalizeDescriptor = (desc: string): string => {
    const currentMappings = get(mappings);
    if (currentMappings.size() === 0 || !desc.includes("L")) {
        return desc;
    }

    return desc.replace(/L([^;]+);/g, (_, internalName: string) => {
        return `L${canonicalizeClassName(internalName) ?? internalName};`;
    });
};

export const canonicalizeFieldName = (owner: string, name: string, desc: string): string => {
    const klass = get(mappings).getOrNull(canonicalizeClassName(owner));
    if (!klass) {
        return name;
    }

    const srcDesc = canonicalizeDescriptor(desc);
    const seen = new Set<string>();
    let current = name;

    while (!seen.has(current)) {
        seen.add(current);

        const previous = klass.fields.values().find((field) => field.dst === current && field.srcDesc === srcDesc);
        if (!previous) {
            break;
        }

        current = previous.src;
    }

    return current;
};

export const canonicalizeMethodName = (owner: string, name: string, desc: string): string => {
    const klass = get(mappings).getOrNull(canonicalizeClassName(owner));
    if (!klass) {
        return name;
    }

    const srcDesc = canonicalizeDescriptor(desc);
    const seen = new Set<string>();
    let current = name;

    while (!seen.has(current)) {
        seen.add(current);

        const previous = klass.methods.values().find((method) => method.dst === current && method.srcDesc === srcDesc);
        if (!previous) {
            break;
        }

        current = previous.src;
    }

    return current;
};

export const mappedFieldName = (owner: string, name: string, desc: string): string | undefined => {
    const klass = get(mappings).getOrNull(canonicalizeClassName(owner));
    if (!klass) {
        return undefined;
    }

    const srcDesc = canonicalizeDescriptor(desc);
    const srcName = canonicalizeFieldName(owner, name, desc);
    return klass.fields.getOrNull(srcName, srcDesc)?.dst ?? klass.fields.getOrNull(srcName, desc)?.dst;
};

export const mappedMethodName = (owner: string, name: string, desc: string): string | undefined => {
    const klass = get(mappings).getOrNull(canonicalizeClassName(owner));
    if (!klass) {
        return undefined;
    }

    const srcDesc = canonicalizeDescriptor(desc);
    const srcName = canonicalizeMethodName(owner, name, desc);
    return klass.methods.getOrNull(srcName, srcDesc)?.dst ?? klass.methods.getOrNull(srcName, desc)?.dst;
};

export const setLatestFieldMapping = (owner: string, name: string, desc: string, dst?: string): void => {
    const klass = get(mappings).get(canonicalizeClassName(owner));
    const srcDesc = canonicalizeDescriptor(desc);
    const srcName = canonicalizeFieldName(owner, name, desc);
    const field = klass.fields.get(srcName, srcDesc);
    field.dst = dst;

    const canonicalKey = `${srcName}:${srcDesc}`;
    const staleKeys = new Set<string>([`${name}:${desc}`, `${name}:${srcDesc}`]);
    staleKeys.delete(canonicalKey);

    for (const key of staleKeys) {
        delete klass.fields.elements[key];
    }
};

export const setLatestMethodMapping = (owner: string, name: string, desc: string, dst?: string): void => {
    const klass = get(mappings).get(canonicalizeClassName(owner));
    const srcDesc = canonicalizeDescriptor(desc);
    const srcName = canonicalizeMethodName(owner, name, desc);
    const method = klass.methods.get(srcName, srcDesc);
    method.dst = dst;

    const canonicalKey = `${srcName}:${srcDesc}`;
    const staleKeys = new Set<string>([`${name}:${desc}`, `${name}:${srcDesc}`]);
    staleKeys.delete(canonicalKey);

    for (const key of staleKeys) {
        delete klass.methods.elements[key];
    }
};
