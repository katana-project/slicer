<script lang="ts" module>
    import { TabType } from "$lib/tab";
    import type { PaneProps } from "./";
    import type { Component } from "svelte";
    import { t } from "$lib/i18n";
    import ScriptTab from "./script.svelte";

    export const imports: Record<TabType, () => Promise<{ default: Component<PaneProps> }>> = {
        [TabType.PROJECT]: () => import("./tree/tree.svelte"),
        [TabType.LOGGING]: () => import("./logging/logging.svelte"),
        [TabType.PLAYGROUND]: () => import("./playground/playground.svelte"),
        [TabType.SEARCH]: () => import("./search/search.svelte"),
        [TabType.WELCOME]: () => import("./welcome/welcome.svelte"),
        [TabType.CODE]: () => import("./code/code.svelte"),
        [TabType.GRAPH]: () => import("./flow/flow.svelte"),
        [TabType.IMAGE]: () => import("./image/image.svelte"),
        [TabType.MEDIA]: () => import("./media/media.svelte"),
        [TabType.HEAP_DUMP]: () => import("./dump/dump.svelte"),
        [TabType.CLASS]: () => import("./class/class.svelte"),
        [TabType.STRUCTURE]: () => import("./structure/structure.svelte"),
        [TabType.PREFS]: () => import("./prefs/prefs.svelte"),
    };
</script>

<script lang="ts">
    import { TabPosition } from "$lib/tab";
    import { Loading } from "$lib/components/ui/loading";

    let props: PaneProps = $props();
    let importPromise = $derived(imports[props.tab.type as TabType]);
</script>

{#if importPromise}
    {#await importPromise()}
        <Loading value={$t("pane.loading")} center={props.tab.position !== TabPosition.PRIMARY_CENTER} />
    {:then { default: PaneComponent }}
        <PaneComponent {...props} />
    {/await}
{:else}
    <ScriptTab {...props} />
{/if}
