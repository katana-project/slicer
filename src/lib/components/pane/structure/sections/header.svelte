<script lang="ts">
    import { LayoutDashboard } from "@lucide/svelte";
    import RenameableText from "$lib/components/renameable_text.svelte";
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/components/utils";
    import { prettyInternalName } from "$lib/utils";
    import { mappings } from "$lib/workspace/analysis/mapping";
    import { t } from "$lib/i18n";
    import type { Entry } from "$lib/workspace";
    import type { EventHandler } from "$lib/event";
    import type { Node } from "@katana-project/asm";
    import type { RenameTarget } from "../model/types";
    import type { Snippet } from "svelte";

    interface Props {
        handler: EventHandler;
        classes: Map<string, Entry>;
        currentNode: Node;
        packageName: string | null;
        simpleName: string | null;
        hasSuperData: boolean;
        absData: { superClass?: string; implementations: string[] };
        renaming: RenameTarget | null;
        renameValue: string;
        startRename: (target: RenameTarget, current: string) => void;
        commitRename: (value?: string) => void;
        cancelRename: () => void;
        canonicalizeClassName: (name: string) => string;
        showSummary: boolean;
        entryIcon?: Snippet;
    }

    let {
        handler,
        classes,
        currentNode,
        packageName,
        simpleName,
        hasSuperData,
        absData,
        renaming,
        renameValue = $bindable(),
        startRename,
        commitRename,
        cancelRename,
        canonicalizeClassName,
        showSummary = $bindable(),
        entryIcon,
    }: Props = $props();

    const sourceInternalName = $derived(canonicalizeClassName(currentNode.thisClass.nameEntry!.string));
    const classDst = $derived($mappings.getOrNull(sourceInternalName)?.dst);
    const mappedPackageName = $derived(classDst ? classDst.split("/").slice(0, -1).join(".") : packageName);
    const mappedSimpleName = $derived(classDst ? classDst.split("/").pop() ?? simpleName ?? "" : simpleName ?? "");
</script>

<div class="bg-muted/20 border-b p-3">
    <div class="mb-2 flex w-full justify-between">
        <div class="min-w-0 flex-1">
            {#if packageName}
                <div class="group text-muted-foreground mb-2 flex items-center gap-1 text-xs">
                    <RenameableText
                        editing={renaming?.kind === "package"}
                        bind:value={renameValue}
                        display={mappedPackageName ?? ""}
                        placeholder={$t("pane.structure.rename.placeholder")}
                        title={$t("pane.structure.rename")}
                        textClass={cn("truncate", classDst && mappedPackageName !== packageName && "text-primary")}
                        inputClass="min-w-0 flex-1 border-b border-primary bg-transparent text-xs outline-none"
                        buttonClass="text-muted-foreground hover:text-foreground hover:bg-muted shrink-0 rounded-sm p-0.5 opacity-0 transition-all group-hover:opacity-100"
                        iconClass="size-3"
                        onStart={() => startRename({ kind: "package" }, mappedPackageName ?? packageName ?? "")}
                        onCommit={commitRename}
                        onCancel={cancelRename}
                    />
                </div>
            {/if}
            <div class={cn("group flex items-center gap-2")}>
                {@render entryIcon?.()}
                <RenameableText
                    editing={renaming?.kind === "class"}
                    bind:value={renameValue}
                    display={prettyInternalName(mappedSimpleName)}
                    placeholder={$t("pane.structure.rename.placeholder")}
                    title={$t("pane.structure.rename")}
                    textClass={cn("truncate text-sm font-medium", classDst && "text-primary")}
                    inputClass="min-w-0 flex-1 border-b border-primary bg-transparent text-sm font-medium outline-none"
                    buttonClass="text-muted-foreground shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    iconClass="size-3.5"
                    onStart={() => startRename({ kind: "class" }, mappedSimpleName)}
                    onCommit={commitRename}
                    onCancel={cancelRename}
                />
            </div>
        </div>
        <Button
            variant="ghost"
            size="icon-sm"
            class="text-muted-foreground ml-2 shrink-0"
            onclick={() => (showSummary = true)}
        >
            <LayoutDashboard />
        </Button>
    </div>
    {#if hasSuperData}
        <div class="text-muted-foreground text-xs">
            {#if absData.superClass}
                {@const superEntry = classes.get(absData.superClass)}
                <div>
                    {$t("pane.structure.extends")}
                    <button
                        title={prettyInternalName(absData.superClass)}
                        class={cn("text-secondary-foreground", superEntry ? "cursor-pointer underline" : "")}
                        onclick={() => {
                            if (superEntry) {
                                handler.open(superEntry);
                            }
                        }}
                    >
                        {prettyInternalName(absData.superClass, !!superEntry)}
                    </button>
                </div>
            {/if}
            {#if absData.implementations.length > 0}
                <div>
                    {$t("pane.structure.implements")}
                    <span class="text-secondary-foreground">
                        {#each absData.implementations as impl, i}
                            {@const implEntry = classes.get(impl)}
                            {#if i > 0},
                            {/if}
                            <button
                                title={prettyInternalName(impl)}
                                class={cn(implEntry && "cursor-pointer underline")}
                                onclick={() => {
                                    if (implEntry) {
                                        handler.open(implEntry);
                                    }
                                }}
                            >
                                {prettyInternalName(impl, !!implEntry)}
                            </button>
                        {/each}
                    </span>
                </div>
            {/if}
        </div>
    {/if}
</div>
