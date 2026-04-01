<script lang="ts">
    import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
        DialogTitle,
    } from "$lib/components/ui/dialog";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import type { EventHandler } from "$lib/event";
    import type { ModalProps } from "svelte-modals";
    import { t } from "$lib/i18n";
    import { fileData } from "$lib/workspace/data";
    import { namespaces } from "$lib/reader/mappings";
    import { Select, SelectItem, SelectContent, SelectTrigger } from "$lib/components/ui/select";

    interface Props extends ModalProps {
        handler: EventHandler;
    }

    let { isOpen, close, handler }: Props = $props();

    let files: FileList | undefined = $state();
    let nses: string[] = $state([]);
    $effect(() => {
        if (files && files.length > 0) {
            files[0].text().then((txt) => (nses = namespaces(txt)));
        }
    });

    let src = $state("default-src");
    let dst = $state("default-dst");
    const loadMappings = async () => {
        if (!files || files.length === 0) {
            return;
        }

        isOpen = false;
        await handler.loadMappings(
            fileData(files[0]),
            src === "default-src" ? undefined : src,
            dst === "default-dst" ? undefined : dst
        );
    };
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>{$t("dialog.load-mappings.title")}</DialogTitle>
            <DialogDescription>{$t("dialog.load-mappings.desc")}</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-2">
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="file" class="text-left leading-tight">
                    {$t("dialog.load-mappings.file")}
                </Label>
                <Input
                    id="file"
                    type="file"
                    class="col-span-3"
                    multiple={false}
                    accept=".txt,.tiny,.srg,.tsrg,.csrg"
                    bind:files
                    onkeydown={(e) => e.key === "Enter" && loadMappings()}
                />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="src-ns" class="text-left leading-tight">{$t("dialog.load-mappings.src-ns")}</Label>
                <Select type="single" bind:value={src}>
                    <SelectTrigger id="src-ns" class="col-span-3 w-full">
                        {#if src !== "default-src"}
                            {src}
                        {:else}
                            <span class="text-muted-foreground">
                                {$t("dialog.load-mappings.src-ns.placeholder")}
                            </span>
                        {/if}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="default-src">
                            <span class="text-muted-foreground">
                                {$t("dialog.load-mappings.src-ns.placeholder")}
                            </span>
                        </SelectItem>
                        {#each nses as ns}
                            <SelectItem value={ns}>{ns}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="dst-ns" class="text-left leading-tight">{$t("dialog.load-mappings.dst-ns")}</Label>
                <Select type="single" bind:value={dst}>
                    <SelectTrigger id="dst-ns" class="col-span-3 w-full">
                        {#if dst !== "default-dst"}
                            {dst}
                        {:else}
                            <span class="text-muted-foreground">
                                {$t("dialog.load-mappings.dst-ns.placeholder")}
                            </span>
                        {/if}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="default-dst">
                            <span class="text-muted-foreground">
                                {$t("dialog.load-mappings.dst-ns.placeholder")}
                            </span>
                        </SelectItem>
                        {#each nses as ns}
                            <SelectItem value={ns}>{ns}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
            </div>
        </div>
        <DialogFooter>
            <Button type="submit" onclick={loadMappings} disabled={!files || files.length === 0}>
                {$t("dialog.load-mappings.action.confirm")}
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>
