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
    import { cn } from "$lib/components/utils";

    interface Props extends ModalProps {
        handler: EventHandler;
    }

    let { isOpen, close, handler }: Props = $props();

    let value = $state("");
    let invalid = $state(false);
    const loadMappings = async () => {
        const value0 = value.trim();
        if (!value0) {
            invalid = true;
            return;
        }

        isOpen = false;
        await handler.loadRemoteMappings(value0);
    };
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>{$t("dialog.load-mappings.title")}</DialogTitle>
            <DialogDescription>{@html $t("dialog.load-mappings.desc")}</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-2">
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="url" class="text-left">
                    {$t("dialog.load-mappings.url")}
                </Label>
                <Input
                    id="url"
                    placeholder="https://..."
                    class={cn("col-span-3", !invalid || "border-destructive ring-offset-destructive")}
                    bind:value
                    onchange={() => (invalid = false)}
                    onkeydown={(e) => e.key === "Enter" && loadMappings()}
                />
            </div>
        </div>
        <DialogFooter>
            <Button type="submit" onclick={loadMappings}>
                {$t("dialog.load-mappings.action.confirm")}
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>
