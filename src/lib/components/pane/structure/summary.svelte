<script lang="ts">
    import { t } from "$lib/i18n";
    import {
        Layers,
        ChevronRight,
        LayoutDashboard,
        FileCodeCorner,
        LayoutList,
        LandPlot,
        Map as MapIcon,
        CircleQuestionMark,
    } from "@lucide/svelte";
    import { cn } from "$lib/components/utils";
    import { EntryType, type ClassEntry, type Entry } from "$lib/workspace";
    import { entryIcon } from "$lib/components/icons";
    import handler from "$lib/event/handler";
    import { Button } from "$lib/components/ui/button";
    import { prettyInternalName } from "$lib/utils";
    import { mappings } from "$lib/workspace/analysis/mapping";
    import {
        type CharacteristicGroupType,
        type CharacteristicType,
        StandardCharacteristicGroupType,
    } from "$lib/workspace/analysis";
    import IconComponent from "$lib/components/icon.svelte";
    import { SvelteSet } from "svelte/reactivity";
    import { characteristics, groups } from "$lib/workspace/analysis/characteristics";
    import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "$lib/components/ui/tooltip";

    interface Props {
        classes: Map<string, Entry>;
        entries: Entry[];
        currentEntry?: Entry | null;
        showSummary: boolean;
    }

    let { classes, entries, currentEntry = $bindable(), showSummary = $bindable() }: Props = $props();

    let expandedChars = $state(new SvelteSet<CharacteristicType>());
    let groupedCharacteristics = $derived.by(() => {
        const groups = new Map<CharacteristicType, ClassEntry[]>();

        classes.forEach((entry) => {
            if (entry.type !== EntryType.CLASS) return;

            const classEntry = entry as ClassEntry;
            classEntry.characteristics?.forEach((type) => {
                if (!groups.has(type)) {
                    groups.set(type, []);
                }

                groups.get(type)!.push(classEntry);
            });
        });

        const groupsOfGroups = new Map<CharacteristicGroupType, Map<CharacteristicType, ClassEntry[]>>();
        for (const [type, entries] of groups.entries()) {
            const groupType =
                $characteristics.find((c) => c.type === type)?.group ?? StandardCharacteristicGroupType.GENERAL;
            if (!groupsOfGroups.has(groupType)) {
                groupsOfGroups.set(groupType, new Map());
            }
            groupsOfGroups.get(groupType)!.set(type, entries);
        }

        return groupsOfGroups;
    });
</script>

<div class="flex h-full w-full flex-col text-sm">
    <div class="bg-muted/20 border-border/50 flex w-full justify-between border-b p-3">
        <div class="flex flex-col">
            <div class="flex items-center gap-2">
                <LayoutDashboard class="text-foreground h-4 w-4" />
                <span class="text-foreground font-medium">{$t("pane.structure.summary.title")}</span>
            </div>

            <div class="text-muted-foreground mt-1.5 flex flex-wrap items-center gap-3 text-xs">
                <span class="flex items-center gap-1">
                    <Layers class="h-3 w-3" />
                    {$t("pane.structure.summary.total-classes", classes.size)}
                </span>
                <span class="flex items-center gap-1">
                    <FileCodeCorner class="h-3 w-3" />
                    {$t("pane.structure.summary.total-files", entries.length)}
                </span>
                <span class="flex items-center gap-1">
                    <MapIcon class="h-3 w-3" />
                    {$t("pane.structure.summary.total-mapped", $mappings.size())}
                </span>
            </div>
        </div>

        {#if currentEntry}
            <Button
                variant="ghost"
                size="icon-sm"
                class="text-muted-foreground ml-2 shrink-0"
                onclick={() => (showSummary = false)}
            >
                <LayoutList />
            </Button>
        {/if}
    </div>

    <div class="flex-1 overflow-y-auto">
        {#if groupedCharacteristics.size === 0}
            <div class="text-muted-foreground flex flex-col items-center justify-center py-6 text-center">
                <LandPlot class="mb-2 h-5 w-5 opacity-50" />
                <span class="text-xs">{$t("pane.structure.summary.characteristics.none")}</span>
            </div>
        {:else}
            {#each Array.from(groupedCharacteristics.entries()).sort( ([a], [b]) => a.localeCompare(b) ) as [groupType, grouped]}
                {@const group = $groups.find((g) => g.type === groupType)}
                <TooltipProvider>
                    <div class="bg-background sticky top-0 z-10 px-3 py-2 flex items-center gap-2">
                        <span
                            class="text-muted-foreground/70 text-[11px] font-medium tracking-wider break-anywhere uppercase"
                        >
                            {$t(group?.label ?? `pane.structure.summary.characteristics.group.${groupType}`)}
                        </span>
                        {#if group?.description}
                            <Tooltip>
                                <TooltipTrigger class="cursor-pointer">
                                    <CircleQuestionMark class="h-3 w-3 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    {@html $t(group.description)}
                                </TooltipContent>
                            </Tooltip>
                        {/if}
                    </div>
                </TooltipProvider>

                {#each Array.from(grouped.entries()).sort(([a], [b]) => a.localeCompare(b)) as [type, entries]}
                    {@const ct = $characteristics.find((c) => c.type === type)}
                    {@const icon = ct?.icon ?? LandPlot}
                    <button
                        type="button"
                        onclick={() => (expandedChars.has(type) ? expandedChars.delete(type) : expandedChars.add(type))}
                        class="hover:bg-accent/40 group flex w-full items-center gap-2 px-3 py-1 transition-colors"
                    >
                        <ChevronRight
                            class={cn(
                                "text-muted-foreground h-3.5 w-3.5 transition-transform",
                                expandedChars.has(type) && "rotate-90"
                            )}
                        />
                        <span class="flex h-5 w-5 items-center justify-center rounded">
                            <IconComponent {icon} class="text-muted-foreground h-3 w-3" />
                        </span>
                        <TooltipProvider>
                            <span class="text-muted-foreground text-xs font-medium break-anywhere">
                                {$t(ct?.label ?? `pane.structure.summary.characteristics.${type}`)}
                            </span>
                            {#if ct?.description}
                                <Tooltip>
                                    <TooltipTrigger class="cursor-pointer">
                                        <CircleQuestionMark class="h-3 w-3 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        {@html $t(ct.description)}
                                    </TooltipContent>
                                </Tooltip>
                            {/if}
                        </TooltipProvider>
                        <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
                            {entries.length}
                        </span>
                    </button>

                    {#if expandedChars.has(type)}
                        {#each entries as entry (entry.name)}
                            {@const { icon: Icon, classes } = entryIcon(entry)}
                            <div
                                role="button"
                                ondblclick={() => handler.open(entry)}
                                class="group focus:bg-accent/60 hover:bg-accent/50 cursor-pointer pl-4.5 transition-colors"
                                tabindex="0"
                            >
                                <div
                                    class="group-focus:border-l-primary flex w-full items-center gap-2 border-l py-1 pr-3 pl-4.5 text-left"
                                >
                                    <Icon size={16} class={cn("min-w-4", classes)} />
                                    <span class="text-foreground/90 flex-1 truncate font-mono text-xs">
                                        {prettyInternalName(entry.node.thisClass.nameEntry?.string || "")}
                                    </span>
                                    <ChevronRight
                                        class="text-muted-foreground/50 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                                    />
                                </div>
                            </div>
                        {/each}
                    {/if}
                {/each}
            {/each}
        {/if}
    </div>
</div>
