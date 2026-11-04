<script lang="ts">
    import { FloatingModal, type ModalPosition } from "$lib/components/ui/floating-modal";
    import { Label } from "$lib/components/ui/label";
    import type { ModalProps } from "svelte-modals";
    import { t } from "$lib/i18n";
    import { type ArchiveEntry, type ClassEntry, type Entry, EntryType, type MemberEntry } from "$lib/workspace";
    import { humanSize, prettyInternalName, prettyMethodDesc } from "$lib/utils";
    import { Loading } from "$lib/components/ui/loading";
    import { DataType, unwrapTransforms, type ZipData } from "$lib/workspace/data";

    interface Props extends ModalProps {
        entry: Entry;
        initialPosition?: ModalPosition;
    }

    let { isOpen, close, entry, initialPosition }: Props = $props();
    let open = $state(isOpen);
    $effect(() => {
        if (!open) {
            close();
        }
    });

    // transforms are not relevant for properties, so we can unwrap them to get the original data
    let data = $derived(unwrapTransforms(entry.data));

    let zipEntry = $derived((data as ZipData).entry);

    let node = $derived((entry as ClassEntry).node);
    let member = $derived((entry as MemberEntry).member);
    let zip = $derived((entry as ArchiveEntry).archive);
</script>

<FloatingModal
    bind:open
    title={entry.shortName}
    subtitle={entry.name !== entry.shortName ? entry.name : undefined}
    {initialPosition}
>
    <div class="grid grid-cols-[auto_minmax(auto,1fr)] items-center gap-x-4 gap-y-2 p-4">
        {#await data.blob().then( (b) => b.size, () => 0 )}
            <Loading center />
        {:then blobSize}
            <Label for="type" class="text-left">{$t("dialog.properties.type")}</Label>
            <div id="type" class="text-sm">{$t(`dialog.properties.type.${entry.type}`)}</div>

            <Label for="size" class="text-left">{$t("dialog.properties.size")}</Label>
            <div id="size" class="text-sm">{humanSize(blobSize)} ({blobSize})</div>

            {#if data.lastModified}
                <Label for="last-modified" class="text-left">{$t("dialog.properties.last-modified")}</Label>
                <div id="last-modified" class="text-sm">
                    {data.lastModified.toLocaleString()}
                </div>
            {/if}

            {#if data.type === DataType.ZIP}
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
                <div id="class-name" class="text-sm break-anywhere">
                    {prettyInternalName(node.thisClass.nameEntry?.string || "")}
                </div>
                {#if entry.type === EntryType.MEMBER}
                    <Label for="member-desc" class="text-left">{$t("dialog.properties.member-desc")}</Label>
                    <div id="member-desc" class="text-sm break-anywhere">
                        {member.name.string}{prettyMethodDesc(member.type.string, true)}
                    </div>
                {/if}
            {:else if entry.type === EntryType.ARCHIVE}
                <Label for="archive-entries" class="text-left">{$t("dialog.properties.archive-entries")}</Label>
                <div id="archive-entries" class="text-sm">{zip.entries.length}</div>
            {/if}
        {/await}
    </div>
</FloatingModal>
