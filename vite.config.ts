import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), svelte()],
    build: {
        sourcemap: "hidden",
        rolldownOptions: {
            checks: {
                pluginTimings: false,
            },
            output: {
                comments: false,
            },
        },
    },
    optimizeDeps: {
        // Vite doesn't like WASM fetches
        exclude: ["@run-slicer/jasm", "@run-slicer/vf", "@run-slicer/cfr", "@run-slicer/procyon"],
    },
    server: {
        fs: {
            strict: false,
        },
    },
    resolve: {
        alias: {
            $lib: resolve("./src/lib"),
        },
    },
    worker: {
        format: "es",
    },
    envPrefix: "WORKERS_CI_", // expose Workers CI env variables
    define: {
        // expose some GitHub Actions env variables
        "import.meta.env.GITHUB_REF_NAME": JSON.stringify(process.env.GITHUB_REF_NAME || ""),
        "import.meta.env.GITHUB_SHA": JSON.stringify(process.env.GITHUB_SHA || ""),
    },
});
