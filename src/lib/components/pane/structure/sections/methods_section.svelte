<script lang="ts">
    import { Constructor, Method, AbstractMethod, accessIcon } from "$lib/components/icons";
    import RenameableText from "$lib/components/renameable_text.svelte";
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
                            <RenameableText
                                editing={isRenamingMethod}
                                bind:value={renameValue}
                                display={methodDst ? methodDst + prettyMethodDesc(method.type, true) : method.signature}
                                placeholder={$t("pane.structure.rename.placeholder")}
                                title={$t("pane.structure.rename")}
                                textClass={cn("min-w-0 flex-1 truncate font-mono text-xs", methodDst && "text-primary")}
                                inputClass="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                buttonClass="text-muted-foreground ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                                stopPropagationOnStart={true}
                                onStart={() =>
                                    startRename({ kind: "method", name: method.name, desc: methodDesc }, methodDst ?? method.name)}
                                onCommit={commitRename}
                                onCancel={cancelRename}
                            />
                        </div>
                    </div>
                </ContextMenuTrigger>
                <StructureMenu title={method.signature} {handler} entry={method.entry} />
            </ContextMenu>
        {/each}
    </CategorySection>
{/if}
