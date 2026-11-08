<script lang="ts">
    import { Slider } from "$lib/components/ui/slider";
    import { Switch } from "$lib/components/ui/switch";
    import { editorWrap, editorTextSize, editorTextSizeSync, editorTextSizeLock } from "$lib/state";
    import Section from "../section.svelte";
    import Label from "../label.svelte";
    import type { PaneProps } from "$lib/components/pane";
    import { Type } from "@lucide/svelte";

    let _: PaneProps = $props();
</script>

<Section id="editor" icon={Type} labelKey="pane.prefs.section.editor">
    <div class="grid min-h-10 grid-cols-[minmax(auto,1fr)_auto] items-center gap-4">
        <Label for="editorWrap" textKey="pane.prefs.editor.word-wrap" descKey="pane.prefs.editor.word-wrap.desc" />
        <Switch id="editorWrap" bind:checked={$editorWrap} />
    </div>
    <div class="grid min-h-10 grid-cols-[minmax(auto,1fr)_auto] items-center gap-4">
        <Label for="editorTextSize" textKey="pane.prefs.editor.text-size" descKey="pane.prefs.editor.text-size.desc" />
        <div class="flex flex-col w-48 gap-2">
            <Slider
                type="single"
                id="editorTextSize"
                min={0.5}
                max={1.5}
                step={0.05}
                bind:value={$editorTextSize}
                class="w-full"
            />
            <div class="flex flex-row justify-between text-xs text-muted-foreground">
                <span>0.5</span>
                <span>0.75</span>
                <span>1</span>
                <span>1.25</span>
                <span>1.5</span>
            </div>
        </div>
    </div>
    <div class="grid min-h-10 grid-cols-[minmax(auto,1fr)_auto] items-center gap-4">
        <Label
            for="editorTextSizeSync"
            textKey="pane.prefs.editor.sync-text-size"
            descKey="pane.prefs.editor.sync-text-size.desc"
        />
        <Switch id="editorTextSizeSync" bind:checked={$editorTextSizeSync} />
    </div>
    <div class="grid min-h-10 grid-cols-[minmax(auto,1fr)_auto] items-center gap-4">
        <Label
            for="editorTextSizeLock"
            textKey="pane.prefs.editor.lock-text-size"
            descKey="pane.prefs.editor.lock-text-size.desc"
        />
        <Switch id="editorTextSizeLock" bind:checked={$editorTextSizeLock} />
    </div>
</Section>
