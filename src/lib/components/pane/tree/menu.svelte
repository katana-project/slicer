<script lang="ts" module>
    import type { Node } from "./node.svelte";
    import type { Entry } from "$lib/workspace";
    import { t } from "$lib/i18n";

    export const collectEntries = (node: Node): Entry[] => {
        const entries = node.entry ? [node.entry.value] : [];
        if (node.nodes) {
            entries.push(...node.nodes.flatMap(collectEntries));
        }

        return entries;
    };
</script>

<script lang="ts">
    import { Code, Download, FileCodeCorner, Gauge, GitBranchPlus, Image, Trash2, Info } from "@lucide/svelte";
    import { EntryType } from "$lib/workspace";
    import { dynamicTabDefs, TabType } from "$lib/tab";
    import {
        ContextMenuContent,
        ContextMenuItem,
        ContextMenuSeparator,
        ContextMenuSub,
        ContextMenuSubContent,
        ContextMenuSubTrigger,
        ContextMenuLabel,
    } from "$lib/components/ui/context-menu";
    import type { EventHandler } from "$lib/event";
    import { modals } from "svelte-modals";
    import { DeleteDialog, PropertiesDialog } from "$lib/components/dialog";
    import IconComponent from "$lib/components/icon.svelte";

    interface Props {
        node: Node;
        handler: EventHandler;
    }

    let { node, handler }: Props = $props();
    let entry = $derived(node.entry);
</script>

<ContextMenuContent class="max-w-56 min-w-48">
    <ContextMenuLabel>{node.label}</ContextMenuLabel>
    <ContextMenuSeparator />
    {#if entry}
        <ContextMenuSub>
            <ContextMenuSubTrigger>{$t("pane.project.menu.open")}</ContextMenuSubTrigger>
            <ContextMenuSubContent class="min-w-48">
                <ContextMenuItem class="flex justify-between" onclick={() => handler.open(entry.value, TabType.CODE)}>
                    {$t("pane.project.menu.open.code")}
                    <Code size={16} />
                </ContextMenuItem>
                <ContextMenuItem class="flex justify-between" onclick={() => handler.open(entry.value, TabType.IMAGE)}>
                    {$t("pane.project.menu.open.image")}
                    <Image size={16} />
                </ContextMenuItem>
                {#if entry.value.type !== EntryType.ARCHIVE}
                    <ContextMenuItem
                        class="flex justify-between"
                        onclick={() => handler.open(entry.value, TabType.GRAPH)}
                    >
                        {$t("pane.project.menu.open.graph")}
                        <GitBranchPlus size={16} />
                    </ContextMenuItem>
                    <ContextMenuItem
                        class="flex justify-between"
                        onclick={() => handler.open(entry.value, TabType.CLASS)}
                    >
                        {$t("pane.project.menu.open.class")}
                        <FileCodeCorner size={16} />
                    </ContextMenuItem>
                {/if}
                <ContextMenuItem
                    class="flex justify-between"
                    onclick={() => handler.open(entry.value, TabType.HEAP_DUMP)}
                >
                    {$t("pane.project.menu.open.dump")}
                    <Gauge size={16} />
                </ContextMenuItem>
                {#each $dynamicTabDefs.values().filter(({ decl }) => decl.contextual) as { decl } (decl.id)}
                    <ContextMenuItem class="flex justify-between" onclick={() => handler.open(entry.value, decl.id)}>
                        {$t(decl.label)}
                        {#if decl.icon}
                            <IconComponent icon={decl.icon} size={16} class="ml-3" />
                        {/if}
                    </ContextMenuItem>
                {/each}
            </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem
            class="flex justify-between"
            onclick={() => modals.open(PropertiesDialog, { entry: entry.value })}
        >
            {$t("pane.project.menu.properties")}
            <Info size={16} />
        </ContextMenuItem>
        <ContextMenuItem class="flex justify-between" onclick={() => handler.export([entry.value])}>
            {$t("pane.project.menu.export")}
            <Download size={16} />
        </ContextMenuItem>
    {/if}
    <ContextMenuItem
        class="data-highlighted:bg-destructive data-highlighted:text-primary-foreground flex justify-between"
        onclick={() => modals.open(DeleteDialog, { entries: collectEntries(node), handler })}
    >
        {$t("pane.project.menu.delete")}
        <Trash2 size={16} />
    </ContextMenuItem>
</ContextMenuContent>
