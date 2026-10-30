<script lang="ts">
    import { Keyboard, RotateCcw, X } from "@lucide/svelte";
    import { Button } from "$lib/components/ui/button";
    import Section from "../section.svelte";
    import type { PaneProps } from "$lib/components/pane";
    import { shortcutBindings, type ShortcutBinding } from "$lib/state";
    import {
        format,
        modifierFromEvent,
        normalizeKey,
        shortcutActions,
        type ShortcutActionType,
        type ShortcutAction,
    } from "$lib/shortcut";
    import { t } from "$lib/i18n";
    import { cn } from "$lib/components/utils";

    let _: PaneProps = $props();
    let recording = $state<ShortcutActionType | null>(null);
    let conflict = $state(false);

    const bindingFor = (action: ShortcutAction): ShortcutBinding | null => {
        return $shortcutBindings[action.type] === undefined ? (action.binding ?? null) : $shortcutBindings[action.type];
    };

    const recordShortcut = (e: KeyboardEvent, id: ShortcutActionType): void => {
        if (recording !== id) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (e.key === "Escape") {
            recording = null;
            conflict = false;
            return;
        }
        if (["Control", "Meta", "Alt", "Shift"].includes(e.key)) {
            return;
        }

        const modifier = modifierFromEvent(e);
        if (modifier === 0) {
            return;
        }

        const key = normalizeKey(e.key);
        const collision = $shortcutActions.some((action) => {
            if (action.type === id) {
                return false;
            }
            const binding = bindingFor(action);
            return binding?.key.toLowerCase() === key && binding.modifier === modifier;
        });
        if (collision) {
            conflict = true;
            return;
        }

        shortcutBindings.update((s) => ({ ...s, [id]: { key, modifier } }));
        recording = null;
        conflict = false;
    };

    const clearBinding = (id: ShortcutActionType): void => {
        shortcutBindings.update((bindings) => ({ ...bindings, [id]: null }));
        recording = null;
        conflict = false;
    };

    const resetBinding = (id: ShortcutActionType): void => {
        shortcutBindings.update((bindings) => {
            const next = { ...bindings };
            delete next[id];
            return next;
        });
        recording = null;
        conflict = false;
    };
</script>

<Section id="navigation" icon={Keyboard} labelKey="pane.prefs.section.navigation">
    <p class={cn("text-sm text-muted-foreground", conflict && "text-destructive")}>
        {$t(conflict ? "pane.prefs.navigation.conflict" : "pane.prefs.navigation.desc")}
    </p>
    <div class="grid gap-3">
        {#each $shortcutActions as action (action.type)}
            {@const binding = bindingFor(action)}
            {@const changed = binding !== action.binding}
            <div class="grid min-h-10 grid-cols-[minmax(auto,1fr)_auto_auto_auto] items-center gap-3">
                <span class="text-sm">{$t(action.label)}</span>
                <Button
                    disabled={!changed}
                    variant="ghost"
                    size="icon"
                    title={$t("pane.prefs.navigation.reset")}
                    aria-label={$t("pane.prefs.navigation.reset")}
                    onclick={() => resetBinding(action.type)}
                >
                    <RotateCcw />
                </Button>
                <Button
                    disabled={!binding}
                    variant="ghost"
                    size="icon"
                    title={$t("pane.prefs.navigation.disable")}
                    aria-label={$t("pane.prefs.navigation.disable")}
                    onclick={() => clearBinding(action.type)}
                >
                    <X />
                </Button>
                <Button
                    variant={recording === action.type ? "secondary" : "outline"}
                    class={cn("w-48 shrink-0 justify-center", changed && "italic")}
                    aria-label={$t(action.label)}
                    aria-pressed={recording === action.type}
                    onclick={() => {
                        recording = action.type;
                        conflict = false;
                    }}
                    onkeydown={(e) => recordShortcut(e, action.type)}
                >
                    {recording === action.type
                        ? "..."
                        : binding
                          ? format(binding.key, binding.modifier)
                          : $t("pane.prefs.navigation.disabled")}
                </Button>
            </div>
        {/each}
    </div>
</Section>
