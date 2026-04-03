import { type Icon, type StyledIcon, tabIcon } from "$lib/components/icons";
import { t, type TranslationKey } from "$lib/i18n";
import { error } from "$lib/log";
import { wrapEntry } from "$lib/script";
import { analysisTransformers, panes, workspaceEncoding } from "$lib/state";
import { prettyInternalName } from "$lib/utils";
import { type ClassEntry, type Entry, EntryType, readDeferred } from "$lib/workspace";
import { AnalysisState } from "$lib/workspace/analysis";
import { mappings } from "$lib/workspace/analysis/mapping";
import { Box, Folders, LayoutList, ScrollText, Search, Settings, Sparkles } from "@lucide/svelte";
import type { ScriptContext, Icon as ScriptIcon, TabDeclaration } from "@run-slicer/script";
import { derived, get, writable } from "svelte/store";

export enum TabType {
    PROJECT = "project",
    LOGGING = "logging",
    PLAYGROUND = "playground",
    SEARCH = "search",
    WELCOME = "welcome",
    PREFS = "prefs",
    CODE = "code",
    GRAPH = "graph",
    CLASS = "class",
    IMAGE = "image",
    HEAP_DUMP = "dump",
    STRUCTURE = "structure",
}

export type TabTypeOrDynamic = TabType | string;

export enum TabPosition {
    PRIMARY_CENTER = "primary_center",
    PRIMARY_BOTTOM = "primary_bottom",
    SECONDARY_LEFT = "secondary_left",
    SECONDARY_RIGHT = "secondary_right",
}

export interface Tab {
    id: string;
    type: TabTypeOrDynamic;
    name?: string;
    position: TabPosition;
    index: number | null;
    active?: boolean;
    closeable: boolean;
    pinned?: boolean;
    icon?: StyledIcon | ScriptIcon;
    entry?: Entry;

    dirty?: boolean;
    internalId?: any; // used for reactivity keying
}

export interface TabDefinition {
    type: TabTypeOrDynamic;
    icon: Icon | ScriptIcon;
}

interface DynamicTabDefinition {
    context: ScriptContext;
    decl: TabDeclaration;
}

export const dynamicTabDefs = writable<Map<string, DynamicTabDefinition>>(new Map());

const defaultTabDefs: TabDefinition[] = [
    {
        type: TabType.PROJECT,
        icon: Folders,
    },
    {
        type: TabType.LOGGING,
        icon: ScrollText,
    },
    {
        type: TabType.WELCOME,
        icon: Sparkles,
    },
    {
        type: TabType.PLAYGROUND,
        icon: Box,
    },
    {
        type: TabType.SEARCH,
        icon: Search,
    },
    {
        type: TabType.STRUCTURE,
        icon: LayoutList,
    },
    {
        type: TabType.PREFS,
        icon: Settings,
    },
];

// unscoped tab definitions
export const tabDefs = derived(dynamicTabDefs, ($scriptTabDefs) => {
    const defs = new Map<string, TabDefinition>();
    for (const def of defaultTabDefs) {
        defs.set(def.type, def);
    }
    for (const [type, { decl }] of $scriptTabDefs.entries()) {
        if (decl.contextual) continue; // skip contextual tabs

        defs.set(type, { type, icon: decl.icon });
    }

    return Array.from(defs.values());
});

const defaultTypedDefs = new Map(defaultTabDefs.map((d) => [d.type, d]));

export const tabs = writable<Map<string, Tab>>(
    new Map(
        get(panes)
            .flatMap(({ position, tabs }) =>
                tabs.map((tab, index) => ({
                    position,
                    tab,
                    index,
                    def: defaultTypedDefs.get(tab.type),
                }))
            )
            .filter(({ def }) => def !== undefined)
            // Sort pinned tabs first
            .sort((a, b) => (b.tab.pinned ? 1 : 0) - (a.tab.pinned ? 1 : 0))
            .map(({ position, tab, index, def }) => [
                `${def!.type}:slicer`,
                {
                    id: `${def!.type}:slicer`,
                    type: def!.type,
                    position,
                    index,
                    active: tab.active,
                    closeable: true,
                    pinned: tab.pinned,
                    icon: {
                        icon: def!.icon as Icon,
                        classes: ["text-muted-foreground"],
                    },
                    internalId: {},
                },
            ])
    )
);

