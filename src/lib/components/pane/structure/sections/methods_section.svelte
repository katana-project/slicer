<script lang="ts">
    import { Constructor, Method, AbstractMethod, accessIcon } from "$lib/components/icons";
    import { ContextMenu, ContextMenuTrigger } from "$lib/components/ui/context-menu";
    import { prettyMethodDesc } from "$lib/utils";
    import { cn } from "$lib/components/utils";
    import { t } from "$lib/i18n";
    import StructureMenu from "./menu.svelte";
    import CategorySection from "./category_section.svelte";
    import { canonicalizeDescriptor, mappedMethodName } from "../model/rename";
    import type { RenameTarget } from "../model/types";
    import type { EventHandler } from "$lib/event";
    import type { Node } from "@katana-project/asm";
    import type { methods } from "../model/util";

    type MethodItem = ReturnType<typeof methods>[number];

    interface Props {
        handler: EventHandler;
        filteredInitializerData: MethodItem[];
        totalInitializerCount: number;
        filteredConstructorData: MethodItem[];
        totalConstructorCount: number;
        filteredMethodData: MethodItem[];
        totalMethodCount: number;
        currentNode: Node;
        renaming: RenameTarget | null;
        renameValue: string;
        startRename: (target: RenameTarget, current: string) => void;
        commitRename: (value?: string) => void;
        cancelRename: () => void;
    }

    let {
        handler,
        filteredInitializerData,
        totalInitializerCount,
        filteredConstructorData,
        totalConstructorCount,
        filteredMethodData,
        totalMethodCount,
        currentNode,
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

{#if filteredInitializerData.length > 0}
    <CategorySection title={$t("pane.structure.initializers")} count={totalInitializerCount}>
        {#each filteredInitializerData as initializer}
            {@const ModifierIcon = accessIcon(initializer.access)}
            <ContextMenu>
                <ContextMenuTrigger>
                    <div class="hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none">
                        <div class="flex w-full items-center gap-2">
                            <div class="flex items-center gap-1">
                                <Constructor class="size-4" />
                                {#if ModifierIcon}
                                    <ModifierIcon class="size-2.5" />
                                {/if}
                            </div>
                            <span class="truncate font-mono text-xs">{initializer.signature}</span>
                        </div>
                    </div>
                </ContextMenuTrigger>
                <StructureMenu title={initializer.signature} {handler} entry={initializer.entry} />
            </ContextMenu>
        {/each}
    </CategorySection>
{/if}

{#if filteredConstructorData.length > 0}
    <CategorySection title={$t("pane.structure.constructors")} count={totalConstructorCount}>
        {#each filteredConstructorData as constructor}
            {@const ModifierIcon = accessIcon(constructor.access)}
            <ContextMenu>
                <ContextMenuTrigger>
                    <div class="hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none">
                        <div class="flex w-full items-center gap-2">
                            <div class="flex items-center gap-1">
                                <Constructor class="size-4" />
                                {#if ModifierIcon}
                                    <ModifierIcon class="size-2.5" />
                                {/if}
                            </div>
                            <span class="truncate font-mono text-xs">{constructor.signature}</span>
                        </div>
                    </div>
                </ContextMenuTrigger>
                <StructureMenu title={constructor.signature} {handler} entry={constructor.entry} />
            </ContextMenu>
        {/each}
    </CategorySection>
{/if}

{#if filteredMethodData.length > 0}
    <CategorySection title={$t("pane.structure.methods")} count={totalMethodCount}>
        {#each filteredMethodData as method}
            {@const TypeIcon = method.access.abstract ? AbstractMethod : Method}
            {@const ModifierIcon = accessIcon(method.access)}
            {@const methodDesc = canonicalizeDescriptor(method.type)}
            {@const isRenamingMethod = renaming?.kind === "method" && renaming.name === method.name && renaming.desc === methodDesc}
            {@const methodDst = mappedMethodName(currentNode.thisClass.nameEntry!.string, method.name, method.type)}
            <ContextMenu>
                <ContextMenuTrigger>
                    <div class="group hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none">
                        <div class="flex w-full min-w-0 items-center gap-2">
                            <div class="flex shrink-0 items-center gap-1">
                                <TypeIcon finalMember={method.access.final} staticMember={method.access.static} class="size-4" />
                                {#if ModifierIcon}
                                    <ModifierIcon class="size-2.5" />
                                {/if}
                            </div>
                            {#if isRenamingMethod}
                                <input
                                    use:focusInput
                                    class="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                    placeholder={$t("pane.structure.rename.placeholder")}
                                    bind:value={renameValue}
                                    onkeydown={(e) => { if (e.key === "Enter") commitRename(renameValue); if (e.key === "Escape") cancelRename(); }}
                                    onblur={() => commitRename(renameValue)}
                                />
                            {:else}
                                <span class={cn("min-w-0 flex-1 truncate font-mono text-xs", methodDst && "text-primary")}>
                                    {methodDst ? methodDst + prettyMethodDesc(method.type, true) : method.signature}
                                </span>
                                <button
                                    class="text-muted-foreground ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                    onclick={(e) => {
                                        e.stopPropagation();
                                        startRename({ kind: "method", name: method.name, desc: methodDesc }, methodDst ?? method.name);
                                    }}
                                    title={$t("pane.structure.rename")}
                                >
                                    <span class="sr-only">{$t("pane.structure.rename")}</span>
                                    <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" /></svg>
                                </button>
                            {/if}
                        </div>
                    </div>
                </ContextMenuTrigger>
                <StructureMenu title={method.signature} {handler} entry={method.entry} />
            </ContextMenu>
        {/each}
    </CategorySection>
{/if}
