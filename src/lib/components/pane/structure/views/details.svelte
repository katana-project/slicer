<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Search } from "@lucide/svelte";
    import { type ClassEntry, type Entry } from "$lib/workspace";
    import { cn } from "$lib/components/utils";
    import { fields, methods, innerClasses, abstractionInfo } from "../model/util";
    import { partition } from "$lib/utils";
    import { mappings } from "$lib/workspace/analysis/mapping";
    import { t } from "$lib/i18n";
    import type { EventHandler } from "$lib/event";
    import StructureHeader from "../sections/header.svelte";
    import FieldsSection from "../sections/fields_section.svelte";
    import MethodsSection from "../sections/methods_section.svelte";
    import InnerClassesSection from "../sections/inner_classes_section.svelte";
    import type { RenameTarget } from "../model/types";
    import { entryIcon } from "$lib/components/icons";
    import {
        canonicalizeClassName,
        replaceClassPackage,
        replaceClassSimpleName,
        removeClassChainAliases,
        setLatestFieldMapping,
        setLatestMethodMapping,
        splitInternalName,
    } from "../model/rename";

    interface Props {
        handler: EventHandler;
        classes: Map<string, Entry>;
        currentEntry: ClassEntry;
        showSummary: boolean;
    }

    let { handler, classes, currentEntry, showSummary = $bindable() }: Props = $props();

    let query = $state("");

    let renaming: RenameTarget | null = $state(null);
    let renameValue = $state("");

    const focusInput = (node: HTMLInputElement): void => {
        node.focus();
        node.select();
    };

    const startRename = (target: RenameTarget, current: string): void => {
        renaming = target;
        renameValue = current;
    };

    const cancelRename = (): void => {
        renaming = null;
    };

    const commitRename = (committedValue?: string): void => {
        if (!renaming || !currentNode) {
            renaming = null;
            return;
        }

        const internalName = canonicalizeClassName(currentNode.thisClass.nameEntry!.string);
        const trimmed = (committedValue ?? renameValue).trim();

        mappings.update(($m) => {
            if (renaming!.kind === "package") {
                const cls = $m.get(internalName);
                const nextName = replaceClassPackage(cls.dst ?? internalName, trimmed.replaceAll(".", "/"));
                cls.dst = nextName === internalName ? undefined : nextName;
                removeClassChainAliases(internalName);
            } else if (renaming!.kind === "class") {
                const cls = $m.get(internalName);
                const [, srcSimple] = splitInternalName(internalName);
                const nextName = replaceClassSimpleName(cls.dst ?? internalName, trimmed || srcSimple);
                cls.dst = nextName === internalName ? undefined : nextName;
                removeClassChainAliases(internalName);
            } else if (renaming!.kind === "field") {
                setLatestFieldMapping(internalName, renaming!.name, renaming!.desc, trimmed || undefined);
            } else if (renaming!.kind === "method") {
                setLatestMethodMapping(internalName, renaming!.name, renaming!.desc, trimmed || undefined);
            } else if (renaming!.kind === "inner") {
                const srcInnerName = canonicalizeClassName(renaming!.internalName);
                const cls = $m.get(srcInnerName);
                if (trimmed) {
                    const parts = (cls.dst ?? srcInnerName).split("/");
                    const lastName = parts[parts.length - 1];
                    const dollarIdx = lastName.lastIndexOf("$");
                    parts[parts.length - 1] =
                        dollarIdx !== -1 ? lastName.substring(0, dollarIdx + 1) + trimmed : trimmed;
                    cls.dst = parts.join("/");
                } else {
                    cls.dst = undefined;
                }

                removeClassChainAliases(srcInnerName);
            }
            return $m;
        });

        renaming = null;
    };

    let currentNode = $derived(currentEntry.node!);

    let [packageName, simpleName] = $derived.by(() => {
        const nameEntry = currentNode?.thisClass?.nameEntry;
        if (!nameEntry) {
            return [null, null];
        }

        const parts = nameEntry.string.split("/");
        return [parts.slice(0, parts.length - 1).join("."), parts.pop() ?? null];
    });

    const currentEntryIcon = $derived(entryIcon(currentEntry));

    let absData = $derived(currentNode ? abstractionInfo(currentNode) : null);
    let fieldData = $derived(currentNode ? fields(currentNode) : []);
    let filteredFieldData = $derived(
        fieldData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );
    let innerClassData = $derived(currentNode ? innerClasses(currentNode, classes) : []);
    let filteredInnerClassData = $derived(
        innerClassData.filter((cls) => !cls.name || cls.name.toLowerCase().includes(query.toLowerCase()))
    );

    let allMethodData = $derived(currentEntry ? methods(currentEntry) : []);
    let [constructorData, nonConstructors] = $derived(partition(allMethodData, (m) => m.constructor));
    let filteredConstructorData = $derived(
        constructorData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );

    let [initializerData, methodData] = $derived(partition(nonConstructors, (m) => m.initializer));
    let filteredInitializerData = $derived(
        initializerData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );
    let filteredMethodData = $derived(
        methodData.filter((member) => member.signature.toLowerCase().includes(query.toLowerCase()))
    );
    let hasSuperData = $derived(!!(absData && (absData.superClass || absData.implementations.length > 0)));
</script>

<div class="flex h-full w-full flex-col">
    <StructureHeader
        {handler}
        {classes}
        {currentNode}
        {packageName}
        {simpleName}
        {hasSuperData}
        absData={absData ?? { implementations: [] }}
        {renaming}
        bind:renameValue
        {startRename}
        {commitRename}
        {cancelRename}
        {canonicalizeClassName}
        bind:showSummary
    >
        {#snippet entryIcon()}
            <currentEntryIcon.icon class={cn(currentEntryIcon.classes, "h-4 w-4 shrink-0")} />
        {/snippet}
    </StructureHeader>

    <div class="border-b p-3">
        <div class="relative">
            <Search class="text-muted-foreground absolute top-2 left-2 h-4 w-4" />
            <Input bind:value={query} placeholder={$t("pane.structure.search.placeholder")} class="h-8 pl-8" />
        </div>
    </div>

    <div class="flex-1 overflow-y-auto">
        <div class="p-2">
            <FieldsSection
                {filteredFieldData}
                totalFieldCount={fieldData.length}
                {currentNode}
                {renaming}
                bind:renameValue
                {startRename}
                {commitRename}
                {cancelRename}
            />

            <MethodsSection
                {handler}
                {filteredInitializerData}
                totalInitializerCount={initializerData.length}
                {filteredConstructorData}
                totalConstructorCount={constructorData.length}
                {filteredMethodData}
                totalMethodCount={methodData.length}
                {currentNode}
                {renaming}
                bind:renameValue
                {startRename}
                {commitRename}
                {cancelRename}
            />

            <InnerClassesSection
                {handler}
                {filteredInnerClassData}
                totalInnerClassCount={innerClassData.length}
                {renaming}
                bind:renameValue
                {startRename}
                {commitRename}
                {cancelRename}
            />

            {#if filteredMethodData.length === 0 && filteredConstructorData.length === 0 && filteredInitializerData.length === 0 && filteredFieldData.length === 0 && filteredInnerClassData.length === 0}
                <div class="text-muted-foreground py-8 text-center text-sm">
                    {$t("pane.structure.search.no-results")}
                </div>
            {/if}
        </div>
    </div>
</div>
