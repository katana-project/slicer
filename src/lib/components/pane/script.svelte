<script lang="ts">
    import type { PaneProps } from "./";
    import { dynamicTabDefs, TabPosition } from "$lib/tab";
    import { wrapEntry } from "$lib/script";
    import Loading from "$lib/components/loading.svelte";
    import { t } from "$lib/i18n";
    import { onDestroy } from "svelte";

    let { tab }: PaneProps = $props();

    // find the script associated with this tab, if any
    let def = $derived($dynamicTabDefs.get(tab.type)!);

    let destroyCallback: (() => void) | null = null;
    let contentPromise = $derived(
        (async () => {
            // @ts-ignore - destroyCallback is not `never`?
            destroyCallback?.();
            if (!def) {
                return null;
            }

            const { context, decl } = def;
            const content = await decl.render({ context, entry: tab.entry ? wrapEntry(tab.entry) : null });
            if (content?.destroy) {
                destroyCallback = content.destroy;
            }

            return content;
        })()
    );

    onDestroy(() => {
        destroyCallback?.();
    });
</script>

{#await contentPromise}
    <Loading value={$t("pane.loading")} center={tab.position !== TabPosition.PRIMARY_CENTER} />
{:then content}
    {#if content}
        <div {@attach (el) => el.replaceWith(content.content)}></div>
    {:else}
        <div class="flex flex-col h-full items-center justify-center gap-2">
            <p>{$t("pane.not-available.title")}</p>
            <p class="text-sm text-muted-foreground">{$t("pane.not-available.subtitle")}</p>
        </div>
    {/if}
{/await}
