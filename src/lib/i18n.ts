import { locale } from "$lib/state";
import { derived, get, writable, type Readable } from "svelte/store";
import type { LocaleData } from "../locale";

const builtinLocales = new Map(
    Object.entries(import.meta.glob("../locale/*.json", { import: "default" })).map(([path, resolver]) => {
        return [path.split("/").pop()!.split(".")[0], resolver as () => Promise<LocaleData>];
    })
);

export const locales = writable(new Map(builtinLocales));

const customLocales = writable(new Map<string, Partial<LocaleData>>());
export const add = (lc: string, key: TranslationKey, value: string) => {
    customLocales.update(($customLocales) => {
        if (!$customLocales.has(lc)) {
            $customLocales.set(lc, {});

            // add a stub for the new locale if it doesn't exist in builtin locales, so that it can be selected
            locales.update(($locales) => {
                if (!$locales.has(lc)) {
                    $locales.set(lc, async () => ({} as LocaleData));
                }
                return $locales;
            });
        }

        $customLocales.get(lc)![key] = value;
        return $customLocales;
    });
};

export const remove = (lc: string, key: TranslationKey) => {
    customLocales.update(($customLocales) => {
        const custom = $customLocales.get(lc);
        if (custom) {
            delete custom[key];
            if (Object.keys(custom).length === 0) {
                $customLocales.delete(lc);

                // remove the stub if it's not in builtin locales
                if (!builtinLocales.has(lc)) {
                    locales.update(($locales) => {
                        $locales.delete(lc);
                        return $locales;
                    });
                }
            }
        }

        return $customLocales;
    });
};

const localeData = derived<[typeof locale, typeof customLocales, typeof locales], LocaleData | null>(
    [locale, customLocales, locales],
    ([$locale, $customLocales, $locales], set) => {
        if ($locale === "locale.none") {
            // robot language
            set(null);
            return;
        }

        // try user locale, fallback to English
        ($locales.get($locale) ?? $locales.get("en")!)().then((data) => {
            set({ ...data, ...($customLocales.get($locale) ?? {}) });
        });
    }
);

export type TranslationKey = keyof LocaleData;

type TranslationFunc = (key: TranslationKey, ...args: any[]) => string;
export const t = derived(localeData, ($localeData): TranslationFunc => {
    return (key, ...args) => {
        return $localeData ? ($localeData[key]?.replace(/{(\d+)}/g, (m, i) => args[i]?.toString() ?? m) ?? key) : key;
    };
});

export const tl: TranslationFunc = (key, ...args) => get(t)(key, ...args);

export const tls = (group: string): Readable<string[]> => {
    return derived(localeData, ($localeData) => {
        return Object.entries($localeData ?? {})
            .filter(([key]) => key.startsWith(group))
            .map(([, value]) => value);
    });
};
