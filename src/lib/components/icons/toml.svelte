<script lang="ts">
    import type { IconProps } from "@lucide/svelte";
    import { cn } from "$lib/components/utils";

    let { size, class: className }: IconProps = $props();
</script>

<!-- https://simpleicons.org/?q=toml -->
<svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    class={cn("lucide lucide-icon lucide-toml", className)}
>
    <path
        d="M.014 0h5.34v2.652H2.888v18.681h2.468V24H.015V0Zm17.622 5.049v2.78h-4.274v12.935h-3.008V7.83H6.059V5.05h11.577ZM23.986 24h-5.34v-2.652h2.467V2.667h-2.468V0h5.34v24Z"
    />
</svg>

<style>
    .lucide-toml {
        stroke: #9c4121;
        fill: #9c4121;
    }
</style>
