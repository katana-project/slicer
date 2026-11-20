<script lang="ts">
    import { Dialog, DialogContent, DialogHeader, DialogTitle } from "$lib/components/ui/dialog";
    import type { ModalProps } from "svelte-modals";
    import { t } from "$lib/i18n";
    import { changelog } from "$lib/components/pane/welcome/welcome.svelte";

    let { isOpen, close }: ModalProps = $props();
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent class="flex flex-col justify-between max-w-1/2!">
        <DialogHeader>
            <DialogTitle>
                {$t("dialog.changelog.title")}
            </DialogTitle>
        </DialogHeader>
        <div class="flex flex-col gap-4 overflow-x-auto max-h-[60vh]">
            {#each changelog as entry}
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">{new Date(entry.date).toLocaleDateString()}</p>
                    <p class="text-sm break-anywhere">
                        {#if entry.url}
                            <a
                                href={entry.url}
                                target="_blank"
                                class="text-blue-500 hover:text-blue-600 hover:underline"
                            >
                                {@html entry.summary}
                            </a>
                        {:else}
                            {@html entry.summary}
                        {/if}
                    </p>
                    {#if entry.description}
                        <p class="text-muted-foreground text-xs break-anywhere">
                            {@html entry.description}
                        </p>
                    {/if}
                </div>
            {/each}
        </div>
    </DialogContent>
</Dialog>
