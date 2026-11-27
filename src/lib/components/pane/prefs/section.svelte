<script lang="ts">
    import type { Snippet } from "svelte";
    import { cn } from "$lib/components/utils";
    import { t, type TranslationKey } from "$lib/i18n";
    import type { Icon } from "$lib/components/icons";

    interface Props {
        id: string;
        icon?: Icon;
        labelKey: TranslationKey;
        small?: boolean;
        children?: Snippet;
    }

    let { id, icon: SectionIcon, labelKey, small, children }: Props = $props();
</script>

<div class="space-y-4" data-section={id}>
    <h2 class={cn("flex flex-row gap-2 items-center border-b pb-2 font-semibold", small || "text-lg")}>
        {#if SectionIcon}<SectionIcon size={20} />{/if}
        {$t(labelKey)}
    </h2>
    <div class="grid gap-4">
        {@render children?.()}
    </div>
</div>
