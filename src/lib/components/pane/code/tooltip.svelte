<script lang="ts">
    import type { TooltipProps } from "$lib/components/editor/editor.svelte";
    import type { CompositeResolver, ResolvedDeclaration, ResolvedType } from "@katana-project/laser";
    import type { EventHandler } from "$lib/event";
    import type { Entry } from "$lib/workspace";
    import { cn } from "$lib/components/utils";
    import { resolveDeclaration, resolveType } from "$lib/components/pane/code/resolver";
    import { prettyInternalName, prettyJavaType, prettyMethodDesc } from "$lib/utils";
    import { t } from "$lib/i18n";
    import { index } from "$lib/workspace/jdk";

    interface Props extends TooltipProps {
        resolver: CompositeResolver | null;
        classes: Map<string, Entry>;
        handler: EventHandler;
    }

    let { view, pos, side, resolver, classes, handler }: Props = $props();

    let resolution = $derived(resolver?.resolveAt(pos, side));
    let {
        className,
        packageName,
        simpleName,
        open: openClass,
    } = $derived(resolveType((resolution ?? null) as ResolvedType | null, handler, view, classes, $index));
    let {
        type,
        name,
        owner,
        descriptor,
        open: openMember,
    } = $derived(resolveDeclaration((resolution ?? null) as ResolvedDeclaration, handler, view, classes));
</script>

{#if resolution?.category === "type" && className && (resolution as ResolvedType)?.kind !== "builtin"}
    <div
        class="text-card-foreground bg-card animate-in fade-in-0 zoom-in-95 border-border z-50 flex max-w-md cursor-pointer flex-col rounded-sm border shadow-lg"
        onclick={openClass}
        onkeydown={openClass}
        role="button"
        tabindex="0"
    >
        <div class="border-border hover:bg-accent-foreground/5 border-b px-3 py-2 transition-colors">
            <div class="flex flex-col gap-1">
                <div class="text-foreground break-anywhere text-sm font-semibold">
                    {prettyInternalName(simpleName || "")}
                </div>

                <div class={cn("text-muted-foreground break-anywhere text-[11px]", !packageName && "italic")}>
                    {packageName ? prettyInternalName(packageName) : $t("pane.code.tooltip.default-package")}
                </div>
            </div>
        </div>
    </div>
{:else if resolution?.category === "declaration" && name && descriptor && owner}
    <div
        class="text-card-foreground bg-card animate-in fade-in-0 zoom-in-95 border-border z-50 flex max-w-md cursor-pointer flex-col rounded-sm border shadow-lg"
        onclick={openMember}
        onkeydown={openMember}
        role="button"
        tabindex="0"
    >
        <div class="border-border hover:bg-accent-foreground/5 border-b px-3 py-2 transition-colors">
            <div class="flex flex-col gap-1">
                <div class="text-foreground break-anywhere text-sm font-semibold">
                    {name}
                </div>

                <div class="text-muted-foreground break-anywhere text-[11px]">
                    {type === "method" ? prettyMethodDesc(descriptor, true) : prettyJavaType(descriptor)}
                </div>
                <div class={cn("text-muted-foreground break-anywhere text-[11px]", !packageName && "italic")}>
                    {prettyInternalName(owner ?? "")}
                </div>
            </div>
        </div>
    </div>
{/if}
