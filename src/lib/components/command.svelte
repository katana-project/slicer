<script lang="ts">
    import { t } from "$lib/i18n";
    import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from "$lib/components/ui/command";
    import { onMount } from "svelte";
    import { type ClassEntry, type Entry, EntryType } from "$lib/workspace";
    import { entryIcon } from "$lib/components/icons";
    import { ArrowDownWideNarrow, ArrowUpDown, ArrowUpNarrowWide, Search } from "@lucide/svelte";
    import { cn } from "$lib/components/utils";
    import { VList } from "virtua/svelte";
    import type { EventHandler } from "$lib/event";
    import { tabDefs, TabPosition } from "$lib/tab";
    import { debounced, humanSize, prettyInternalName } from "$lib/utils";
    import IconComponent from "$lib/components/icon.svelte";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
    import {
        commandWorkspaceSearchSort as sortMode,
        commandWorkspaceSearchSortDir as sortDir,
        type WorkspaceSearchSort,
    } from "$lib/state";
    import { Button } from "$lib/components/ui/button";
    import { toStore } from "svelte/store";

    interface Props {
        entries: Entry[];
        handler: EventHandler;
    }

    let { entries, handler }: Props = $props();

    let open = $state(false);
    let searchWorkspace = $state(false);
    let search = $state("");

    const alternateName = (entry: Entry): string | null => {
        if (entry.type === EntryType.CLASS) {
            const internalName = (entry as ClassEntry).node.thisClass.nameEntry?.string;
            return internalName ? prettyInternalName(internalName) : null;
        }

        return null;
    };

    const rank = (entry: Entry, type: WorkspaceSearchSort, distance: number): number => {
        switch (type) {
            case "size":
                return entry.data.size;
            case "last-mod":
                return entry.data.lastModified?.getTime() ?? 0;
        }

        return distance;
    };

    type SortFunc = (a: RankedEntry, b: RankedEntry) => number;
    let sortFunc: SortFunc = $derived.by(() => {
        // automatic behavior:
        // size and last-mod are descending - biggest size and newest time at the top
        // name is ascending - smallest distance at the top
        const asc = $sortDir === "auto" ? $sortMode === "name" : $sortDir === "asc";
        if (asc) {
            return (a, b) => a.rank - b.rank;
        }

        return (a, b) => b.rank - a.rank;
    });

    type RankedEntry = { entry: Entry; altName: string | null; rank: number };
    const filter = (
        entries: Entry[],
        term: string,
        sortType: WorkspaceSearchSort,
        sortFunc: SortFunc
    ): RankedEntry[] => {
        term = term.toLowerCase();
        return (
            entries
                .map((e) => {
                    const altName = alternateName(e);
                    if (e.name.toLowerCase().includes(term)) {
                        return { entry: e, altName, rank: rank(e, sortType, e.name.length - term.length) };
                    }
                    if (altName?.toLowerCase()?.includes(term)) {
                        return { entry: e, altName, rank: rank(e, sortType, altName!.length - term.length) };
                    }

                    return null;
                })
                .filter(Boolean) as RankedEntry[]
        ).sort(sortFunc);
    };

    const debouncedSearch = debounced(
        toStore(() => search),
        150
    );
    let filteredEntries = $derived(searchWorkspace ? filter(entries, $debouncedSearch, $sortMode, sortFunc) : []);

    let shift = false;
    onMount(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === "Shift") {
                if (shift) {
                    open = true;
                }

                shift = true;
                setTimeout(() => (shift = false), 250);
            }
        };

        document.addEventListener("keydown", handleKeydown);
        return () => document.removeEventListener("keydown", handleKeydown);
    });
</script>

<CommandDialog
    bind:open
    shouldFilter={!searchWorkspace}
    onOpenChangeComplete={(open) => {
        // reset page on close
        if (!open) {
            searchWorkspace = false;
            search = "";
        }
    }}
