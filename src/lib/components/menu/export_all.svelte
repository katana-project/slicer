<script lang="ts">
    import { MenubarItem, MenubarSub, MenubarSubContent, MenubarSubTrigger } from "$lib/components/ui/menubar";
    import { Binary, Coffee } from "@lucide/svelte";
    import { t } from "$lib/i18n";
    import { classAliasEntry, type ClassEntry, type Entry, EntryType } from "$lib/workspace";
    import type { Disassembler } from "$lib/disasm";
    import type { EventHandler } from "$lib/event";

    interface Props {
        entries: Entry[];
        classes: Entry[];
        disasms: Disassembler[];
        handler: EventHandler;
        classesOnly?: boolean;
    }

    let { entries, classes, disasms, handler, classesOnly = false }: Props = $props();

    const exportEntries = async (disasm?: Disassembler) => {
        const toExport = classesOnly
            ? classes.filter((e) => e.type === EntryType.CLASS).map((e) => classAliasEntry(e as ClassEntry))
            : entries;

        await handler.export(toExport, disasm);
    };
</script>

<MenubarSubContent class="min-w-[12rem]" align="start">
    <MenubarItem class="justify-between" onclick={() => exportEntries()}>
        {$t("menu.file.export-all.raw")}
        <Binary size={16} />
    </MenubarItem>
    <MenubarSub>
        <MenubarSubTrigger disabled={classes.length === 0}>
            {$t("menu.file.export-all.disasm")}
        </MenubarSubTrigger>
        <MenubarSubContent class="min-w-[12rem]" align="start">
            {#each disasms as dism}
                <MenubarItem class="justify-between" onclick={() => exportEntries(dism)}>
                    {dism.name || dism.id}
                    {#if dism.language() === "java"}
                        <Coffee size={16} class="text-red-500" />
                    {/if}
                </MenubarItem>
            {/each}
        </MenubarSubContent>
    </MenubarSub>
</MenubarSubContent>
