<script lang="ts">
    import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "$lib/components/ui/tooltip";
    import { Label } from "$lib/components/ui/label";
    import { CircleQuestionMark } from "@lucide/svelte";
    import { t, type TranslationKey } from "$lib/i18n";
    import { cn } from "$lib/components/utils";

    interface Props {
        for: string;
        collapsed?: boolean;
        danger?: boolean;
        textKey: TranslationKey;
        descKey?: TranslationKey;
    }

    let { for: forId, collapsed = false, danger, textKey, descKey }: Props = $props();
</script>

{#if descKey}
    {#if collapsed}
        <TooltipProvider>
            <div class="flex items-center gap-2">
                <Label for={forId}>{$t(textKey)}</Label>
                <Tooltip>
                    <TooltipTrigger class="cursor-pointer">
                        <CircleQuestionMark class={cn("h-4 w-4 text-muted-foreground", danger && "text-destructive")} />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        {@html $t(descKey)}
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    {:else}
        <div class="flex flex-col gap-1">
            <Label for={forId}>{$t(textKey)}</Label>
            <p class={cn("text-xs text-muted-foreground", danger && "text-destructive")}>
                {@html $t(descKey)}
            </p>
        </div>
    {/if}
{:else}
    <Label for={forId}>{$t(textKey)}</Label>
{/if}
