type Awaitable<T> = T | PromiseLike<T>;

/**
 * A type of icon that can be displayed in a tab.
 */
export type IconType = "url" | "html";

/**
 * An icon in the UI.
 */
export interface Icon {
    /**
     * The type of the icon, which determines how the value is interpreted.
     */
    readonly type: IconType;

    /**
     * The value of the icon, which can be a URL to an image if the type is "url", or an HTML string if the type is "html".
     */
    readonly value: string;
}

/**
 * A type of {@link Option}.
 */
export type OptionType = "group" | "button" | "checkbox" | "radio" | "separator";

/**
 * An option in the menubar that can be configured by the user.
 */
export interface Option {
    /**
     * The type of the option.
     */
    readonly type: OptionType;
    /**
     * The position of the option in the menubar, e.g. "menu.root", "menu.file", etc.
     *
     * This can be a translation key or a hardcoded string.
     *
     * The options will be added at the end of the specified menu, in the order they are defined in the script.
     * If the position is invalid, a new menu will be created with the given name and the option will be added to it.
     *
     * If the position is not specified, it will be added to the script's submenu.
     */
    readonly position?: string;
    /**
     * The unique identifier of the option.
     *
     * This should not conflict with IDs of options defined by other scripts, to ensure compatibility with other scripts,
     * so it is recommended to use a namespaced ID (e.g. "my_script/enable_feature", "my_script/refresh_cache", etc.).
     */
    readonly id: string;
    /**
     * A human-readable name or a translation key for the option, defaults to {@link id} if not provided.
     */
    readonly label?: string;
    /**
     * An optional icon to display next to the option in the menu.
     */
    readonly icon?: Icon;
}

/**
 * An option that contains other options.
 */
export interface GroupOption extends Option {
    readonly type: "group";
    /**
     * The options contained within this group.
     */
    readonly options: Option[];
}

/**
 * An option that represents a button that can be clicked.
 */
export interface ButtonOption extends Option {
    readonly type: "button";
}

/**
 * An option that represents a checkbox that can be checked or unchecked.
 */
export interface CheckboxOption extends Option {
    readonly type: "checkbox";
    /**
     * Whether the checkbox is checked or not, mutable only by the user.
     */
    readonly checked: boolean;
}

/**
 * A radio button item within a {@link RadioOption}.
 */
export interface RadioItem {
    /**
     * The unique identifier of the radio item.
     */
    readonly id: string;
    /**
     * A human-readable name for the radio item, defaults to {@link id} if not provided.
     */
    readonly label?: string;
}

/**
 * An option that represents a set of radio buttons, where only one can be selected at a time.
 */
export interface RadioOption extends Option {
    readonly type: "radio";
    /**
     * The radio items within this option.
     */
    readonly items: RadioItem[];
    /**
     * The {@link RadioItem#id} of the currently selected radio item, mutable only by the user.
     */
    readonly selected: string;
}

/**
 * A type of {@link Event}.
 */
export type EventType = "option_change" | "locale_change" | "preload";

/**
 * An event emitted onto an event bus.
 */
export interface Event {
    /**
     * The type of the event.
     */
    readonly type: EventType;
}

/**
 * A function for receiving events.
 * @param event The event being emitted.
 * @param context The script context in which the event is being emitted.
 */
export type EventListener<E extends Event> = (event: E, context: ScriptContext) => Awaitable<void>;

/**
 * An event emitted when an {@link Option} is changed by the user.
 */
export interface OptionChangeEvent extends Event {
    readonly type: "option_change";
    /**
     * The option that was changed.
     */
    readonly option: Option;
}

/**
 * An event emitted when the UI locale changes.
 */
export interface LocaleChangeEvent extends Event {
    readonly type: "locale_change";
    /**
     * The new locale after the change.
     */
    readonly locale: string;
}

/**
 * An event emitted when a class file is to be interpreted (read) in a tab.
 */
export interface PreloadEvent extends Event {
    readonly type: "preload";
    /**
     * The name of *the workspace entry* being loaded ({@link Entry#name}).
     */
    readonly name: string;
    /**
     * The *transformed* raw bytecode of the class file, mutable.
     */
    data: Uint8Array;
}

/**
 * Mapping of event types to their corresponding event interfaces.
 */
export interface EventMap {
    option_change: OptionChangeEvent;
    locale_change: LocaleChangeEvent;
    preload: PreloadEvent;
}

