<script lang="ts" module>
    type Sponsor = { name: string; logo: string; url: string };

    export const SPONSORS: Sponsor[] = [
        {
            name: "Modrinth",
            logo: "https://cdn.modrinth.com/logo.svg",
            url: "https://modrinth.com",
        },
    ];
</script>

<script lang="ts">
    import { Dialog, DialogContent } from "$lib/components/ui/dialog";
    import type { ModalProps } from "svelte-modals";
    import { t } from "$lib/i18n";

    let { isOpen, close }: ModalProps = $props();

    let imageId = $state(Math.floor(Math.random() * 4));
    const changeImage = () => {
        imageId++;
        if (imageId > 3) {
            imageId = 0; // wrap around
        }
    };

    const commit = import.meta.env.WORKERS_CI_COMMIT_SHA || import.meta.env.GITHUB_SHA || "0".repeat(40);
    const branch = import.meta.env.WORKERS_CI_BRANCH || import.meta.env.GITHUB_REF_NAME || "unknown";
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent class="flex flex-col justify-between">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <a href="https://www.pixiv.net/en/artworks/93602463">
                    <img src={`/assets/fumo/${imageId}.png`} alt="Artwork" title="by horeyearth" />
                </a>
            </div>
            <div>
                <p class="text-2xl">
                    <button class="mr-1 cursor-help font-semibold" onclick={changeImage}>
                        {$t("dialog.about.brand")}
                    </button>
                </p>
                <p class="text-sm">
                    {#if import.meta.env.DEV}
                        {$t("dialog.about.build.dev")}
                    {:else}
                        <!-- this is ugly, but I don't want a space before the comma -->
                        <a
                            href={`https://github.com/katana-project/slicer/commit/${commit}`}
                            target="_blank"
                            class="hover:text-blue-700 hover:underline">{commit.substring(0, 7)}</a
                        >{$t("dialog.about.build.branch", branch)}
                    {/if}
                </p>
                <p class="mt-6 font-mono text-sm">
                    {navigator.userAgent}
                </p>
                <div class="mt-2 flex flex-col gap-1">
                    <div class="text-sponsor-pink text-sm">
                        {$t("dialog.about.sponsored-by")}
                    </div>
                    <div class="flex flex-row gap-1">
                        {#each SPONSORS as { name, logo, url }}
                            <a href={url} target="_blank" title={name}>
                                <img src={logo} alt={name} class="h-8 w-8 rounded-full" />
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <p class="text-muted-foreground mt-2 text-center text-sm">
            {@html $t("dialog.about.footer")}
        </p>
    </DialogContent>
</Dialog>
