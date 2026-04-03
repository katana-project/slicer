<script lang="ts">
    import type { Icon as ScriptIcon } from "@run-slicer/script";
    import { cn } from "$lib/components/utils";

    interface Props {
        icon: ScriptIcon;
        class?: string;
        size?: number;
    }

    let { icon, class: className = "", size = 16 }: Props = $props();
</script>

{#if icon.type === "url"}
    <img src={icon.value} alt="" class={className} style="width: {size}px; height: {size}px;" />
{:else if icon.type === "html"}
    <div class={cn("flex items-center justify-center", className)} style="width: {size}px; height: {size}px;">
        {@html icon.value}
    </div>
{/if}
