<script lang="ts">
    import { t } from "$lib/i18n";
    import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from "$lib/components/ui/command";
    import { onMount } from "svelte";
    import { type ClassEntry, type Entry, EntryType } from "$lib/workspace";
    import { entryIcon, type StyledIcon } from "$lib/components/icons";
    import { ArrowDownWideNarrow, ArrowUpDown, ArrowUpNarrowWide, Coffee, Search } from "@lucide/svelte";
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
    import { BUCKET_URL, createEntry, index } from "$lib/workspace/jdk";
    import { toast } from "svelte-sonner";

    interface Props {
        entries: Entry[];
        handler: EventHandler;
    }

    let { entries, handler }: Props = $props();

    let open = $state(false);
    let searchSource: "workspace" | "jdk" | null = $state(null);
    let search = $state("");

    type EntryLike = {
        name: string;
        altName?: string;
        size?: number;
        lastModified?: Date;
        icon: () => StyledIcon;
        entry: () => Promise<Entry | null>;
    };
    const rank = (entry: EntryLike, type: WorkspaceSearchSort, distance: number): number => {
        switch (type) {
            case "size":
                return entry.size ?? 0;
            case "last-mod":
                return entry.lastModified?.getTime() ?? 0;
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

    type RankedEntry = { entry: EntryLike; rank: number };
    const filter = (
        entries: EntryLike[],
        term: string,
        sortType: WorkspaceSearchSort,
        sortFunc: SortFunc
    ): RankedEntry[] => {
        term = term.toLowerCase();
        return (
            entries
                .map((e) => {
                    if (e.name.toLowerCase().includes(term)) {
                        return { entry: e, rank: rank(e, sortType, e.name.length - term.length) };
                    }
                    if (e.altName?.toLowerCase()?.includes(term)) {
                        return { entry: e, rank: rank(e, sortType, e.altName!.length - term.length) };
                    }

                    return null;
                })
                .filter(Boolean) as RankedEntry[]
        ).sort(sortFunc);
    };

    let workspaceEntries: EntryLike[] = $derived(
        entries.map((e) => ({
            name: e.name,
            altName:
                e.type === EntryType.CLASS
                    ? prettyInternalName((e as ClassEntry).node.thisClass.nameEntry?.string || "")
                    : undefined,
            size: e.data.size,
            lastModified: e.data.lastModified,
            icon: () => entryIcon(e),
            entry: async () => e,
        }))
    );

    let jdkEntries: EntryLike[] = $derived(
        Array.from($index.entries()).map(([name, url]) => ({
            name: `JDK: ${url.replace(`${BUCKET_URL}/`, "")}`,
            altName: prettyInternalName(name),
            icon: () => ({ icon: Coffee, classes: ["text-red-500"] }),
            entry: () => createEntry(name),
        }))
    );

    let protoEntries: EntryLike[] = $derived(
        searchSource === "workspace" ? workspaceEntries : searchSource === "jdk" ? jdkEntries : []
    );

    const debouncedSearch = debounced(
        toStore(() => search),
        150
    );
    let filteredEntries = $derived(searchSource ? filter(protoEntries, $debouncedSearch, $sortMode, sortFunc) : []);

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
    shouldFilter={!searchSource}
    onOpenChangeComplete={(open) => {
        // reset page on close
        if (!open) {
            searchSource = null;
            search = "";
        }
    }}
>
    <CommandInput
        bind:value={search}
        placeholder={$t(searchSource ? "command.workspace.search.placeholder" : "command.placeholder")}
    />
    {#if searchSource}
        <div class="border-border flex w-full flex-row border-b">
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
                class="border-border rounded-none border-0 border-l"
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
    <CommandList class={cn(!searchSource || "h-[80vh] max-h-[80vh] [&>div]:contents")}>
        {#if searchSource}
            {#if protoEntries.length > 0}
                {#key filteredEntries.length}
                    <VList data={filteredEntries} getKey={(e) => e.entry.name} class="p-2">
                        {#snippet children({ entry: e })}
                            <CommandItem
                                class="py-2.5!"
                                onSelect={async () => {
                                    const entry = await e.entry();
                                    if (!entry) {
                                        toast.error($t("toast.error.title.generic"), {
                                            description: $t("toast.error.command.entry-create", e.name),
                                        });
                                        return;
                                    }

                                    open = false;
                                    await handler.open(entry);
                                }}
                            >
                                {@const { icon: Icon, classes } = e.icon()}
                                <Icon class={classes} />
                                <div class="flex flex-col">
                                    <span class="break-anywhere">{e.name}</span>
                                    {#if e.altName}
                                        <span class="break-anywhere text-muted-foreground text-xs">
                                            ({e.altName})
                                        </span>
                                    {/if}
                                    {#if e.size || e.lastModified}
                                        <span class="break-anywhere text-muted-foreground text-xs">
                                            {$t(
                                                "command.workspace.search.meta",
                                                e.size ? humanSize(e.size) : "-",
                                                e.lastModified?.toLocaleString() ?? "-"
                                            )}
                                        </span>
                                    {/if}
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
                    onSelect={() => (searchSource = "workspace")}
                >
                    <Search />
                    {#if search}
                        <span>{$t("command.workspace.search.contextual", search)}</span>
                    {:else}
                        <span>{$t("command.workspace.search")}</span>
                    {/if}
                </CommandItem>
                {#if jdkEntries.length > 0}
                    <CommandItem
                        forceMount
                        value={$t("command.workspace.search.jdk")}
                        onSelect={() => (searchSource = "jdk")}
                    >
                        <Search />
                        {#if search}
                            <span>{$t("command.workspace.search.jdk.contextual", search)}</span>
                        {:else}
                            <span>{$t("command.workspace.search.jdk")}</span>
                        {/if}
                    </CommandItem>
                {/if}
            </CommandGroup>
        {/if}
    </CommandList>
</CommandDialog>