/**
 * An entry in the workspace, which can be opened in a tab.
 */
export interface Entry {
    /**
     * The type of the entry, defined by slicer internally (e.g. "file", "class", "archive", etc.).
     */
    readonly type: string;
    /**
     * The unique name of the entry (e.g. "HelloWorld.class", "lib/example.jar", etc.).
     */
    readonly name: string;

    /**
     * Returns the raw data of the entry as a byte array.
     */
    bytes(): Awaitable<Uint8Array>;

    /**
     * Returns the raw data of the entry as a {@link Blob}.
     */
    blob(): Awaitable<Blob>;
}

/**
 * A tab in the UI.
 */
export interface Tab {
    /**
     * The type of the tab, defined by slicer internally (e.g. "code", "class", "graph", etc.).
     */
    readonly type: string;
    /**
     * The unique identifier of the tab.
     */
    readonly id: string;
    /**
     * A human-readable name for the tab (e.g. "HelloWorld.class", "Welcome", etc.).
     */
    readonly label: string;
    /**
     * The position of the tab in the UI, defined in slicer internally (e.g. "primary_center", "secondary_left", etc.).
     */
    readonly position: string;
    /**
     * Whether the tab is currently active (focused) in the UI.
     *
     * There can be multiple active tabs if they are in different positions.
     */
    readonly active: boolean;
    /**
     * The entry opened in the tab, or `null` if the tab is not associated with any entry (e.g. a welcome tab).
     */
    readonly entry: Entry | null;
}

/**
 * Values provided during the placement and rendering of a tab, which can be used to customize the content based on the associated entry or other factors.
 */
export interface TabContext {
    /**
     * The script context in which the tab is being rendered.
     */
    readonly context: ScriptContext;

    /**
     * The entry opened in the tab, or `null` if the tab is not associated with any entry.
     */
    readonly entry: Entry | null;
}

/**
 * The placement of a tab in the UI provided by the script.
 */
export interface TabPlacement {
    /**
     * A human-readable name or a translation key for the tab's label (e.g. "HelloWorld.class", "Welcome", etc.).
     *
     * Defaults to the name of the associated entry if there is one, or the default label if there is no associated entry.
     */
    readonly label?: string;

    /**
     * An optional icon to display next to the tab's label in the UI.
     */
    readonly icon?: Icon;
}

/**
 * The content of a tab in the UI provided by the script.
 */
export interface TabContent {
    /**
     * The element to mount in the tab's content area, which can be any valid HTML element created by the script.
     */
    readonly content: HTMLElement;

    /**
     * An optional function that is called when the tab is closed, allowing for cleanup of any resources or state associated with the tab.
     */
    destroy?(): Awaitable<void>;
}

/**
 * The declaration of a type of tab that can be rendered in the UI.
 */
export interface TabDeclaration {
    /**
     * The unique ID of the tab declaration.
     *
     * This should not conflict with types of tabs defined by slicer internally or by other scripts, to ensure compatibility with other scripts and future versions of slicer,
     * so it is recommended to use a namespaced type (e.g. "my_script/code", "my_script/graph", etc.).
     */
    readonly id: string;
    /**
     * A human-readable name or a translation key for the tab's label.
     *
     * This will be used as the label for any "Open as" buttons.
     */
    readonly label: string;
    /**
     * An icon for the tab.
     */
    readonly icon: Icon;
    /**
     * Whether the tab is contextual, meaning that it should only be rendered when there is an associated entry (i.e. when the {@link TabContext#entry} is not `null`).
     *
     * If `false`, the tab will be rendered without an associated entry, and the {@link TabContext#entry} will be `null` in that case.
     * This can be useful for tabs that display general information or a welcome screen, for example.
     *
     * Defaults to `false`.
     */
    readonly contextual?: boolean;
    /**
     * An optional array of file extensions (without the dot) that this tab can handle, which can be used by slicer to determine which tab declaration to use for a given entry.
     *
     * This is only a hint, a tab must be able to handle any entry passed to it in the {@link TabContext#entry} regardless of the file extension.
     * This only applies if {@link TabDeclaration#contextual} is true.
     */
    readonly preferredTypes?: string[];

    /**
     * Determines the placement of the tab in the UI based on the provided context.
     *
     * @param context The context for placing the tab, which includes the associated entry if applicable.
     * @return An object containing tab placement.
     */
    place(context: TabContext): Awaitable<TabPlacement>;

