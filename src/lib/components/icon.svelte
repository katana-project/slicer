<script lang="ts">
    import type { Icon as ScriptIcon } from "@run-slicer/script";
    import { cn } from "$lib/components/utils";
    import type { Icon, StyledIcon } from "$lib/components/icons";
    import type { IconProps } from "@lucide/svelte";

    interface Props extends IconProps {
        icon: Icon | StyledIcon | ScriptIcon;
    }

    let { icon, ...rest }: Props = $props();
    let { class: className, size = 16 } = $derived(rest);
</script>

{#if "type" in icon}
    {#if icon.type === "url"}
        <img src={icon.value} alt="" class={className} style="width: {size}px; height: {size}px;" />
    {:else if icon.type === "html"}
        <div class={cn("flex items-center justify-center", className)} style="width: {size}px; height: {size}px;">
            {@html icon.value}
        </div>
    {/if}
{:else if "icon" in icon}
    {@const { icon: IconComponent, classes } = icon}
    <IconComponent {...rest} class={cn(className, classes)} />
{:else}
    {@const IconComponent = icon}
    <IconComponent {...rest} />
{/if}
