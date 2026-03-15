<script lang="ts">
    import { t } from "$lib/i18n";
    import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from "$lib/components/ui/command";
    import { onMount } from "svelte";
    import { type ClassEntry, type Entry, EntryType } from "$lib/workspace";
    import { entryIcon } from "$lib/components/icons";
    import { Search } from "@lucide/svelte";
    import { cn } from "$lib/components/utils";
    import { VList } from "virtua/svelte";
    import type { EventHandler } from "$lib/event";
    import { tabDefs, TabPosition } from "$lib/tab";
    import { prettyInternalName } from "$lib/utils";

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

    type RankedEntry = { entry: Entry; altName: string | null; distance: number };
    const filter = (entries: Entry[], term: string): RankedEntry[] => {
        term = term.toLowerCase();
        return entries
            .map((e) => {
                const altName = alternateName(e);
                if (e.name.toLowerCase().includes(term)) {
                    return { entry: e, altName, distance: e.name.length - term.length };
                }
                if (altName?.toLowerCase()?.includes(term)) {
                    return { entry: e, altName, distance: altName!.length - term.length };
                }

                return null;
            })
            .filter(Boolean)
            .sort((a, b) => a!.distance - b!.distance) as RankedEntry[];
    };

    let filteredEntries = $derived(search && searchWorkspace ? filter(entries, search) : []);

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
                {#each tabDefs as def}
                    {@const Icon = def.icon}
                    <CommandItem
                        value={def.type}
                        onSelect={async () => {
                            open = false;
                            await handler.openUnscoped(def, TabPosition.PRIMARY_CENTER, false);
                        }}
                    >
                        <Icon />
                        {$t(`tab.${def.type}`)}
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
