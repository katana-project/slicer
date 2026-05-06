<script lang="ts">
    import { onDestroy } from "svelte";
    import type { PaneProps } from "$lib/components/pane";
    import { t } from "$lib/i18n";
    import { Loading } from "$lib/components/ui/loading";
    import { cn } from "$lib/components/utils";
    import { Disc3 } from "@lucide/svelte";

    let { tab }: PaneProps = $props();
    const entry = $derived(tab.entry!);

    let canvasWidth = $state(0);

    let videoElement = $state<HTMLVideoElement>();
    let videoHeight = $state(0);
    $effect(() => {
        videoElement?.addEventListener("resize", () => {
            videoHeight = videoElement!.videoHeight;
        });
    });

    let isPlaying = $state(false);
    const timeout = setInterval(() => {
        if (!videoElement) {
            isPlaying = false;
            return;
        }

        isPlaying =
            videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2;
    }, 100);
    onDestroy(() => clearInterval(timeout));

    let canvas = $state<HTMLCanvasElement>();

    let audioContext: AudioContext;
    let analyser: AnalyserNode;
    let source: MediaElementAudioSourceNode;
    let animationFrame: number;
    let isInitialized = false;

    const HEIGHT = 128;
    const setupAudio = () => {
        if (!videoElement || !canvas || isInitialized) return;
        isInitialized = true;

        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(videoElement);

        source.connect(analyser);
        analyser.connect(audioContext.destination);

        analyser.fftSize = 512;
        analyser.minDecibels = -80;
        analyser.maxDecibels = -10;
        analyser.smoothingTimeConstant = 0.85;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const draw = () => {
            animationFrame = requestAnimationFrame(draw);
            if (!canvas || !canvasWidth) return;

            const WIDTH = canvasWidth;

            canvas.width = WIDTH;
            canvas.height = HEIGHT;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            analyser.getByteFrequencyData(dataArray);
            ctx.clearRect(0, 0, WIDTH, HEIGHT);

            const barColor = window.getComputedStyle(document.body).getPropertyValue("--color-primary");
            const barWidth = WIDTH / bufferLength;
            let barHeight,
                x = 0;
            for (let i = 0; i < bufferLength; i++) {
                barHeight = (dataArray[i] / 255) * HEIGHT;

                ctx.fillStyle = barColor;
                ctx.fillRect(x, HEIGHT - barHeight, Math.max(1, barWidth - 1), barHeight);

                x += barWidth;
            }
        };

        draw();
    };

    const createURL = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        onDestroy(() => {
            URL.revokeObjectURL(url);
            if (animationFrame) cancelAnimationFrame(animationFrame);
            if (audioContext && audioContext.state !== "closed") {
                audioContext.close();
            }
        });

        return url;
    };
</script>

{#await entry.data.blob()}
    <Loading value={$t("pane.media.loading")} timed />
{:then blob}
    <div class="bg-background flex h-full w-full flex-col overflow-hidden">
        <div class="relative flex min-h-0 flex-1 items-center justify-center p-8">
            <div class={cn("bg-muted absolute z-0 rounded-full p-6 opacity-50", isPlaying && "animate-spin")}>
                <Disc3 size={64} />
            </div>
            <!-- svelte-ignore a11y_media_has_caption -->
            <video
                bind:this={videoElement}
                onplay={setupAudio}
                src={createURL(blob)}
                controls
                class={cn(
                    "z-10 max-h-full max-w-full overflow-hidden rounded-md border bg-black/5 shadow-xl ring-1 ring-black/5 dark:ring-white/10",
                    videoHeight > 0 || "h-full w-full"
                )}
                crossorigin="anonymous"
            ></video>
        </div>
        <div bind:clientWidth={canvasWidth} class="border-border bg-muted/30 w-full flex-none border-t">
            <canvas bind:this={canvas} height={HEIGHT} width={canvasWidth} class="w-full opacity-90"></canvas>
        </div>
    </div>
{/await}

<style>
    /* noinspection CssInvalidPseudoSelector */
    video::-webkit-media-controls-enclosure {
        border-radius: 0;
    }
</style>