// save opened unscoped tabs' position for returning sessions
tabs.subscribe(($tabs) => {
    const candidates = Array.from($tabs.values())
        .filter((t) => defaultTypedDefs.has(t.type))
        .map((t) => ({
            type: t.type as TabType,
            position: t.position,
            active: Boolean(t.active),
            pinned: Boolean(t.pinned),
        }));

    // re-add Welcome tab after pinned section, if not present
    if (!candidates.some((t) => t.type === TabType.WELCOME)) {
        const pinnedCount = candidates.filter((t) => t.pinned).length;

        candidates.splice(pinnedCount, 0, {
            type: TabType.WELCOME,
            position: TabPosition.PRIMARY_CENTER,
            active: false,
            pinned: false,
        });
    }

    panes.update(($panes) => {
        return Object.values(TabPosition).map((pos) => {
            const data = $panes.find((p) => p.position === pos) || { position: pos, tabs: [], open: false };
            data.tabs = candidates
                .filter((t) => t.position === pos)
                .map(({ type, active, pinned }) => ({ type, active, pinned }));

            if (data.tabs.length > 0 && !data.tabs.some((t) => t.active)) {
                // no active tab for position, make the last one active
                data.tabs[data.tabs.length - 1]!.active = true;
            }
            return data;
        });
    });
});

// utility function for creating+opening/closing a pane
export const updatePane = (position: TabPosition, open: boolean) => {
    panes.update(($panes) => {
        let pane = $panes.find((p) => p.position === position);
        if (!pane) {
            pane = { position, tabs: [], open };
            $panes.push(pane);
        }

        pane.open = open;
        return $panes;
    });
};

export const current = derived(tabs, ($tabs) => {
    return Array.from($tabs.values()).find((t) => t.active && t.position === TabPosition.PRIMARY_CENTER) || null;
});

// set window name based on currently opened tab
derived([current, t], (a) => a).subscribe(([$current, $t]) => {
    // PWAs don't need the app name reiterated
    if (window.matchMedia("not (display-mode: browser)").matches) {
        document.title = $current ? ($current.name ?? $t(`tab.${$current.type}` as TranslationKey)) : "slicer";
    } else {
        document.title = $current
            ? `${$current.name ?? $t(`tab.${$current.type}` as TranslationKey)} | slicer`
            : "slicer";
    }
});

const refreshImmediately = (tab: Tab): Tab => {
    tab.internalId = undefined;
    tab.dirty = false;

    return update(tab);
};

// helper function for making sure a tab is refreshed before it's made active
export const updateCurrent = (position: TabPosition, tab: Tab | null) => {
    if (tab?.dirty) {
        tab = refreshImmediately(tab);
    }

    tabs.update(($tabs) => {
        for (const tab0 of $tabs.values()) {
            if (tab0.id === tab?.id) {
                tab0.position = position;
                tab0.active = true;
            } else if (tab0.active && tab0.position === position) {
                tab0.active = false;
            }
        }

        return $tabs;
    });
};

export const find = (id: string): Tab | null => {
    return get(tabs).get(id) || null;
};

export const update = (tab: Tab): Tab => {
    if (!tab.internalId) {
        tab.internalId = {}; // fill in missing id
    }

    tabs.update(($tabs) => {
        if (tab.index == null) {
            tab.index =
                Math.max(
                    -1,
                    ...Array.from($tabs.values())
                        .filter((t) => t.position === tab.position)
                        .map((t) => t.index ?? 0)
                ) + 1;
        }

        const nodeName =
            tab.entry?.type === EntryType.CLASS ? (tab.entry as ClassEntry).node.thisClass.nameEntry?.string : null;

        // update name based on entry, if possible
        tab.name = nodeName ? prettyInternalName(nodeName, true) : tab.name;

        $tabs.set(tab.id, tab);
        return $tabs;
    });
    return tab;
};

export const refresh = async (tab: Tab, hard: boolean = false): Promise<Tab> => {
    const entry = tab.entry;
    if (hard && entry) {
        // re-analysis will unwrap any late transformations
        entry.state = AnalysisState.NONE;
        tab.entry = await readDeferred(entry);
    }

    // try immediate update for the current tab
    if (tab.active) {
        return refreshImmediately(tab);
    }

    tab.dirty = true;
    return tab;
};

export const refreshIf = async (func: (tab: Tab) => boolean, hard: boolean = false) => {
    for (const tab of get(tabs).values()) {
        if (func(tab)) {
            await refresh(tab, hard);
        }
    }
};

// gets the preceding tab or null if there's only one in position
const nextTab = (tab: Tab): Tab | null => {
    const all = Array.from(get(tabs).values())
        .filter((t) => t.position === tab.position)
        .sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

    const i = all.findIndex((t) => t.id === tab.id);
    if (i === -1 || all.length <= 1) return null;

    return all[i > 0 ? i - 1 : all.length - 1];
};

export const remove = (tab: Tab) => {
    if (tab.active) {
        updateCurrent(tab.position, nextTab(tab));
    }

    tabs.update(($tabs) => {
        $tabs.delete(tab.id);
        return $tabs;
    });
};

