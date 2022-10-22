<div id="hero" class="h-screen">
    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
</div>

<script>
    import { onMount } from "svelte";
    onMount(async() => {

        // @ts-ignore
        VANTA.GLOBE({
        el: '#hero',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3fc6ff
    })
    });
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"></script>
</svelte:head>