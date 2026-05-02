<script lang="ts">
    import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "$lib/components/ui/dialog";
    import { Label } from "$lib/components/ui/label";
    import { cn } from "$lib/components/utils";
    import type { ModalProps } from "svelte-modals";
    import { t } from "$lib/i18n";
    import { type ArchiveEntry, type ClassEntry, type Entry, EntryType, type MemberEntry } from "$lib/workspace";
    import { entryIcon } from "$lib/components/icons";
    import { humanSize, prettyInternalName, prettyMethodDesc } from "$lib/utils";
    import { Loading } from "$lib/components/ui/loading";
    import { DataType, type FileData, type ZipData } from "$lib/workspace/data";

    interface Props extends ModalProps {
        entry: Entry;
    }

    let { isOpen, close, entry }: Props = $props();

    let file = $derived((entry.data as FileData).file);
    let zipEntry = $derived((entry.data as ZipData).entry);

    let node = $derived((entry as ClassEntry).node);
    let member = $derived((entry as MemberEntry).member);
    let zip = $derived((entry as ArchiveEntry).archive);
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle class="break-anywhere flex flex-row items-center gap-2">
                {@const { icon: Icon, classes } = entryIcon(entry)}
                <Icon size={24} class={cn("min-w-6", classes)} />
                {entry.shortName}
            </DialogTitle>
            {#if entry.name !== entry.shortName}
                <DialogDescription class="break-anywhere">{entry.name}</DialogDescription>
            {/if}
        </DialogHeader>
        <div class="grid grid-cols-[auto_minmax(auto,1fr)] items-center gap-x-4 gap-y-2 py-1">
            {#await entry.data.blob().then( (b) => b.size, () => 0 )}
                <Loading center />
            {:then blobSize}
                <Label for="type" class="text-left">{$t("dialog.properties.type")}</Label>
                <div id="type" class="text-sm">{$t(`dialog.properties.type.${entry.type}`)}</div>

                <Label for="size" class="text-left">{$t("dialog.properties.size")}</Label>
                <div id="size" class="text-sm">{humanSize(blobSize)} ({blobSize})</div>

                {#if entry.data.type === DataType.FILE}
                    <Label for="last-modified" class="text-left">{$t("dialog.properties.last-modified")}</Label>
                    <div id="last-modified" class="text-sm">
                        {new Date(file.lastModified).toLocaleString()}
                    </div>
                {:else if entry.data.type === DataType.ZIP}
                    <Label for="last-modified" class="text-left">{$t("dialog.properties.last-modified")}</Label>
                    <div id="last-modified" class="text-sm">
                        {zipEntry.lastModDate.toLocaleString()}
                    </div>

                    <Label for="compressed-size" class="text-left">{$t("dialog.properties.compressed-size")}</Label>
                    <div id="compressed-size" class="text-sm">
                        {humanSize(zipEntry.compressedSize)} ({zipEntry.compressedSize})
                    </div>

                    <Label for="compression-method" class="text-left">
                        {$t("dialog.properties.compression-method")}
                    </Label>
                    <div id="compression-method" class="text-sm">
                        {zipEntry.compressionMethod}
                    </div>

                    <Label for="crc32" class="text-left">{$t("dialog.properties.crc32")}</Label>
                    <div id="crc32" class="text-sm">
                        {zipEntry.crc32}
                    </div>
                {/if}
                {#if entry.type === EntryType.CLASS || entry.type === EntryType.MEMBER}
                    <Label for="class-name" class="text-left">{$t("dialog.properties.class-name")}</Label>
                    <div id="class-name" class="text-sm">
                        {prettyInternalName(node.thisClass.nameEntry?.string || "")}
                    </div>
                    {#if entry.type === EntryType.MEMBER}
                        <Label for="member-desc" class="text-left">{$t("dialog.properties.member-desc")}</Label>
                        <div id="member-desc" class="text-sm">
                            {member.name.string}{prettyMethodDesc(member.type.string, true)}
                        </div>
                    {/if}
                {:else if entry.type === EntryType.ARCHIVE}
                    <Label for="archive-entries" class="text-left">{$t("dialog.properties.archive-entries")}</Label>
                    <div id="archive-entries" class="text-sm">{zip.entries.length}</div>
                {/if}
            {/await}
        </div>
    </DialogContent>
</Dialog>
