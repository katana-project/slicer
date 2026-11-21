<script lang="ts">
    import { Switch } from "$lib/components/ui/switch";
    import { analysisBackground, analysisJdkVersion } from "$lib/state";
    import Section from "../section.svelte";
    import Label from "../label.svelte";
    import type { PaneProps } from "$lib/components/pane";
    import { SquareActivity } from "@lucide/svelte";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
    import { isVersionSupported, SUPPORTED_VERSIONS } from "$lib/workspace/jdk";
    import { t } from "$lib/i18n";

    let _: PaneProps = $props();

    let selectedVersion = $state<string>($analysisJdkVersion.toString());
    $effect(() => {
        $analysisJdkVersion = parseInt(selectedVersion);
    });
</script>

<Section id="analysis" icon={SquareActivity} labelKey="pane.prefs.section.analysis">
    <div class="grid min-h-10 grid-cols-[minmax(auto,1fr)_auto] items-center gap-4">
        <Label
            for="analysisBackground"
            textKey="pane.prefs.analysis.background"
            descKey="pane.prefs.analysis.background.desc"
        />
        <Switch id="analysisBackground" bind:checked={$analysisBackground} />
    </div>
    <div class="grid min-h-10 grid-cols-[minmax(auto,1fr)_auto] items-center gap-4">
        <Label
            for="analysisJdkVersion"
            textKey="pane.prefs.analysis.jdk-version"
            descKey="pane.prefs.analysis.jdk-version.desc"
        />
        <Select type="single" bind:value={selectedVersion}>
            <SelectTrigger id="analysisJdkVersion" class="w-48">
                {$t(isVersionSupported($analysisJdkVersion) ? selectedVersion : "pane.prefs.analysis.jdk-version.none")}
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="-1" label={$t("pane.prefs.analysis.jdk-version.none")}>
                    {$t("pane.prefs.analysis.jdk-version.none")}
                </SelectItem>
                {#each SUPPORTED_VERSIONS as version}
                    <SelectItem value={version.toString()} label={version.toString()}>{version}</SelectItem>
                {/each}
            </SelectContent>
        </Select>
    </div>
</Section>
