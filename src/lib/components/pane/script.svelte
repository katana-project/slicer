<script lang="ts">
    import type { PaneProps } from "./";
    import { dynamicTabDefs, TabPosition } from "$lib/tab";
    import { wrapEntry } from "$lib/script";
    import Loading from "$lib/components/loading.svelte";
    import { t } from "$lib/i18n";
    import { onDestroy } from "svelte";

    let { tab }: PaneProps = $props();

    // find the script associated with this tab, if any
    let { context, decl } = $derived($dynamicTabDefs.get(tab.type)!);
    let contentPromise = $derived(
        (async () => {
            const content = await decl.render({ context, entry: tab.entry ? wrapEntry(tab.entry) : null });
            if (content?.destroy) {
                onDestroy(() => {
                    content.destroy!();
                });
            }

            return content;
        })()
    );
</script>

{#await contentPromise}
    <Loading value={$t("pane.loading")} center={tab.position !== TabPosition.PRIMARY_CENTER} />
{:then content}
    {#if content}
        <div {@attach (el) => el.replaceWith(content.content)}></div>
    {/if}
{/await}
