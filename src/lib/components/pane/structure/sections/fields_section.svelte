<script lang="ts">
    import { Field, accessIcon } from "$lib/components/icons";
    import { cn } from "$lib/components/utils";
    import { prettyJavaType } from "$lib/utils";
    import { t } from "$lib/i18n";
    import CategorySection from "./category_section.svelte";
    import { canonicalizeDescriptor, mappedFieldName } from "../model/rename";
    import type { RenameTarget } from "../model/types";
    import type { Node } from "@katana-project/asm";
    import type { fields } from "../model/util";

    type FieldItem = ReturnType<typeof fields>[number];

    interface Props {
        filteredFieldData: FieldItem[];
        totalFieldCount: number;
        currentNode: Node;
        renaming: RenameTarget | null;
        renameValue: string;
        startRename: (target: RenameTarget, current: string) => void;
        commitRename: (value?: string) => void;
        cancelRename: () => void;
    }

    let {
        filteredFieldData,
        totalFieldCount,
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

{#if filteredFieldData.length > 0}
    <CategorySection title={$t("pane.structure.fields")} count={totalFieldCount}>
        {#each filteredFieldData as field}
            {@const ModifierIcon = accessIcon(field.access)}
            {@const fieldDesc = canonicalizeDescriptor(field.type)}
            {@const isRenamingField = renaming?.kind === "field" && renaming.name === field.name && renaming.desc === fieldDesc}
            {@const fieldDst = mappedFieldName(currentNode.thisClass.nameEntry!.string, field.name, field.type)}
            <div class="group hover:bg-muted/50 inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-start gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-all outline-none">
                <div class="flex w-full min-w-0 items-center gap-2">
                    <div class="flex shrink-0 items-center gap-1">
                        <Field finalMember={field.access.final} staticMember={field.access.static} class="size-4" />
                        {#if ModifierIcon}
                            <ModifierIcon class="size-2.5" />
                        {/if}
                    </div>
                    {#if isRenamingField}
                        <input
                            use:focusInput
                            class="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                            placeholder={$t("pane.structure.rename.placeholder")}
                            bind:value={renameValue}
                            onkeydown={(e) => { if (e.key === "Enter") commitRename(renameValue); if (e.key === "Escape") cancelRename(); }}
                            onblur={() => commitRename(renameValue)}
                        />
                    {:else}
                        <span class={cn("min-w-0 flex-1 truncate font-mono text-xs", fieldDst && "text-primary")}>
                            {fieldDst ? `${fieldDst}: ${prettyJavaType(field.type, true)}` : field.signature}
                        </span>
                        <button
                            class="text-muted-foreground ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                            onclick={(e) => {
                                e.stopPropagation();
                                startRename({ kind: "field", name: field.name, desc: fieldDesc }, fieldDst ?? field.name);
                            }}
                            title={$t("pane.structure.rename")}
                        >
                            <span class="sr-only">{$t("pane.structure.rename")}</span>
                            <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" /></svg>
                        </button>
                    {/if}
                </div>
            </div>
        {/each}
    </CategorySection>
{/if}
