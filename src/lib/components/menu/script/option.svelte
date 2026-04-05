<script lang="ts">
    import ScriptOption from "./option.svelte";
    import {
        MenubarCheckboxItem,
        MenubarItem,
        MenubarRadioGroup,
        MenubarRadioItem,
        MenubarSeparator,
        MenubarSub,
        MenubarSubContent,
        MenubarSubTrigger,
    } from "$lib/components/ui/menubar";
    import type { CheckboxOption, GroupOption, Option, RadioOption } from "@run-slicer/script";
    import type { ProtoScript } from "$lib/script";
    import { t } from "$lib/i18n";
    import IconComponent from "$lib/components/icon.svelte";

    interface Props {
        inset?: boolean;
        proto: ProtoScript;
        option: Option;
    }

    let { inset, proto, option }: Props = $props();

    let label = $derived($t(option.label || option.id));

    const groupOption = $derived(option as GroupOption);

    const handleButton = () => {
        proto.context?.dispatchEvent({ type: "option_change", option });
    };

    const checkboxOption = $derived(option as CheckboxOption);
    const handleCheckbox = (checked: boolean | "indeterminate") => {
        // @ts-ignore
        // noinspection JSConstantReassignment
        checkboxOption.checked = Boolean(checked);
        proto.context?.dispatchEvent({ type: "option_change", option });
    };

    const radioOption = $derived(option as RadioOption);
    const handleRadio = (value: string | undefined) => {
        // @ts-ignore
        // noinspection JSConstantReassignment
        radioOption.selected = value!;
        proto.context?.dispatchEvent({ type: "option_change", option });
    };
</script>

{#if option.type === "group"}
    <!-- weird inset behavior/bug, false doesn't make the inset go away, but undefined does -->
    {@const hasCheckbox = groupOption.options.some((o) => o.type === "checkbox") ? true : undefined}
    <MenubarSub>
        <MenubarSubTrigger {inset}>{label}</MenubarSubTrigger>
        <MenubarSubContent class="max-h-96 min-w-48 overflow-y-auto">
            {#each groupOption.options as subOption (subOption.id)}
                <ScriptOption inset={hasCheckbox} {proto} option={subOption} />
            {/each}
        </MenubarSubContent>
    </MenubarSub>
{:else if option.type === "button"}
    <MenubarItem {inset} class="justify-between" onclick={handleButton}>
        {label}
        {#if option.icon}
            <IconComponent icon={option.icon} />
        {/if}
    </MenubarItem>
{:else if option.type === "checkbox"}
    <MenubarCheckboxItem class="justify-between" checked={checkboxOption.checked} onCheckedChange={handleCheckbox}>
        {label}
        {#if option.icon}
            <IconComponent icon={option.icon} />
        {/if}
    </MenubarCheckboxItem>
{:else if option.type === "radio"}
    <MenubarSub>
        <MenubarSubTrigger {inset}>{label}</MenubarSubTrigger>
        <MenubarSubContent class="max-h-96 min-w-48 overflow-y-auto">
            <MenubarRadioGroup value={radioOption.selected} onValueChange={handleRadio}>
                {#each radioOption.items as subOption (subOption.id)}
                    <MenubarRadioItem value={subOption.id}>{$t(subOption.label || subOption.id)}</MenubarRadioItem>
                {/each}
            </MenubarRadioGroup>
        </MenubarSubContent>
    </MenubarSub>
{:else if option.type === "separator"}
    <MenubarSeparator />
{/if}
