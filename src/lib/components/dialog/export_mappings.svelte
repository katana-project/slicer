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
    import { Button } from "$lib/components/ui/button";
    import type { EventHandler } from "$lib/event";
    import type { ModalProps } from "svelte-modals";
    import { t } from "$lib/i18n";
    import { MappingType } from "$lib/reader/mappings";
    import { Select, SelectItem, SelectContent, SelectTrigger } from "$lib/components/ui/select";

    interface Props extends ModalProps {
        handler: EventHandler;
    }

    let { isOpen, close, handler }: Props = $props();
    let format = $state<MappingType>(MappingType.TINY_V2);

    const exportMappings = async (clipboard: boolean) => {
        isOpen = false;
        await handler.exportMappings(format, clipboard);
    };
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>{$t("dialog.export-mappings.title")}</DialogTitle>
            <DialogDescription>{$t("dialog.export-mappings.desc")}</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-2">
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="mapping-format" class="text-right">{$t("dialog.export-mappings.format")}</Label>
                <Select type="single" bind:value={format}>
                    <SelectTrigger id="mapping-format" class="col-span-3 w-full">
                        {$t(`dialog.export-mappings.format.${format}`)}
                    </SelectTrigger>
                    <SelectContent>
                        {#each Object.values(MappingType) as option}
                            <SelectItem value={option}>{$t(`dialog.export-mappings.format.${option}`)}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
            </div>
        </div>
        <DialogFooter>
            <Button variant="secondary" onclick={() => exportMappings(true)}>
                {$t("dialog.export-mappings.action.copy")}
            </Button>
            <Button onclick={() => exportMappings(false)}>
                {$t("dialog.export-mappings.action.download")}
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>
