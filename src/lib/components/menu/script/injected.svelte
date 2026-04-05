<script lang="ts">
    import { type ProtoScript, ScriptState } from "$lib/script";
    import type { Option } from "@run-slicer/script";
    import ScriptOption from "./option.svelte";
    import { MenubarSeparator } from "$lib/components/ui/menubar";

    interface Props {
        id: string; // the ID of the menu (e.g. "menu.root", "menu.file")
        protos: ProtoScript[];
        top?: boolean; // whether this menu is a top-level menu
    }

    let { id, protos, top = false }: Props = $props();

    // find all options that specify this menu as their position
    let menuOptions = $derived.by(() => {
        const result: { proto: ProtoScript; option: Option }[] = [];
        for (const proto of protos) {
            if (proto.state !== ScriptState.LOADED) continue;

            const options = proto.script?.options?.filter((o) => o.position === id) ?? [];
            for (const option of options) {
                result.push({ proto, option });
            }
        }
        return result;
    });
</script>

{#if menuOptions.length > 0}
    {#if !top}
        <MenubarSeparator />
    {/if}
    {#each menuOptions as { proto, option } (option.id)}
        <ScriptOption {proto} {option} />
    {/each}
{/if}
