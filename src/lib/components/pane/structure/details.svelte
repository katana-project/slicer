<script lang="ts">
    import Details from "./views/details.svelte";
    import type { EventHandler } from "$lib/event";
    import type { ClassEntry, Entry } from "$lib/workspace";

    interface Props {
        handler: EventHandler;
        classes: Map<string, Entry>;
        currentEntry: ClassEntry;
        showSummary: boolean;
    }

    let { handler, classes, currentEntry, showSummary = $bindable() }: Props = $props();
</script>

<Details {handler} {classes} {currentEntry} bind:showSummary />