    /**
     * Renders the content of the tab based on the provided context.
     * The returned {@link TabContent} specifies the content to display in the tab and its position in the UI.
     *
     * @param context The context for rendering the tab.
     * @return An object containing the content to display in the tab.
     */
    render(context: TabContext): Awaitable<TabContent>;
}

/**
 * The editor context, which allows interaction with the tabs in the UI.
 */
export interface EditorContext {
    /**
     * Returns all tabs currently open in the UI.
     */
    tabs(): Tab[];

    /**
     * Finds a tab by its unique identifier.
     * @param id The unique identifier of the tab.
     * @returns The tab with the given ID, or `null` if no such tab exists.
     */
    find(id: string): Tab | null;

    /**
     * Returns the tab currently active in the "primary_center" position.
     * @returns The tab, or `null` if no tab is active in that position.
     */
    current(): Tab | null;

    /**
     * Refreshes a tab.
     * @param id The unique identifier of the tab to refresh.
     * @param hard Whether to perform a hard refresh, which retransforms the associated entry (and fires {@link PreloadEvent}). Defaults to `false`.
     */
    refresh(id: string, hard?: boolean): Awaitable<void>;

    /**
     * Adds a new tab to the UI and makes it active.
     *
     * If a tab with the same type and entry already exists, it will be made active instead of creating a new one.
     * @param type The type of the tab to add (e.g. "code", "class", "graph", etc.).
     * @param entry The entry associated with the tab. If omitted, the tab will not be associated with any entry (e.g. a welcome tab).
     * @returns The newly created tab.
     */
    add(type: string, entry?: Entry): Awaitable<Tab>;

    /**
     * Removes a tab from the UI.
     *
     * If the tab is currently active, the next tab in the same position will be made active instead.
     * @param id The unique identifier of the tab to remove.
     */
    remove(id: string): void;

    /**
     * Removes all tabs from the UI.
     */
    clear(): void;

    /**
     * Registers a new type of tab that can be added to the UI.
     *
     * @param declaration The declaration of the tab type, including its unique ID, icon, and render function.
     */
    register(declaration: TabDeclaration): void;

    /**
     * Unregisters a type of tab, preventing any new tabs of that type from being added to the UI.
     * Existing tabs of that type will not be closed automatically,
     * existing tabs of that type will continue to function as normal until they are closed or refreshed,
     * at which point they will no longer be able to render content and will display an error message instead.
     *
     * @param id The unique identifier of the tab type to unregister.
     */
    unregister(id: string): void;
}

/**
 * A function that provides the raw bytecode of a class by its name.
 * @param name The fully qualified name of the class (e.g. "com/example/HelloWorld").
 * @returns The raw bytecode of the class as a byte array, or `null` if the class could not be found.
 */
export type ClassDataSource = (name: string) => Awaitable<Uint8Array | null>;

/**
 * A disassembler that can convert bytecode into human-readable assembly code (or a Java approximation - decompilation).
 */
export interface Disassembler {
    /**
     * The unique identifier of the disassembler (e.g. "procyon", "cfr", "vf", etc.).
     */
    readonly id: string;
    /**
     * A human-readable name for the disassembler (e.g. "Procyon", "CFR", "Vineflower", etc.), defaults to the {@link id}.
     */
    readonly label?: string;
    /**
     * The version of the disassembler as shown in the UI.
     */
    readonly version?: string;
    /**
     * The programming language the disassembler outputs (e.g. "java", "kotlin", etc.), defaults to plain text ("plaintext").
     */
    readonly language?: string;
    /**
     * Options passed to the disassembler, mutable.
     */
    options?: Record<string, string>;

    /**
     * Disassembles a class by its name using the provided data source to fetch the raw bytecode.
     *
     * This function must be implemented by the disassembler.
     * @param name The fully qualified name of the class to disassemble (e.g. "com/example/HelloWorld").
     * @param source A function that provides the raw bytecode of a class by its name.
     * @param resources An array of fully qualified class names that may be requested from the {@link ClassDataSource} (e.g. "java/lang/Object").
     * @returns The disassembled code as a string.
     */
    readonly class: (name: string, source: ClassDataSource, resources: string[]) => Awaitable<string>;
    /**
     * Disassembles a method by its name and signature using the provided data source to fetch the raw bytecode of the containing class.
     *
     * This function is optional; if not provided, only class-level disassembly will be available.
     * @param name The fully qualified name of the class containing the method (e.g. "com/example/HelloWorld").
     * @param signature The method signature (e.g. "main([Ljava/lang/String;)V").
     * @param source A function that provides the raw bytecode of a class by its name.
     * @param resources An array of fully qualified class names that may be requested from the {@link ClassDataSource} (e.g. "java/lang/Object").
     * @returns The disassembled method code as a string.
     */
    readonly method?: (
        name: string,
        signature: string,
        source: ClassDataSource,
        resources: string[]
    ) => Awaitable<string>;
}

