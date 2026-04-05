<script lang="ts">
    import type { Node } from "@katana-project/asm";
    import { ElementType, formatMod, escapeLiteral } from "@katana-project/asm/analysis/disasm";
    import RenameableText from "$lib/components/renameable_text.svelte";
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "$lib/components/ui/table";
    import { t } from "$lib/i18n";
    import type { RenameTarget } from "./types";
    import { canonicalizeDescriptor, mappedFieldName } from "$lib/components/pane/structure/model/rename";

    interface Props {
        node: Node;
        renaming: RenameTarget | null;
        renameValue: string;
        startRename: (target: RenameTarget, current: string) => void;
        commitRename: (value?: string) => void;
        cancelRename: () => void;
    }

    let {
        node,
        renaming,
        renameValue = $bindable(),
        startRename,
        commitRename,
        cancelRename,
    }: Props = $props();
</script>

<Table>
    <TableHeader class="bg-background sticky top-0 z-10 shadow-lg">
        <TableRow>
            <TableHead>{$t("pane.class.fields.index")}</TableHead>
            <TableHead>{$t("pane.class.fields.modifiers")}</TableHead>
            <TableHead>{$t("pane.class.fields.type")}</TableHead>
            <TableHead>{$t("pane.class.fields.name")}</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {#if node.fields.length > 0}
            {#each node.fields as field, i (i)}
                {@const mods = formatMod(field.access, ElementType.FIELD)}
                <TableRow>
                    <TableCell class="font-medium">{i}</TableCell>
                    <TableCell>
                        <span class="break-anywhere font-mono tracking-tight">
                            {mods || $t("pane.class.fields.none")}
                        </span>
                        ({field.access})
                    </TableCell>
                    <TableCell class="break-anywhere font-mono tracking-tight whitespace-normal">
                        {field.type.string}
                    </TableCell>
                    <TableCell class="break-anywhere font-mono tracking-tight whitespace-normal">
                        {@const fieldDesc = canonicalizeDescriptor(field.type.string)}
                        {@const fieldDst = mappedFieldName(node.thisClass.nameEntry!.string, field.name.string, field.type.string)}
                        {@const isRenamingField = renaming?.kind === "field" && renaming.name === field.name.string && renaming.desc === fieldDesc}
                        <div class="group flex min-w-0 items-center gap-1">
                            <RenameableText
                                editing={isRenamingField}
                                bind:value={renameValue}
                                display={escapeLiteral(fieldDst ?? field.name.string)}
                                placeholder={$t("pane.structure.rename.placeholder")}
                                title={$t("pane.structure.rename")}
                                textClass={fieldDst ? "text-primary" : ""}
                                inputClass="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                stopPropagationOnStart={true}
                                onStart={() =>
                                    startRename({ kind: "field", name: field.name.string, desc: fieldDesc }, fieldDst ?? field.name.string)}
                                onCommit={commitRename}
                                onCancel={cancelRename}
                            />
                        </div>
                    </TableCell>
                </TableRow>
            {/each}
        {:else}
            <TableRow>
                <TableCell colspan={4} class="h-24 text-center">{$t("pane.class.fields.no-fields")}</TableCell>
            </TableRow>
        {/if}
    </TableBody>
</Table>
