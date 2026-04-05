<script lang="ts">
    import { Pencil } from "@lucide/svelte";
    import { cn } from "$lib/components/utils";

    interface Props {
        editing: boolean;
        value: string;
        display: string;
        placeholder?: string;
        title?: string;
        showText?: boolean;
        showButton?: boolean;
        textClass?: string;
        inputClass?: string;
        buttonClass?: string;
        iconClass?: string;
        stopPropagationOnStart?: boolean;
        onStart?: () => void;
        onCommit?: (value: string) => void;
        onCancel?: () => void;
    }

    let {
        editing,
        value = $bindable(),
        display,
        placeholder = "",
        title = "Rename",
        showText = true,
        showButton = true,
        textClass,
        inputClass =
            "min-w-0 flex-1 border-b border-primary bg-transparent text-sm outline-none",
        buttonClass = "text-muted-foreground shrink-0 opacity-0 transition-opacity group-hover:opacity-100",
        iconClass = "size-3.5",
        stopPropagationOnStart = false,
        onStart = () => {},
        onCommit = () => {},
        onCancel = () => {},
    }: Props = $props();

    const focusInput = (node: HTMLInputElement): void => {
        node.focus();
        node.select();
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "Enter") {
            onCommit(value);
        } else if (event.key === "Escape") {
            onCancel();
        }
    };

    const handleStart = (event: MouseEvent): void => {
        if (stopPropagationOnStart) {
            event.stopPropagation();
        }

        onStart();
    };
</script>

{#if editing}
    <input
        use:focusInput
        class={inputClass}
        {placeholder}
        bind:value
        onkeydown={handleKeyDown}
        onblur={() => onCommit(value)}
    />
{:else}
    {#if showText}
        <span class={cn(textClass)}>{display}</span>
    {/if}
    {#if showButton}
        <button class={cn(buttonClass)} onclick={handleStart} {title}>
            <Pencil class={iconClass} />
        </button>
    {/if}
{/if}