>
    <CommandInput
        bind:value={search}
        placeholder={$t(searchWorkspace ? "command.workspace.search.placeholder" : "command.placeholder")}
    />
    {#if searchWorkspace}
        <div class="flex flex-row w-full border-border border-b">
            <Select type="single" bind:value={$sortMode}>
                <SelectTrigger class="h-7 w-full rounded-none border-0 text-xs [&_svg]:ml-2 [&_svg]:h-4 [&_svg]:w-4">
                    <span>
                        <span class="text-muted-foreground mr-2">{$t("command.workspace.search.sort")}</span>
                        {$t(`command.workspace.search.sort.${$sortMode}`)}
                    </span>
                </SelectTrigger>
                <SelectContent
                    side="bottom"
                    align="center"
                    class="*:min-w-[calc(var(--bits-select-anchor-width)-16px)]"
                >
                    <SelectItem value="name" label={$t("command.workspace.search.sort.name")} class="text-xs">
                        {$t("command.workspace.search.sort.name")}
                    </SelectItem>
                    <SelectItem value="size" label={$t("command.workspace.search.sort.size")} class="text-xs">
                        {$t("command.workspace.search.sort.size")}
                    </SelectItem>
                    <SelectItem value="last-mod" label={$t("command.workspace.search.sort.last-mod")} class="text-xs">
                        {$t("command.workspace.search.sort.last-mod")}
                    </SelectItem>
                </SelectContent>
            </Select>
            <Button
                variant="outline"
                size="icon"
                class="rounded-none border-0 border-l border-border"
                onclick={() =>
                    $sortDir === "auto"
                        ? ($sortDir = "asc")
                        : $sortDir === "asc"
                          ? ($sortDir = "desc")
                          : ($sortDir = "auto")}
                title={$t(`command.workspace.search.sort.dir.${$sortDir}`)}
                aria-label={$t(`command.workspace.search.sort.dir.${$sortDir}`)}
            >
                {@const Icon =
                    $sortDir === "auto" ? ArrowUpDown : $sortDir === "asc" ? ArrowUpNarrowWide : ArrowDownWideNarrow}
                <Icon />
            </Button>
        </div>
    {/if}
    <CommandList class={cn(!searchWorkspace || "h-[80vh] max-h-[80vh] [&>div]:contents")}>
        {#if searchWorkspace}
            {#if entries.length > 0}
                {#key filteredEntries.length}
                    <VList data={filteredEntries} getKey={(e) => e.entry.name} class="p-2">
                        {#snippet children({ entry, altName })}
                            <CommandItem
                                class="py-2.5!"
                                onSelect={async () => {
                                    open = false;
                                    await handler.open(entry);
                                }}
                            >
                                {@const { icon: Icon, classes } = entryIcon(entry)}
                                <Icon class={classes} />
                                <div class="flex flex-col">
                                    <span class="break-anywhere">{entry.name}</span>
                                    {#if altName}
                                        <span class="break-anywhere text-muted-foreground text-xs">
                                            ({altName})
                                        </span>
                                    {/if}
                                    <span class="break-anywhere text-muted-foreground text-xs">
                                        {$t(
                                            "command.workspace.search.meta",
                                            humanSize(entry.data.size),
                                            entry.data.lastModified?.toLocaleString() ?? "-"
                                        )}
                                    </span>
                                </div>
                            </CommandItem>
                        {/snippet}
                    </VList>
                {/key}
            {:else}
                <p class="text-muted-foreground py-4 text-center text-sm">
                    {$t("command.workspace.search.no-entries")}
                </p>
            {/if}
        {:else}
            <CommandGroup heading={$t("command.tabs")}>
                {#each $tabDefs as def}
                    <CommandItem
                        value={def.type}
                        onSelect={async () => {
                            open = false;
                            await handler.openUnscoped(def, TabPosition.PRIMARY_CENTER, false);
                        }}
                    >
                        <IconComponent icon={def.icon} />
                        {$t(def.label || `tab.${def.type}`)}
                    </CommandItem>
                {/each}
            </CommandGroup>
            <CommandGroup forceMount heading={$t("command.workspace")}>
                <CommandItem
                    forceMount
                    value={$t("command.workspace.search")}
                    onSelect={() => (searchWorkspace = true)}
                >
                    <Search />
                    {#if search}
                        <span>{$t("command.workspace.search.contextual", search)}</span>
                    {:else}
                        <span>{$t("command.workspace.search")}</span>
                    {/if}
                </CommandItem>
            </CommandGroup>
        {/if}
    </CommandList>
</CommandDialog>
