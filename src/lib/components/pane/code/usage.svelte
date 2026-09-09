<script lang="ts">
    import type { SearchResult } from "$lib/workspace/analysis";
    import type { EventHandler } from "$lib/event";
    import { memberEntry } from "$lib/workspace";
    import { cn } from "$lib/components/utils";
    import { AbstractMethod, accessIcon, entryIcon, Method } from "$lib/components/icons";
    import { ChevronRight } from "@lucide/svelte";
    import { groupBy, parseModifiers, prettyInternalName, prettyMethodDesc } from "$lib/utils";

    interface Props {
        name: string;
        usages: SearchResult[];
        handler: EventHandler;
        collapsed: boolean;
        modalOpen: boolean;
    }

    let { name, usages, handler, collapsed, modalOpen = $bindable() }: Props = $props();

    let { icon: Icon, classes: iconClasses } = $derived(entryIcon(usages[0].entry));
    let usagesByMember = $derived(
        groupBy(usages, (u) => `${u.member!.name.string}${prettyMethodDesc(u.member!.type.string, true)}`)
    );
</script>

<button
    type="button"
    onclick={() => (collapsed = !collapsed)}
    class="flex items-center gap-2 px-2 py-1 text-sm font-medium text-left w-full hover:bg-accent/50 rounded-sm"
>
    <ChevronRight class={cn("text-muted-foreground h-3.5 w-3.5 transition-transform", !collapsed && "rotate-90")} />
    <Icon class={cn(iconClasses, "h-4 w-4 shrink-0")} />
    <span class="text-foreground truncate basis-full">{prettyInternalName(name)}</span>
    <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
        {usages.length}
    </span>
</button>

{#if !collapsed}
    {#each Array.from(usagesByMember.entries()) as [memberName, memberUsages]}
        {@const mods = parseModifiers(memberUsages[0].member.access)}
        {@const TypeIcon = mods.abstract ? AbstractMethod : Method}
        {@const ModifierIcon = accessIcon(mods)}

        <div class="ml-6 flex w-[calc(100%-1.5rem)] gap-1 px-2 py-1 text-left text-xs items-center">
            <div class="flex items-center gap-1">
                <TypeIcon finalMember={mods.final} staticMember={mods.static} class="size-4" />

                {#if ModifierIcon}
                    <ModifierIcon class="size-2.5" />
                {/if}
            </div>
            <span class="text-foreground truncate basis-full">{memberName}</span>
            <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
                {memberUsages.length}
            </span>
        </div>
        {#each memberUsages as usage}
            {@const entry =
                usage.member?.type?.string?.charAt(0) === "(" ? memberEntry(usage.entry, usage.member) : usage.entry}
            <button
                ondblclick={() => {
                    modalOpen = false;
                    handler.open(entry);
                }}
                class="hover:bg-accent/50 focus:bg-accent ml-10 flex w-[calc(100%-2.5rem)] flex-col gap-1 rounded-sm px-2 py-1 text-left transition-colors"
            >
                <code class="text-foreground truncate font-mono text-xs">
                    {usage.value}
                </code>
            </button>
        {/each}
    {/each}
{/if}
