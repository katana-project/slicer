<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="bg-pane-header z-10 flex h-8 min-h-8 w-full scrollbar-none gap-0.5 overflow-x-auto">
    {@render children?.()}
</div>
