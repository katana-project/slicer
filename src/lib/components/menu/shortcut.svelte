<script lang="ts">
    import { MenubarShortcut } from "$lib/components/ui/menubar";
    import { format, shortcutActions, type ShortcutActionType } from "$lib/shortcut";
    import { shortcutBindings } from "$lib/state";

    interface Props {
        action: ShortcutActionType;
    }

    let { action }: Props = $props();
    let definition = $derived($shortcutActions.find((candidate) => candidate.type === action));
    let binding = $derived($shortcutBindings[action] === undefined ? definition?.binding : $shortcutBindings[action]);
</script>

{#if binding}
    <MenubarShortcut>{format(binding.key, binding.modifier)}</MenubarShortcut>
{/if}
