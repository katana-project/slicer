<script lang="ts">
    import { Pencil } from "@lucide/svelte";
    import { cn } from "$lib/components/utils";

    interface Props {
        editing: boolean;
        value: string;
        display: string;
        placeholder: string;
        renameTitle: string;
        showText?: boolean;
        showButton?: boolean;
        textClass?: string;
        inputClass?: string;
        buttonClass?: string;
        pencilClass?: string;
        stopPropagationOnStart?: boolean;
        onStart?: () => void;
        onCommit?: (value: string) => void;
        onCancel?: () => void;
    }

    let {
        editing,
        value = $bindable(),
        display,
        placeholder,
        renameTitle,
        showText = true,
        showButton = true,
        textClass,
        inputClass,
        buttonClass,
        pencilClass = "size-3.5",
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
        <span class={cn(textClass)}>
            {display}
        </span>
    {/if}
    {#if showButton}
        <button class={cn(buttonClass)} onclick={handleStart} title={renameTitle}>
            <Pencil class={pencilClass} />
        </button>
    {/if}
{/if}
