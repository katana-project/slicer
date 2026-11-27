<script lang="ts">
    import type { Tab } from "$lib/tab";
    import { type Entry, transformEntry } from "$lib/workspace";
    import {
        ContextMenuCheckboxItem,
        ContextMenuContent,
        ContextMenuItem,
        ContextMenuLabel,
        ContextMenuSeparator,
        ContextMenuSub,
        ContextMenuSubContent,
        ContextMenuSubTrigger,
    } from "$lib/components/ui/context-menu";
    import { Binary, CaseSensitive, Code, CornerDownRight, TextSearch, TextWrap, Workflow } from "@lucide/svelte";
    import { type Language, toExtension } from "$lib/lang";
    import { Interpretation } from "./";
    import type { EventHandler } from "$lib/event";
    import { t } from "$lib/i18n";
    import type { EditorView } from "@codemirror/view";
    import { prettyInternalName, prettyJavaType, prettyMethodDesc } from "$lib/utils";
    import UsagesContent from "./usages.svelte";
    import type { CompositeResolver, ResolvedDeclaration, ResolvedType } from "@katana-project/laser";
    import { resolveDeclaration, resolveType } from "./resolver";
    import HierarchyContent from "./hierarchy.svelte";
    import { inheritanceGraph } from "$lib/workspace/analysis/graph";
    import { FloatingModal } from "$lib/components/ui/floating-modal";
    import { index } from "$lib/workspace/jdk";

    interface Props {
        view: EditorView | null;
        classes: Map<string, Entry>;
        tab: Tab;
        interpType: Interpretation;
        lang: Language;
        value: string;
        wrap: boolean;
        sizeLock: boolean;
        handler: EventHandler;
        resolver: CompositeResolver | null;
        mousePosition: { x: number; y: number };
    }

    let {
        view = $bindable(),
        classes,
        tab,
        interpType,
        lang,
        value,
        handler,
        wrap = $bindable(),
        sizeLock = $bindable(),
        resolver,
        mousePosition,
    }: Props = $props();
    let entry = $derived(tab.entry!);

    let resolved = $derived.by(() => {
        const coords = view?.posAndSideAtCoords(mousePosition);
        if (!coords || !resolver || (interpType !== Interpretation.CLASS && interpType !== Interpretation.TEXT)) {
            return null;
        }

        return resolver.resolveAt(coords.pos, coords.assoc);
    });

    let typeDetail = $derived(
        view && resolved?.category === "type" && (resolved as ResolvedType).kind !== "builtin"
            ? resolveType(resolved as ResolvedType, handler, view, classes, $index)
            : null
    );
    let declDetail = $derived(
        view && resolved?.category === "declaration"
            ? resolveDeclaration(resolved as ResolvedDeclaration, handler, view, classes)
            : null
    );

    let usagesOpen = $state(false);
    let usagesName = $derived(
        declDetail?.name
            ? `${declDetail.owner} ${declDetail.name} ${declDetail.descriptor}`
            : (typeDetail?.className ?? null)
    );
    let usagesPrettyName = $derived(
        declDetail?.name
            ? `${prettyInternalName(declDetail.owner!, true)}.${declDetail.name}${declDetail.type === "field" ? `: ${prettyJavaType(declDetail.descriptor!, true)}` : prettyMethodDesc(declDetail.descriptor!, true)}`
            : typeDetail?.className
              ? prettyInternalName(typeDetail.className)
              : null
    );

    let hierarchyOpen = $state(false);
    let hasGraphNode = $derived($inheritanceGraph[typeDetail?.className ?? ""] !== undefined);
</script>

<ContextMenuContent class="min-w-54">
    <ContextMenuLabel inset>{$t("pane.code.menu.reference")}</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuItem
        inset
        class="flex justify-between gap-5"
        disabled={!declDetail?.canOpen && !typeDetail?.canOpen}
        onclick={() => (declDetail ?? typeDetail)?.open()}
    >
        {$t("pane.code.menu.reference.declaration")}
        <CornerDownRight size={16} class="text-foreground" />
    </ContextMenuItem>
    <ContextMenuItem
        inset
        class="flex justify-between"
        disabled={!declDetail && !typeDetail}
        onclick={() => (usagesOpen = true)}
    >
        {$t("pane.code.menu.reference.usages")}
        <TextSearch size={16} />
    </ContextMenuItem>
    <ContextMenuItem
        inset
        class="flex justify-between gap-5"
        disabled={!typeDetail || !hasGraphNode}
        onclick={() => (hierarchyOpen = true)}
    >
        {$t("pane.code.menu.reference.implementations")}
        <Workflow size={16} class="text-foreground" />
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuLabel inset>{$t("pane.code.menu.editor")}</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem class="justify-between" bind:checked={wrap}>
        {$t("pane.code.menu.editor.wrap")}
        <TextWrap size={16} />
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem class="justify-between" bind:checked={sizeLock}>
        {$t("pane.code.menu.editor.lock-zoom")}
        <CaseSensitive size={16} />
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel inset>{$t("pane.code.menu.file")}</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuSub>
        <ContextMenuSubTrigger inset>{$t("pane.code.menu.file.export")}</ContextMenuSubTrigger>
        <ContextMenuSubContent class="min-w-48">
            <ContextMenuItem class="flex justify-between" onclick={() => handler.export([entry])}>
                {$t("pane.code.menu.file.export.raw")}
                <Binary size={16} />
            </ContextMenuItem>
            <ContextMenuItem
                class="flex justify-between"
                disabled={interpType === Interpretation.TEXT}
                onclick={() => handler.export([transformEntry(entry, toExtension(lang), value)])}
            >
                {$t("pane.code.menu.file.export.disasm")}
                <Code size={16} />
            </ContextMenuItem>
        </ContextMenuSubContent>
    </ContextMenuSub>
</ContextMenuContent>

<FloatingModal
    bind:open={usagesOpen}
    title={$t("modal.usages.title")}
    subtitle={$t(usagesName ? "modal.usages.subtitle" : "modal.usages.subtitle.none", usagesPrettyName ?? "")}
    initialPosition={mousePosition}
>
    <UsagesContent
        bind:open={usagesOpen}
        value={usagesName}
        owner={declDetail?.owner ?? typeDetail?.className ?? null}
        {classes}
        {handler}
    />
</FloatingModal>

<FloatingModal
    bind:open={hierarchyOpen}
    title={$t("modal.hierarchy.title")}
    subtitle={$t(
        typeDetail?.className ? "modal.hierarchy.subtitle" : "modal.hierarchy.subtitle.none",
        prettyInternalName(typeDetail?.className || "")
    )}
    initialPosition={mousePosition}
>
    <HierarchyContent bind:open={hierarchyOpen} name={typeDetail?.className ?? null} {handler} />
</FloatingModal>
