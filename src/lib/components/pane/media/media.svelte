<script lang="ts">
    import { onDestroy } from "svelte";
    import type { PaneProps } from "$lib/components/pane";
    import { t } from "$lib/i18n";
    import { Loading } from "$lib/components/ui/loading";

    let { tab }: PaneProps = $props();
    const entry = $derived(tab.entry!);

    let measureTape = $state<HTMLDivElement>();

    let mediaElement = $state<HTMLMediaElement>();
    let canvas = $state<HTMLCanvasElement>();

    let audioContext: AudioContext;
    let analyser: AnalyserNode;
    let source: MediaElementAudioSourceNode;
    let animationFrame: number;
    let isInitialized = false;

    const HEIGHT = 128;
    const setupAudio = () => {
        if (!mediaElement || !canvas || isInitialized) return;
        isInitialized = true;

        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(mediaElement);

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
            if (!canvas) return;

            const WIDTH = measureTape!.offsetWidth;

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

<div bind:this={measureTape} class="w-full"></div>
{#await entry.data.blob()}
    <Loading value={$t("pane.media.loading")} timed />
{:then blob}
    <div class="flex h-full w-full flex-col items-center justify-center p-4">
        <!-- svelte-ignore a11y_media_has_caption -->
        <video
            bind:this={mediaElement}
            onplay={setupAudio}
            src={createURL(blob)}
            controls
            class="max-h-full max-w-full"
            crossorigin="anonymous"
        ></video>
    </div>
    <canvas bind:this={canvas} height={HEIGHT} width={measureTape.offsetWidth} class="border-b-primary border-b"
    ></canvas>
{/await}
