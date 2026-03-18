<script lang="ts">
    import { ElementType, formatMod, escapeLiteral } from "@katana-project/asm/analysis/disasm";
    import RenameableText from "$lib/components/renameable_text.svelte";
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "$lib/components/ui/table";
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger,
    } from "$lib/components/ui/dropdown-menu";
    import { Code, Ellipsis, GitBranchPlus } from "@lucide/svelte";
    import { Button } from "$lib/components/ui/button";
    import { type ClassEntry, memberEntry } from "$lib/workspace";
    import { TabType } from "$lib/tab";
    import type { EventHandler } from "$lib/event";
    import { t } from "$lib/i18n";
    import type { RenameTarget } from "./types";
    import { canonicalizeDescriptor, mappedMethodName } from "$lib/components/pane/structure/model/rename";

    interface Props {
        entry: ClassEntry;
        handler: EventHandler;
        renaming: RenameTarget | null;
        renameValue: string;
        startRename: (target: RenameTarget, current: string) => void;
        commitRename: (value?: string) => void;
        cancelRename: () => void;
    }

    let {
        entry,
        handler,
        renaming,
        renameValue = $bindable(),
        startRename,
        commitRename,
        cancelRename,
    }: Props = $props();
    const node = $derived(entry.node);
</script>

<Table>
    <TableHeader class="bg-background sticky top-0 z-10 shadow-lg">
        <TableRow>
            <TableHead>{$t("pane.class.methods.index")}</TableHead>
            <TableHead>{$t("pane.class.methods.modifiers")}</TableHead>
            <TableHead>{$t("pane.class.methods.name")}</TableHead>
            <TableHead>{$t("pane.class.methods.type")}</TableHead>
            <TableHead></TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {#if node.methods.length > 0}
            {#each node.methods as method, i (i)}
                {@const mods = formatMod(method.access, ElementType.METHOD)}
                <TableRow>
                    <TableCell class="font-medium">{i}</TableCell>
                    <TableCell>
                        <span class="break-anywhere font-mono tracking-tight">
                            {mods || $t("pane.class.methods.none")}
                        </span>
                        ({method.access})
                    </TableCell>
                    <TableCell class="break-anywhere font-mono tracking-tight whitespace-normal">
                        {@const methodDesc = canonicalizeDescriptor(method.type.string)}
                        {@const methodDst = mappedMethodName(node.thisClass.nameEntry!.string, method.name.string, method.type.string)}
                        {@const isSpecialMethod = method.name.string === "<init>" || method.name.string === "<clinit>"}
                        {@const isRenamingMethod = renaming?.kind === "method" && renaming.name === method.name.string && renaming.desc === methodDesc}
                        <div class="group flex min-w-0 items-center gap-1">
                            <RenameableText
                                editing={isRenamingMethod}
                                bind:value={renameValue}
                                display={escapeLiteral(methodDst ?? method.name.string)}
                                placeholder={$t("pane.structure.rename.placeholder")}
                                title={$t("pane.structure.rename")}
                                textClass={methodDst ? "text-primary" : ""}
                                inputClass="min-w-0 flex-1 border-b border-primary bg-transparent font-mono text-xs outline-none"
                                stopPropagationOnStart={true}
                                showButton={!isSpecialMethod}
                                onStart={() =>
                                    startRename(
                                        { kind: "method", name: method.name.string, desc: methodDesc },
                                        methodDst ?? method.name.string
                                    )}
                                onCommit={commitRename}
                                onCancel={cancelRename}
                            />
                        </div>
                    </TableCell>
                    <TableCell class="break-anywhere font-mono tracking-tight whitespace-normal">
                        {method.type.string}
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                {#snippet child({ props })}
                                    <Button {...props} variant="ghost" size="icon" class="relative size-8 p-0">
                                        <span class="sr-only">Open menu</span>
                                        <Ellipsis class="size-4" />
                                    </Button>
                                {/snippet}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent class="min-w-48" align="end">
                                <DropdownMenuItem
                                    class="justify-between"
                                    onclick={() => handler.open(memberEntry(entry, method), TabType.CODE)}
                                >
                                    {$t("pane.class.menu.disasm")}
                                    <Code size={16} />
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    class="justify-between"
                                    onclick={() => handler.open(memberEntry(entry, method), TabType.GRAPH)}
                                >
                                    {$t("pane.class.menu.graph")}
                                    <GitBranchPlus size={16} />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            {/each}
        {:else}
            <TableRow>
                <TableCell colspan={5} class="h-24 text-center">{$t("pane.class.methods.no-methods")}</TableCell>
            </TableRow>
        {/if}
    </TableBody>
</Table>
