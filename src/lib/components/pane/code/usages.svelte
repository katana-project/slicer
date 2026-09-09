<script lang="ts">
    import { VList } from "virtua/svelte";
    import { QueryType, search, SearchMode, type SearchResult } from "$lib/workspace/analysis";
    import { t } from "$lib/i18n";
    import type { EventHandler } from "$lib/event";
    import { groupBy } from "$lib/utils";
    import type { Entry } from "$lib/workspace";
    import { error } from "$lib/log";
    import { toast } from "svelte-sonner";
    import Usage from "./usage.svelte";

    interface Props {
        open: boolean;
        name: string | null;
        classes: Map<string, Entry>;
        handler: EventHandler;
    }

    let { open = $bindable(), name, classes, handler }: Props = $props();

    let usages: SearchResult[] = $state.raw([]);
    $effect(() => {
        usages = [];
        if (!open || !name) {
            return;
        }

        const task = search(
            Array.from(classes.values()),
            { type: QueryType.PSEUDOCODE, value: name, mode: SearchMode.PARTIAL_MATCH, ref: true },
            (res) => {
                usages = [...usages, res];
            }
        );

        task.then(null, (e) => {
            error("failed to search", e);
            toast.error($t("toast.error.title.generic"), {
                description: $t("toast.error.search"),
            });
        });

        return () => {
            task.cancel();
        };
    });

    const isRelatedToSelf = (ref: string): boolean => name === ref || ref.startsWith(`${name}$`);

    let grouped = $derived(
        Array.from(groupBy(usages, (usage) => usage.entry.node.thisClass.nameEntry.string).entries())
            // sort related entries to the end
            .sort(([a], [b]) => +isRelatedToSelf(a) - +isRelatedToSelf(b))
    );
</script>

<div class="divide-border flex h-full flex-col divide-y">
    <div class="bg-muted/30 flex items-center gap-1 px-2 py-1.5">
        <span class="text-muted-foreground mr-2 text-xs">
            {$t("modal.usages.info", usages.length)}
        </span>
    </div>

    <div class="min-h-0 flex-1">
        <VList data={grouped} getKey={([name]) => name} class="h-full overflow-x-hidden p-1">
            {#snippet children([name, usages])}
                <Usage {name} {usages} {handler} collapsed={isRelatedToSelf(name)} bind:modalOpen={open} />
            {/snippet}
        </VList>
    </div>
</div>
