<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        title: string;
        count: number;
        children?: Snippet;
    }

    let { title, count, children }: Props = $props();
</script>

<div class="mb-3">
    <div class="mb-1 flex items-center gap-2 px-2">
        <span class="text-muted-foreground text-xs font-medium">{title}</span>
        <span class="bg-muted/50 text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px]">
            {count}
        </span>
    </div>
    {@render children?.()}
</div>
