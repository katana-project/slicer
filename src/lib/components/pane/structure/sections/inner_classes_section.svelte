<script lang="ts">
    import { accessIcon, classIcon } from "$lib/components/icons";
    import { ContextMenu, ContextMenuTrigger } from "$lib/components/ui/context-menu";
    import { cn } from "$lib/components/utils";
    import { t } from "$lib/i18n";
    import { mappings } from "$lib/workspace/analysis/mapping";
    import CategorySection from "./category_section.svelte";
    import StructureMenu from "./menu.svelte";
    import type { RenameTarget } from "../model/types";
    import type { EventHandler } from "$lib/event";
    import type { innerClasses } from "../model/util";
    import type { ClassEntry } from "$lib/workspace";

    type InnerClassItem = ReturnType<typeof innerClasses>[number];

    interface Props {
        handler: EventHandler;
        filteredInnerClassData: InnerClassItem[];
        totalInnerClassCount: number;
        renaming: RenameTarget | null;
        renameValue: string;
        startRename: (target: RenameTarget, current: string) => void;
        commitRename: (value?: string) => void;
        cancelRename: () => void;
    }

    let {
        handler,
        filteredInnerClassData,
        totalInnerClassCount,
        renaming,
        renameValue = $bindable(),
        startRename,
        commitRename,
        cancelRename,
    }: Props = $props();

    const focusInput = (node: HTMLInputElement): void => {
        node.focus();
        node.select();
    };
</script>

{#if filteredInnerClassData.length > 0}
    <CategorySection title={$t("pane.structure.inner-classes")} count={totalInnerClassCount}>
        {#each filteredInnerClassData as innerClass}
            {@const TypeIcon = classIcon(innerClass.access, innerClass.record)}
            {@const ModifierIcon = accessIcon(innerClass.access)}
            {@const innerEntry = innerClass.entry as ClassEntry | undefined}
            {@const innerInternalName = innerEntry?.node?.thisClass.nameEntry?.string}
            {@const innerDst = innerInternalName ? $mappings.getOrNull(innerInternalName)?.dst : undefined}
            {@const innerDstSimple = innerDst ? (innerDst.split("/").pop()?.split("$").pop() ?? undefined) : undefined}
            {@const isRenamingInner = renaming?.kind === "inner" && renaming.internalName === innerInternalName}
            <ContextMenu>
                <ContextMenuTrigger>
                    <div
                        class={cn(
                            "group hover:bg-muted/50 inline-flex h-8 w-full shrink-0 items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none",
                            innerClass.entry ? "cursor-pointer" : "cursor-not-allowed"
                        )}
                    >
                        <div class="flex w-full min-w-0 items-center gap-2">
                            <div class="flex shrink-0 items-center gap-1">
                                <TypeIcon finalMember={innerClass.access.final} staticMember={innerClass.access.static} class="size-4" />
                                {#if ModifierIcon}
                                    <ModifierIcon class="size-2.5" />
                                {/if}
                            </div>
                            {#if isRenamingInner}
                                <input
                                    use:focusInput
                                    class="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                    placeholder={$t("pane.structure.rename.placeholder")}
                                    bind:value={renameValue}
                                    onkeydown={(e) => { if (e.key === "Enter") commitRename(renameValue); if (e.key === "Escape") cancelRename(); }}
                                    onblur={() => commitRename(renameValue)}
                                />
                            {:else if innerClass.name}
                                <span class={cn("min-w-0 flex-1 truncate font-mono text-xs", innerDstSimple && "text-primary")}>
                                    {innerDstSimple ?? innerClass.name}
                                </span>
                                {#if innerClass.entry && innerInternalName}
                                    <button
                                        class="text-muted-foreground ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                        onclick={(e) => {
                                            e.stopPropagation();
                                            startRename(
                                                { kind: "inner", internalName: innerInternalName },
                                                innerDstSimple ?? innerClass.name ?? ""
                                            );
                                        }}
                                        title={$t("pane.structure.rename")}
                                    >
                                        <span class="sr-only">{$t("pane.structure.rename")}</span>
                                        <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" /></svg>
                                    </button>
                                {/if}
                            {:else}
                                <span class="text-muted-foreground min-w-0 flex-1 truncate text-xs">
                                    {$t("pane.structure.inner-classes.anonymous")}
                                </span>
                            {/if}
                        </div>
                    </div>
                </ContextMenuTrigger>
                {#if innerClass.entry}
                    <StructureMenu
                        title={innerClass.name ?? $t("pane.structure.inner-classes.anonymous")}
                        {handler}
                        entry={innerClass.entry}
                    />
                {/if}
            </ContextMenu>
        {/each}
    </CategorySection>
{/if}
