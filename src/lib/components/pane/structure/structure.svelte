<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Search, LayoutDashboard, Pencil } from "@lucide/svelte";
    import { Field, Constructor, Method, AbstractMethod, accessIcon, classIcon } from "$lib/components/icons";
    import type { PaneProps } from "../";
    import { EntryType, type ClassEntry } from "$lib/workspace";
    import { entryIcon } from "$lib/components/icons";
    import { cn } from "$lib/components/utils";
    import { fields, methods, innerClasses, abstractionInfo } from "./util";
    import StructureMenu from "./menu.svelte";
    import { ContextMenu, ContextMenuTrigger } from "$lib/components/ui/context-menu";
    import { partition, prettyInternalName, prettyJavaType, prettyMethodDesc } from "$lib/utils";
    import { mappings } from "$lib/workspace/analysis/mapping";
    import { current as currentTab } from "$lib/tab";
    import { t } from "$lib/i18n";
    import Summary from "./summary.svelte";
    import { Button } from "$lib/components/ui/button";
    import { get } from "svelte/store";

    let { handler, classes, entries }: PaneProps = $props();

    let showSummary = $state(false);
    let query = $state("");

    // Rename state
    type RenameTarget =
        | { kind: "package" }
        | { kind: "class" }
        | { kind: "field"; name: string; desc: string }
        | { kind: "method"; name: string; desc: string }
        | { kind: "inner"; internalName: string };

    let renaming: RenameTarget | null = $state(null);
    let renameValue = $state("");

    const focusInput = (node: HTMLInputElement): void => {
        node.focus();
        node.select();
    };

    const startRename = (target: RenameTarget, current: string): void => {
        renaming = target;
        renameValue = current;
    };

    const splitInternalName = (name: string): [string, string] => {
        const parts = name.split("/");
        return [parts.slice(0, parts.length - 1).join("/"), parts[parts.length - 1] ?? ""];
    };

    const replaceClassPackage = (name: string, pkg: string): string => {
        const [, simple] = splitInternalName(name);
        return pkg ? `${pkg}/${simple}` : simple;
    };

    const replaceClassSimpleName = (name: string, simple: string): string => {
        const [pkg] = splitInternalName(name);
        return pkg ? `${pkg}/${simple}` : simple;
    };

    const canonicalizeClassName = (name: string): string => {
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

    const removeClassChainAliases = (sourceName: string): void => {
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

    const canonicalizeDescriptor = (desc: string): string => {
        const currentMappings = get(mappings);
        if (currentMappings.size() === 0 || !desc.includes("L")) {
            return desc;
        }

        const inverse = new Map<string, string>();
        for (const klass of currentMappings.values()) {
            if (klass.dst) {
                inverse.set(klass.dst, klass.src);
            }
        }

        return desc.replace(/L([^;]+);/g, (_, internalName: string) => {
            return `L${canonicalizeClassName(internalName) ?? internalName};`;
        });
    };

    const canonicalizeFieldName = (owner: string, name: string, desc: string): string => {
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

    const canonicalizeMethodName = (owner: string, name: string, desc: string): string => {
        const klass = get(mappings).getOrNull(canonicalizeClassName(owner));
        if (!klass) {
            return name;
        }

        const srcDesc = canonicalizeDescriptor(desc);
        const seen = new Set<string>();
        let current = name;

        while (!seen.has(current)) {
            seen.add(current);

            const previous = klass.methods.values().find(
                (method) => method.dst === current && method.srcDesc === srcDesc
            );
            if (!previous) {
                break;
            }

            current = previous.src;
        }

        return current;
    };

    const mappedFieldName = (owner: string, name: string, desc: string): string | undefined => {
        const klass = get(mappings).getOrNull(canonicalizeClassName(owner));
        if (!klass) {
            return undefined;
        }

        const srcDesc = canonicalizeDescriptor(desc);
        const srcName = canonicalizeFieldName(owner, name, desc);
        return klass.fields.getOrNull(srcName, srcDesc)?.dst ?? klass.fields.getOrNull(srcName, desc)?.dst;
    };

    const mappedMethodName = (owner: string, name: string, desc: string): string | undefined => {
        const klass = get(mappings).getOrNull(canonicalizeClassName(owner));
        if (!klass) {
            return undefined;
        }

        const srcDesc = canonicalizeDescriptor(desc);
        const srcName = canonicalizeMethodName(owner, name, desc);
        return klass.methods.getOrNull(srcName, srcDesc)?.dst ?? klass.methods.getOrNull(srcName, desc)?.dst;
    };

    const setLatestFieldMapping = (owner: string, name: string, desc: string, dst?: string): void => {
        const klass = get(mappings).get(canonicalizeClassName(owner));
        const srcDesc = canonicalizeDescriptor(desc);
        const srcName = canonicalizeFieldName(owner, name, desc);
        const field = klass.fields.get(srcName, srcDesc);
        field.dst = dst;

        delete klass.fields.elements[`${name}:${desc}`];
        if (srcDesc !== desc) {
            delete klass.fields.elements[`${name}:${desc}`];
        }
    };

    const setLatestMethodMapping = (owner: string, name: string, desc: string, dst?: string): void => {
        const klass = get(mappings).get(canonicalizeClassName(owner));
        const srcDesc = canonicalizeDescriptor(desc);
        const srcName = canonicalizeMethodName(owner, name, desc);
        const method = klass.methods.get(srcName, srcDesc);
        method.dst = dst;

        delete klass.methods.elements[`${name}:${desc}`];
        if (srcDesc !== desc) {
            delete klass.methods.elements[`${name}:${desc}`];
        }
    };

    const cancelRename = (): void => {
        renaming = null;
    };

    const commitRename = (): void => {
        if (!renaming || !currentNode) {
            renaming = null;
            return;
        }

        const internalName = canonicalizeClassName(currentNode.thisClass.nameEntry!.string);
        const trimmed = renameValue.trim();

        mappings.update(($m) => {
            if (renaming!.kind === "package") {
                const cls = $m.get(internalName);
                const nextName = replaceClassPackage(cls.dst ?? internalName, trimmed.replaceAll(".", "/"));
                cls.dst = nextName === internalName ? undefined : nextName;
                removeClassChainAliases(internalName);
            } else if (renaming!.kind === "class") {
                const cls = $m.get(internalName);
                const [, srcSimple] = splitInternalName(internalName);
                const nextName = replaceClassSimpleName(cls.dst ?? internalName, trimmed || srcSimple);
                cls.dst = nextName === internalName ? undefined : nextName;
                removeClassChainAliases(internalName);
            } else if (renaming!.kind === "field") {
                setLatestFieldMapping(internalName, renaming!.name, renaming!.desc, trimmed || undefined);
            } else if (renaming!.kind === "method") {
                setLatestMethodMapping(internalName, renaming!.name, renaming!.desc, trimmed || undefined);
            } else if (renaming!.kind === "inner") {
                const srcInnerName = canonicalizeClassName(renaming!.internalName);
                const cls = $m.get(srcInnerName);
                if (trimmed) {
                    const parts = (cls.dst ?? srcInnerName).split("/");
                    const lastName = parts[parts.length - 1];
                    const dollarIdx = lastName.lastIndexOf("$");
                    parts[parts.length - 1] =
                        dollarIdx !== -1 ? lastName.substring(0, dollarIdx + 1) + trimmed : trimmed;
                    cls.dst = parts.join("/");
                } else {
                    cls.dst = undefined;
                }

                removeClassChainAliases(srcInnerName);
            }
            return $m;
        });

        renaming = null;
    };

    let currentEntry = $derived.by(() => {
        const entry = $currentTab?.entry;
        switch (entry?.type) {
            case EntryType.CLASS:
                return entry as ClassEntry;
            case EntryType.MEMBER:
                return entry.parent as ClassEntry;
        }

        return null;
    });
    let currentNode = $derived(currentEntry ? currentEntry.node! : null);

    let [packageName, simpleName] = $derived.by(() => {
        const nameEntry = currentNode?.thisClass?.nameEntry;
        if (!nameEntry) {
            return [null, null];
        }

        const parts = nameEntry.string.split("/");
        return [parts.slice(0, parts.length - 1).join("."), parts.pop()];
    });

    let absData = $derived(currentNode ? abstractionInfo(currentNode) : null);
    let fieldData = $derived(currentNode ? fields(currentNode) : []);
    let filteredFieldData = $derived(
        fieldData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );
    let innerClassData = $derived(currentNode ? innerClasses(currentNode, classes) : []);
    let filteredInnerClassData = $derived(
        innerClassData.filter((cls) => !cls.name || cls.name.toLowerCase().includes(query.toLowerCase()))
    );

    let allMethodData = $derived(currentEntry ? methods(currentEntry) : []);
    let [constructorData, nonConstructors] = $derived(partition(allMethodData, (m) => m.constructor));
    let filteredConstructorData = $derived(
        constructorData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );

    let [initializerData, methodData] = $derived(partition(nonConstructors, (m) => m.initializer));
    let filteredInitializerData = $derived(
        initializerData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );
    let filteredMethodData = $derived(
        methodData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );
</script>

<div class="flex h-full w-full flex-col">
    {#if currentEntry && !showSummary}
        {@const { icon: EntryIcon, classes: iconClasses } = entryIcon(currentEntry)}
        {@const hasSuperData = absData && (absData.superClass || absData.implementations.length > 0)}
        {@const sourceInternalName = canonicalizeClassName(currentNode!.thisClass.nameEntry!.string)}
        {@const classDst = $mappings.getOrNull(sourceInternalName)?.dst}
        {@const mappedPackageName = classDst ? classDst.split("/").slice(0, -1).join(".") : packageName}
        {@const mappedSimpleName = classDst ? classDst.split("/").pop() ?? simpleName ?? "" : simpleName ?? ""}
        <div class="bg-muted/20 border-b p-3">
            <div class="mb-2 flex w-full justify-between">
                <div class="min-w-0 flex-1">
                    {#if packageName}
                        <div class="group text-muted-foreground mb-2 flex items-center gap-1 text-xs">
                            {#if renaming?.kind === "package"}
                                <input
                                    use:focusInput
                                    class="min-w-0 flex-1 border-b border-primary bg-transparent text-xs outline-none"
                                    placeholder={$t("pane.structure.rename.placeholder")}
                                    bind:value={renameValue}
                                    onkeydown={(e) => { if (e.key === "Enter") commitRename(); if (e.key === "Escape") cancelRename(); }}
                                    onblur={commitRename}
                                />
                            {:else}
                                <span class={cn("truncate", classDst && mappedPackageName !== packageName && "text-primary")} title={mappedPackageName ?? packageName}>
                                    {mappedPackageName}
                                </span>
                                <button
                                    class="text-muted-foreground hover:text-foreground hover:bg-muted shrink-0 rounded-sm p-0.5 opacity-0 transition-all group-hover:opacity-100"
                                    onclick={() => startRename({ kind: "package" }, mappedPackageName ?? packageName ?? "")}
                                    title={$t("pane.structure.rename")}
                                >
                                    <Pencil class="size-3" />
                                </button>
                            {/if}
                        </div>
                    {/if}
                    <div class={cn("group flex items-center gap-2")}>
                        <EntryIcon class={cn(iconClasses, "h-4 w-4 shrink-0")} />
                        {#if renaming?.kind === "class"}
                            <input
                                use:focusInput
                                class="min-w-0 flex-1 border-b border-primary bg-transparent text-sm font-medium outline-none"
                                placeholder={$t("pane.structure.rename.placeholder")}
                                bind:value={renameValue}
                                onkeydown={(e) => { if (e.key === "Enter") commitRename(); if (e.key === "Escape") cancelRename(); }}
                                onblur={commitRename}
                            />
                        {:else}
                            <span class={cn("truncate text-sm font-medium", classDst && "text-primary")}>
                                {prettyInternalName(mappedSimpleName)}
                            </span>
                            <button
                                class="text-muted-foreground shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                onclick={() => {
                                    startRename({ kind: "class" }, mappedSimpleName);
                                }}
                                title={$t("pane.structure.rename")}
                            >
                                <Pencil class="size-3.5" />
                            </button>
                        {/if}
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="icon-sm"
                    class="text-muted-foreground ml-2 shrink-0"
                    onclick={() => (showSummary = true)}
                >
                    <LayoutDashboard />
                </Button>
            </div>
            {#if hasSuperData}
                <div class="text-muted-foreground text-xs">
                    {#if absData.superClass}
                        {@const superEntry = classes.get(absData.superClass)}
                        <div>
                            {$t("pane.structure.extends")}
                            <button
                                title={prettyInternalName(absData.superClass)}
                                class={cn("text-secondary-foreground", superEntry ? "cursor-pointer underline" : "")}
                                onclick={() => {
                                    if (superEntry) {
                                        handler.open(superEntry);
                                    }
                                }}
                            >
                                {prettyInternalName(absData.superClass, !!superEntry)}
                            </button>
                        </div>
                    {/if}
                    {#if absData.implementations.length > 0}
                        <div>
                            {$t("pane.structure.implements")}
                            <span class="text-secondary-foreground">
                                {#each absData.implementations as impl, i}
                                    {@const implEntry = classes.get(impl)}
                                    {#if i > 0},
                                    {/if}
                                    <button
                                        title={prettyInternalName(impl)}
                                        class={cn(implEntry && "cursor-pointer underline")}
                                        onclick={() => {
                                            if (implEntry) {
                                                handler.open(implEntry);
                                            }
                                        }}
                                    >
                                        {prettyInternalName(impl, !!implEntry)}
                                    </button>
                                {/each}
                            </span>
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
        <div class="border-b p-3">
            <div class="relative">
                <Search class="text-muted-foreground absolute top-2 left-2 h-4 w-4" />
                <Input bind:value={query} placeholder={$t("pane.structure.search.placeholder")} class="h-8 pl-8" />
            </div>
        </div>

        <div class="flex-1 overflow-y-auto">
            <div class="p-2">
                {#if filteredFieldData.length > 0}
                    <div class="mb-3">
                        <div class="mb-1 flex items-center gap-2 px-2">
                            <span class="text-muted-foreground text-xs font-medium">
                                {$t("pane.structure.fields")}
                            </span>
                            <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
                                {fieldData.length}
                            </span>
                        </div>
                        {#each filteredFieldData as field}
                            {@const ModifierIcon = accessIcon(field.access)}
                            {@const fieldDesc = canonicalizeDescriptor(field.type)}
                            {@const isRenamingField = renaming?.kind === "field" && renaming.name === field.name && renaming.desc === fieldDesc}
                            {@const fieldDst = mappedFieldName(currentNode!.thisClass.nameEntry!.string, field.name, field.type)}
                            <div class="group hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none">
                                <div class="flex w-full min-w-0 items-center gap-2">
                                    <div class="flex shrink-0 items-center gap-1">
                                        <Field
                                            finalMember={field.access.final}
                                            staticMember={field.access.static}
                                            class="size-4"
                                        />
                                        {#if ModifierIcon}
                                            <ModifierIcon class="size-2.5" />
                                        {/if}
                                    </div>
                                    {#if isRenamingField}
                                        <input
                                            use:focusInput
                                            class="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                            placeholder={$t("pane.structure.rename.placeholder")}
                                            bind:value={renameValue}
                                            onkeydown={(e) => { if (e.key === "Enter") commitRename(); if (e.key === "Escape") cancelRename(); }}
                                            onblur={commitRename}
                                        />
                                    {:else}
                                        <span class={cn("min-w-0 flex-1 truncate font-mono text-xs", fieldDst && "text-primary")}>
                                            {fieldDst ? `${fieldDst}: ${prettyJavaType(field.type, true)}` : field.signature}
                                        </span>
                                        <button
                                            class="text-muted-foreground ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                            onclick={(e) => { e.stopPropagation(); startRename({ kind: "field", name: field.name, desc: fieldDesc }, fieldDst ?? field.name); }}
                                            title={$t("pane.structure.rename")}
                                        >
                                            <Pencil class="size-3.5" />
                                        </button>
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}

                {#if filteredInitializerData.length > 0}
                    <div class="mb-3">
                        <div class="mb-1 flex items-center gap-2 px-2">
                            <span class="text-muted-foreground text-xs font-medium">
                                {$t("pane.structure.initializers")}
                            </span>
                            <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
                                {initializerData.length}
                            </span>
                        </div>
                        {#each filteredInitializerData as initializer}
                            {@const ModifierIcon = accessIcon(initializer.access)}
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <div
                                        class="hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none"
                                    >
                                        <div class="flex w-full items-center gap-2">
                                            <div class="flex items-center gap-1">
                                                <Constructor class="size-4" />

                                                {#if ModifierIcon}
                                                    <ModifierIcon class="size-2.5" />
                                                {/if}
                                            </div>

                                            <span class="truncate font-mono text-xs">
                                                {initializer.signature}
                                            </span>
                                        </div>
                                    </div>
                                </ContextMenuTrigger>
                                <StructureMenu title={initializer.signature} {handler} entry={initializer.entry} />
                            </ContextMenu>
                        {/each}
                    </div>
                {/if}

                {#if filteredConstructorData.length > 0}
                    <div class="mb-3">
                        <div class="mb-1 flex items-center gap-2 px-2">
                            <span class="text-muted-foreground text-xs font-medium">
                                {$t("pane.structure.constructors")}
                            </span>
                            <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
                                {constructorData.length}
                            </span>
                        </div>
                        {#each filteredConstructorData as constructor}
                            {@const ModifierIcon = accessIcon(constructor.access)}
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <div
                                        class="hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none"
                                    >
                                        <div class="flex w-full items-center gap-2">
                                            <div class="flex items-center gap-1">
                                                <Constructor class="size-4" />

                                                {#if ModifierIcon}
                                                    <ModifierIcon class="size-2.5" />
                                                {/if}
                                            </div>

                                            <span class="truncate font-mono text-xs">
                                                {constructor.signature}
                                            </span>
                                        </div>
                                    </div>
                                </ContextMenuTrigger>
                                <StructureMenu title={constructor.signature} {handler} entry={constructor.entry} />
                            </ContextMenu>
                        {/each}
                    </div>
                {/if}

                {#if methodData.length > 0}
                    <div class="mb-3">
                        <div class="mb-1 flex items-center gap-2 px-2">
                            <span class="text-muted-foreground text-xs font-medium">
                                {$t("pane.structure.methods")}
                            </span>
                            <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
                                {methodData.length}
                            </span>
                        </div>
                        {#each methodData as method}
                            {@const TypeIcon = method.access.abstract ? AbstractMethod : Method}
                            {@const ModifierIcon = accessIcon(method.access)}
                            {@const methodDesc = canonicalizeDescriptor(method.type)}
                            {@const isRenamingMethod = renaming?.kind === "method" && renaming.name === method.name && renaming.desc === methodDesc}
                            {@const methodDst = mappedMethodName(currentNode!.thisClass.nameEntry!.string, method.name, method.type)}
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <div class="group hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none">
                                        <div class="flex w-full min-w-0 items-center gap-2">
                                            <div class="flex shrink-0 items-center gap-1">
                                                <TypeIcon
                                                    finalMember={method.access.final}
                                                    staticMember={method.access.static}
                                                    class="size-4"
                                                />
                                                {#if ModifierIcon}
                                                    <ModifierIcon class="size-2.5" />
                                                {/if}
                                            </div>
                                            {#if isRenamingMethod}
                                                <input
                                                    use:focusInput
                                                    class="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                                    placeholder={$t("pane.structure.rename.placeholder")}
                                                    bind:value={renameValue}
                                                    onkeydown={(e) => { if (e.key === "Enter") commitRename(); if (e.key === "Escape") cancelRename(); }}
                                                    onblur={commitRename}
                                                />
                                            {:else}
                                                <span class={cn("min-w-0 flex-1 truncate font-mono text-xs", methodDst && "text-primary")}>
                                                    {methodDst ? methodDst + prettyMethodDesc(method.type, true) : method.signature}
                                                </span>
                                                <button
                                                    class="text-muted-foreground ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                                    onclick={(e) => { e.stopPropagation(); startRename({ kind: "method", name: method.name, desc: methodDesc }, methodDst ?? method.name); }}
                                                    title={$t("pane.structure.rename")}
                                                >
                                                    <Pencil class="size-3.5" />
                                                </button>
                                            {/if}
                                        </div>
                                    </div>
                                </ContextMenuTrigger>
                                <StructureMenu title={method.signature} {handler} entry={method.entry} />
                            </ContextMenu>
                        {/each}
                    </div>
                {/if}

                {#if filteredInnerClassData.length > 0}
                    <div class="mb-3">
                        <div class="mb-1 flex items-center gap-2 px-2">
                            <span class="text-muted-foreground text-xs font-medium">
                                {$t("pane.structure.inner-classes")}
                            </span>
                            <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
                                {innerClassData.length}
                            </span>
                        </div>
                        {#each filteredInnerClassData as innerClass}
                            {@const TypeIcon = classIcon(innerClass.access, innerClass.record)}
                            {@const ModifierIcon = accessIcon(innerClass.access)}
                            {@const innerInternalName = (innerClass.entry as import("$lib/workspace").ClassEntry | undefined)?.node?.thisClass.nameEntry?.string}
                            {@const innerDst = innerInternalName ? $mappings.getOrNull(innerInternalName)?.dst : undefined}
                            {@const innerDstSimple = innerDst ? (innerDst.split("/").pop()?.split("$").pop() ?? undefined) : undefined}
                            {@const isRenamingInner = renaming?.kind === "inner" && renaming.internalName === innerInternalName}
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <div
                                        class={cn(
                                            "group hover:bg-muted/50 inline-flex h-8 w-full shrink-0 items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none",
                                            innerClass.entry ? "cursor-pointer" : "cursor-not-allowed"
                                        )}
                                    >
                                        <div class="flex w-full min-w-0 items-center gap-2">
                                            <div class="flex shrink-0 items-center gap-1">
                                                <TypeIcon
                                                    finalMember={innerClass.access.final}
                                                    staticMember={innerClass.access.static}
                                                    class="size-4"
                                                />
                                                {#if ModifierIcon}
                                                    <ModifierIcon class="size-2.5" />
                                                {/if}
                                            </div>
                                            {#if isRenamingInner}
                                                <input
                                                    use:focusInput
                                                    class="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                                    placeholder={$t("pane.structure.rename.placeholder")}
                                                    bind:value={renameValue}
                                                    onkeydown={(e) => { if (e.key === "Enter") commitRename(); if (e.key === "Escape") cancelRename(); }}
                                                    onblur={commitRename}
                                                />
                                            {:else if innerClass.name}
                                                <span class={cn("min-w-0 flex-1 truncate font-mono text-xs", innerDstSimple && "text-primary")}>
                                                    {innerDstSimple ?? innerClass.name}
                                                </span>
                                                {#if innerClass.entry && innerInternalName}
                                                    <button
                                                        class="text-muted-foreground ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                                        onclick={(e) => { e.stopPropagation(); startRename({ kind: "inner", internalName: innerInternalName }, innerDstSimple ?? innerClass.name ?? ""); }}
                                                        title={$t("pane.structure.rename")}
                                                    >
                                                        <Pencil class="size-3.5" />
                                                    </button>
                                                {/if}
                                            {:else}
                                                <span class="text-muted-foreground min-w-0 flex-1 truncate text-xs">
                                                    {$t("pane.structure.inner-classes.anonymous")}
                                                </span>
                                            {/if}
                                        </div>
                                    </div>
                                </ContextMenuTrigger>
                                {#if innerClass.entry}
                                    <StructureMenu
                                        title={innerClass.name ?? $t("pane.structure.inner-classes.anonymous")}
                                        {handler}
                                        entry={innerClass.entry}
                                    />
                                {/if}
                            </ContextMenu>
                        {/each}
                    </div>
                {/if}

                {#if filteredMethodData.length === 0 && filteredConstructorData.length === 0 && filteredInitializerData.length === 0 && filteredFieldData.length === 0 && filteredInnerClassData.length === 0}
                    <div class="text-muted-foreground py-8 text-center text-sm">
                        {$t("pane.structure.search.no-results")}
                    </div>
                {/if}
            </div>
        </div>
    {:else}
        <Summary {classes} {entries} bind:currentEntry bind:showSummary />
    {/if}
</div>