export const move = (tab: Tab, position: TabPosition) => {
    if (tab.position === position) return;
    if (tab.active) {
        updateCurrent(tab.position, nextTab(tab));
    }

    tab.active = true;
    tab.position = position;

    tabs.update(($tabs) => {
        // deactivate clashing tabs
        for (const tab0 of $tabs.values()) {
            if (tab0.id !== tab.id && tab0.position === position) {
                tab0.active = false;
            }
        }

        return $tabs;
    });
};

export const clear = () => {
    tabs.update(($tabs) => {
        for (const tab of $tabs.values()) {
            if (tab.entry) {
                $tabs.delete(tab.id);
            }
        }

        for (const pos of Object.values(TabPosition)) {
            const posTabs = Array.from($tabs.values())
                .filter((t) => t.position === pos)
                .sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

            if (posTabs.length > 0 && !posTabs.some((t) => t.active)) {
                // no active tab for position, make the last one active
                posTabs[posTabs.length - 1]!.active = true;
            }
        }

        return $tabs;
    });
};

// utilities below

export const isEncodingDependent = (tab: Tab): boolean => {
    return (
        tab.type === TabType.CODE &&
        !(tab.entry?.type === EntryType.CLASS || tab.entry?.type === EntryType.MEMBER) /* not disassembled */
    );
};

// soft-refresh code tabs on encoding change
workspaceEncoding.subscribe(() => {
    refreshIf(isEncodingDependent).then();
});

// hard-refresh tabs on transformer (state) change
derived([analysisTransformers, mappings], (a) => a).subscribe(() => {
    refreshIf(({ entry }) => {
        return entry !== undefined && (entry.type === EntryType.CLASS || entry.type === EntryType.MEMBER);
    }, true).then();
});

// prettier-ignore
const extensions = {
    [TabType.IMAGE]: ["jpg", "jpeg", "gif", "png", "webp"],
    [TabType.HEAP_DUMP]: ["hprof"],
};

const typesByExts = new Map(
    (Object.entries(extensions) as [TabType, string[]][]).flatMap(([k, v]) => v.map((ext) => [ext, k]))
);

export const detectType = (entry: Entry): TabType => {
    return entry.extension ? typesByExts.get(entry.extension) || TabType.CODE : TabType.CODE;
};

export const open = async (entry: Entry, type: TabTypeOrDynamic = detectType(entry)): Promise<Tab> => {
    if (entry.type === EntryType.MEMBER && type === TabType.CLASS) {
        entry = entry.parent!; // unwrap to parent class
    }

    const id = `${type}:${entry.name}`;

    let tab = find(id);
    if (!tab) {
        // tab doesn't exist, create
        try {
            let name = entry.shortName,
                icon: StyledIcon | ScriptIcon = tabIcon(type as TabType, entry);
            const scriptDef = get(dynamicTabDefs).get(type);
            if (scriptDef) {
                const { context, decl } = scriptDef;
                if (decl.icon) {
                    icon = decl.icon;
                }

                const { label, icon: placementIcon } = await decl.place({ context, entry: wrapEntry(entry) });
                if (label) {
                    name = label;
                }
                if (placementIcon) {
                    icon = placementIcon;
                }
            }

            tab = update({
                id,
                type,
                // TODO: disambiguate tabs with the same name?
                name,
                position: TabPosition.PRIMARY_CENTER,
                index: null,
                closeable: true,
                entry: await readDeferred(entry),
                icon,
            });
        } catch (e) {
            error(`failed to read entry ${entry.name}`, e);

            throw e; // rethrow
        }
    }

    updateCurrent(tab.position, tab);
    return tab;
};

// specified position is used only if the tab is not already open
export const openUnscoped = async (
    def: TabDefinition,
    position: TabPosition = TabPosition.PRIMARY_CENTER
): Promise<Tab> => {
    let tab = Array.from(get(tabs).values()).find((t) => t.type === def.type);
    if (!tab) {
        let name: string | undefined,
            icon: Icon | ScriptIcon = def.icon;
        const scriptDef = get(dynamicTabDefs).get(def.type);
        if (scriptDef) {
            const { context, decl } = scriptDef;
            const { label, icon: placementIcon } = await decl.place({ context, entry: null });
            if (label) {
                name = label;
            }
            if (placementIcon) {
                icon = placementIcon;
            }
        }

        tab = update({
            id: `${def.type}:slicer`,
            type: def.type,
            name,
            position,
            index: null,
            closeable: true,
            icon: "type" in icon ? icon : { icon, classes: ["text-muted-foreground"] },
        });
    }

    updateCurrent(tab.position, tab);
    return tab;
};