/**
 * The disassembler context, which allows interaction with the available disassemblers.
 */
export interface DisassemblerContext {
    /**
     * Returns all registered disassemblers.
     */
    all(): Disassembler[];

    /**
     * Finds a disassembler by its unique identifier.
     * @param id The unique identifier of the disassembler.
     * @returns The disassembler with the given ID, or `null` if no such disassembler exists.
     */
    find(id: string): Disassembler | null;

    /**
     * Registers a new disassembler.
     * @param disasm The disassembler to register.
     */
    add(disasm: Disassembler): void;

    /**
     * Removes a disassembler by its unique identifier.
     * @param id The unique identifier of the disassembler to remove.
     */
    remove(id: string): void;
}

/**
 * The workspace context, which allows interaction with the entries in the workspace.
 */
export interface WorkspaceContext {
    /**
     * Returns all entries in the workspace.
     */
    entries(): Entry[];

    /**
     * Finds an entry by its unique name.
     * @param name The unique name of the entry.
     * @returns The entry with the given name, or `null` if no such entry exists.
     */
    find(name: string): Entry | null;

    /**
     * Adds a new entry to the workspace.
     * @param name The unique name of the entry (e.g. "HelloWorld.class", "lib/example.jar", etc.).
     * @param data The raw data of the entry as a byte array or a {@link Blob}.
     * @returns The newly created entry.
     */
    add(name: string, data: Uint8Array | Blob): Awaitable<Entry>;

    /**
     * Removes an entry from the workspace by its unique name.
     * @param name The unique name of the entry to remove.
     */
    remove(name: string): void;

    /**
     * Removes all entries from the workspace.
     */
    clear(): void;
}

/**
 * Mapping formats supported by slicer for loading and exporting mappings.
 *
 * This may be updated in the future to include additional formats.
 */
export type MappingType = "tiny_v1" | "tiny_v2" | "proguard" | "srg" | "csrg" | "tsrg";

/**
 * The mapping context, which allows loading and exporting mappings in supported formats.
 */
export interface MappingContext {
    /**
     * Loads mappings from a string in a supported format, optionally specifying the source and destination namespace for formats that support it (e.g. tiny).
     *
     * @param data The mapping data as a string.
     * @param src The source namespace to use when loading mappings, if applicable (e.g. "intermediary"). If not specified, the first namespace in the mapping file will be used by default.
     * @param dst The destination namespace to use when loading mappings, if applicable (e.g. "named"). If not specified, the first namespace after the source namespace will be used by default.
     */
    load(data: string, src?: string, dst?: string): Awaitable<void>;

    /**
     * Exports the currently loaded mappings to a string in the specified format.
     *
     * @param format The format to export the mappings in.
     * @returns The exported mappings as a string.
     */
    export(format: MappingType): Awaitable<string>;

    /**
     * Returns the number of mapped classes currently loaded in the mapping set.
     */
    size(): number;

    /**
     * Clears all loaded mappings from the mapping set.
     */
    clear(): void;
}

/**
 * Provides access to internationalization (i18n) features, such as translating strings based on the user's locale.
 */
export interface I18NContext {
    /**
     * Current locale of the user, represented as a string (e.g. "en", "es", etc.).
     */
    readonly locale: string;

    /**
     * Translates a string key into the user's locale, optionally formatting it with provided arguments.
     *
     * @param key The key of the string to translate, defined in slicer's i18n files (e.g. "menu.file", ...).
     * @param args Optional arguments to format the translated string with, if it contains placeholders.
     * @returns The translated and formatted string.
     */
    t(key: string, ...args: any[]): string;

