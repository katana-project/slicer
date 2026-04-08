<script lang="ts">
    import type { Icon } from "$lib/components/icons";
    import { cn } from "$lib/components/utils";

    interface Props {
        icon: Icon;
        label: string;
        onclick?: (e: MouseEvent) => void;

        // radio buttons
        value?: string;
        group?: string;
    }

    let { icon: IconComponent, label, value, group = $bindable(), onclick }: Props = $props();
</script>

<button
    class={cn("rounded p-1", group && group === value && "bg-accent text-accent-foreground")}
    title={label}
    aria-label={label}
    onclick={(e) => {
        onclick?.(e);
        if (value) {
            group = value;
        }
    }}
>
    <IconComponent size={14} class="hover:text-muted-foreground min-w-3.5" />
</button>
