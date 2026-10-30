import { handler } from "$lib/event";
import { type ShortcutBinding, shortcutBindings } from "$lib/state";
import { tabDefs, TabPosition, TabType } from "$lib/tab";
import { get, writable } from "svelte/store";

// https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
const isMac = /Macintosh|Mac OS|MacIntel|MacPPC|Mac68K/gi.test(navigator.userAgent);

export const enum Modifier {
    CTRL = 1 << 0,
    SHIFT = 1 << 1,
    ALT = 1 << 2,
}

type ShortcutCallback = (e: KeyboardEvent) => void | PromiseLike<void>;
export type DestroyCallback = () => void;

export type ShortcutActionType = string;
export interface ShortcutAction {
    type: ShortcutActionType;
    label: string;
    binding?: ShortcutBinding;
    run: ShortcutCallback;
}

export const shortcutActions = writable<ShortcutAction[]>([
    {
        type: "load",
        label: "pane.prefs.navigation.load",
        binding: { key: "o", modifier: Modifier.CTRL },
        run: () => get(handler).load(),
    },
    {
        type: "add",
        label: "pane.prefs.navigation.add",
        binding: { key: "o", modifier: Modifier.CTRL | Modifier.SHIFT },
        run: () => get(handler).add(),
    },
    {
        type: "close",
        label: "pane.prefs.navigation.close",
        binding: { key: "w", modifier: Modifier.CTRL | Modifier.ALT },
        run: () => get(handler).close(),
    },
    {
        type: "export",
        label: "pane.prefs.navigation.export",
        binding: { key: "e", modifier: Modifier.CTRL },
        run: () => get(handler).export(),
    },
    {
        type: "search",
        label: "pane.prefs.navigation.search",
        binding: { key: "f", modifier: Modifier.CTRL | Modifier.SHIFT },
        run: async () => {
            await get(handler).openUnscoped(
                get(tabDefs).find((definition) => definition.type === TabType.SEARCH)!,
                TabPosition.SECONDARY_RIGHT,
                false
            );
        },
    },
    {
        type: "loadMappings",
        label: "pane.prefs.navigation.load-mappings",
        binding: { key: "m", modifier: Modifier.CTRL | Modifier.SHIFT },
        run: () => get(handler).loadMappings(),
    },
]);

interface ShortcutRegistration {
    combination: string;
    callback: ShortcutCallback;
}

const registrations = new Map<string, ShortcutRegistration>();
let listening = false;

export const normalizeKey = (key: string): string => (key === " " ? "space" : key.toLowerCase());
export const modifierFromEvent = (event: KeyboardEvent): number =>
    (event.getModifierState(isMac ? "Meta" : "Control") ? Modifier.CTRL : 0) |
    (event.getModifierState("Shift") ? Modifier.SHIFT : 0) |
    (event.getModifierState("Alt") ? Modifier.ALT : 0);

const combination = (key: string, modifier: number): string => `${modifier}:${normalizeKey(key)}`;

const handleKeydown = async (e: KeyboardEvent): Promise<void> => {
    const registration = registrations.get(combination(e.key, modifierFromEvent(e)));
    if (!registration) {
        return;
    }

    e.preventDefault();
    e.stopPropagation();
    await registration.callback(e);
};

const removeRegistration = (reg: ShortcutRegistration): void => {
    if (registrations.get(reg.combination) === reg) {
        registrations.delete(reg.combination);
        if (listening && registrations.size === 0) {
            window.removeEventListener("keydown", handleKeydown);
            listening = false;
        }
    }
};

const register = (key: string, modifier: number, callback: ShortcutCallback): DestroyCallback => {
    const id = combination(key, modifier);
    const reg: ShortcutRegistration = {
        combination: id,
        callback,
    };
    registrations.set(id, reg);

    if (!listening) {
        window.addEventListener("keydown", handleKeydown);
        listening = true;
    }

    return () => removeRegistration(reg);
};

export const bindShortcuts = (): DestroyCallback => {
    let destroyBindings: DestroyCallback[] = [];
    const sync = (): void => {
        destroyBindings.forEach((destroy) => destroy());
        destroyBindings = [];

        const configured = get(shortcutBindings);
        for (const action of get(shortcutActions)) {
            const binding = configured[action.type] === undefined ? action.binding : configured[action.type];
            if (binding && !registrations.has(combination(binding.key, binding.modifier))) {
                destroyBindings.push(register(binding.key, binding.modifier, action.run));
            }
        }
    };

    const unsubscribeActions = shortcutActions.subscribe(sync);
    const unsubscribeBindings = shortcutBindings.subscribe(sync);
    return () => {
        unsubscribeActions();
        unsubscribeBindings();
        destroyBindings.forEach((destroy) => destroy());
    };
};

export const format = (key: string, mod: number, short: boolean = false): string => {
    if (isMac) {
        return formatMac(key, mod);
    }

    let keys: string[] = [];
    if ((mod & Modifier.CTRL) !== 0) {
        keys.push(short ? "C" : "Ctrl");
    }
    if ((mod & Modifier.ALT) !== 0) {
        keys.push(short ? "A" : "Alt");
    }
    if ((mod & Modifier.SHIFT) !== 0) {
        keys.push(short ? "S" : "Shift");
    }

    keys.push(key.toUpperCase());
    return keys.join("+");
};

const formatMac = (key: string, mod: number): string => {
    let mods = "";
    if ((mod & Modifier.ALT) !== 0) {
        mods += "\u2325"; // Option
    }
    if ((mod & Modifier.SHIFT) !== 0) {
        mods += "\u21E7"; // Shift
    }
    if ((mod & Modifier.CTRL) !== 0) {
        mods += "\u2318"; // Cmd
    }

    return mods + key.toUpperCase();
};