    /**
     * Registers a new translation for a specific locale, allowing scripts to provide their own localized strings.
     *
     * If a translation for the same locale and key already exists, it will be overwritten by the new value.
     * If the locale does not exist yet, it will be created and the translation will be added to it.
     *
     * @param locale The locale to register the translation for, represented as a string (e.g. "en", "es", etc.).
     * @param key The key of the string to register the translation for, can be any string but should ideally follow the same format as keys in slicer's i18n files (e.g. "menu.file", ...).
     * @param value The translated string in the specified locale.
     */
    add(locale: string, key: string, value: string): void;

    /**
     * Removes a translation for a specific locale and key.
     *
     * If the translation does not exist, this function does nothing.
     * If the locale becomes empty after removing the translation, it will be removed as well.
     *
     * @param locale The locale of the translation to remove, represented as a string (e.g. "en", "es", etc.).
     * @param key The key of the translation to remove.
     */
    remove(locale: string, key: string): void;
}

/**
 * Options for configuring a toast notification.
 */
export interface NotificationOptions {
    /**
     * Translation key for the description of this notification.
     */
    readonly description?: string;

    /**
     * Translation arguments for the description of this notification.
     */
    readonly descriptionArgs?: any[];
    /**
     * Translation arguments for the message of this notification.
     */
    readonly msgArgs?: any[];
    /*
     * Duration in milliseconds before the toast fades.
     */
    readonly duration?: number;
}

/**
 * Provides access to display notifications (toasts) in the UI.
 */
export interface NotificationContext {
    /**
     * Displays an informational toast notification.
     */
    info(message: string, options?: NotificationOptions): void;
    /**
     * Displays a success toast notification.
     */
    success(message: string, options?: NotificationOptions): void;
    /**
     * Displays a warning toast notification.
     */
    warning(message: string, options?: NotificationOptions): void;
    /**
     * Displays an error toast notification.
     */
    error(message: string, options?: NotificationOptions): void;
}

/**
 * The context in which a script is executed, providing access to the editor, disassembler, and workspace contexts,
 * as well as event handling capabilities.
 */
export interface ScriptContext {
    /**
     * The script associated with this context.
     */
    readonly script: Script;
    /**
     * The parent context, or `null` if this is the root context.
     */
    readonly parent: ScriptContext | null;

    /**
     * The editor context, which allows interaction with the tabs in the UI.
     */
    readonly editor: EditorContext;
    /**
     * The disassembler context, which allows interaction with the available disassemblers.
     */
    readonly disasm: DisassemblerContext;
    /**
     * The workspace context, which allows interaction with the entries in the workspace.
     */
    readonly workspace: WorkspaceContext;
    /**
     * The mapping context, which allows loading and exporting mappings in supported formats.
     */
    readonly mapping: MappingContext;
    /**
     * The internationalization context, which allows translating strings based on the user's locale and registering new translations.
     */
    readonly i18n: I18NContext;
    /**
     * The notification context, which allows displaying toast notifications in the UI.
     */
    readonly notification: NotificationContext;

    /**
     * Adds an event listener for the specified event type.
     * @param type The type of event to listen for.
     * @param listener The function to call when the event is emitted.
     */
    addEventListener<K extends EventType>(type: K, listener: EventListener<EventMap[K]>): void;

    /**
     * Removes an event listener for the specified event type.
     * @param type The type of event the listener was registered for.
     * @param listener The listener function to remove.
     */
    removeEventListener<K extends EventType>(type: K, listener: EventListener<EventMap[K]>): void;

    /**
     * Dispatches an event to all registered listeners for its type.
     * @param event The event to dispatch.
     * @returns The dispatched event, possibly mutated by listeners.
     */
    dispatchEvent<E extends Event>(event: E): Awaitable<E>;
}

/**
 * The script interface, which must be exported by all scripts.
 */
export interface Script {
    /**
     * A human-readable name for the script.
     */
    readonly name?: string;
    /**
     * A human-readable description of the script.
     */
    readonly description?: string;
    /**
     * The version of the script as shown in the UI.
     */
    readonly version?: string;
    /**
     * The options configurable by the user in the script's menu.
     */
    readonly options?: Option[];

    /**
     * Called when the script is loaded.
     * @param context The context in which the script is being loaded.
     */
    load(context: ScriptContext): Awaitable<void>;

    /**
     * Called when the script is unloaded.
     *
     * This is the last chance to clean up any resources or state associated with the script.
     * @param context The context in which the script is being unloaded.
     */
    unload(context: ScriptContext): Awaitable<void>;
}
