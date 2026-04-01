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
    import { Switch } from "$lib/components/ui/switch";
    import type { ModalProps } from "svelte-modals";
    import { t } from "$lib/i18n";

    interface Props extends ModalProps {
        handler: EventHandler;
    }

    let { isOpen, close, handler }: Props = $props();

    let files: FileList | undefined = $state();
    let enabled = $state(true);
    const loadScript = async () => {
        const file = files && files.length > 0 ? files[0] : undefined;
        if (!file) {
            return;
        }

        isOpen = false;
        await handler.addScript(file, enabled);
    };
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>{$t("dialog.script-load-file.title")}</DialogTitle>
            <DialogDescription>{$t("dialog.script-load-file.desc")}</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-2">
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="file" class="text-left">
                    {$t("dialog.script-load-file.file")}
                </Label>
                <Input id="file" type="file" bind:files accept=".js,.cjs,.mjs" class="col-span-3 w-full" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="enabled" class="text-left">{$t("dialog.script-load-file.enable")}</Label>
                <Switch id="enabled" class="col-span-3" bind:checked={enabled} />
            </div>
        </div>
        <DialogFooter>
            <Button type="submit" onclick={loadScript}>{$t("dialog.script-load-file.action.confirm")}</Button>
        </DialogFooter>
    </DialogContent>
</Dialog>
