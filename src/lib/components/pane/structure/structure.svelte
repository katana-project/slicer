<script lang="ts">
    import type { PaneProps } from "../";
    import { EntryType, type ClassEntry } from "$lib/workspace";
    import { current as currentTab } from "$lib/tab";
    import Summary from "./views/summary.svelte";
    import Details from "./views/details.svelte";

    let { handler, classes, entries }: PaneProps = $props();

    let showSummary = $state(false);

    let currentEntry = $derived.by(() => {
        const entry = $currentTab?.entry;
        switch (entry?.type) {
            case EntryType.CLASS:
                return entry as ClassEntry;
            case EntryType.MEMBER:
                return entry.parent as ClassEntry;
            default:
                return null;
        }
    });
</script>

<div class="flex h-full w-full flex-col">
    {#if currentEntry && !showSummary}
        <Details {handler} {classes} {currentEntry} bind:showSummary />
    {:else}
        <Summary {classes} {entries} {currentEntry} bind:showSummary />
    {/if}
</div>
