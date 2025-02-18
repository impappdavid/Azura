<script>
    import Season1 from "$lib/components/myComponents/characters/season1.svelte";
    import Navbar from "$lib/components/myComponents/navbar.svelte";
</script>

<Navbar />
<div
    class="relative w-full h-full sm:h-screen  bg-zinc-950 pt-20 pb-8 flex flex-col gap-16 transition-all ease-in-out duration-300"
>
    <!-- SVG Noise Overlay -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
        <svg class="w-full h-full">
            <filter id="noise">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="3"
                    stitchTiles="stitch"
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" fill="white"
            ></rect>
        </svg>
    </div>
    <Season1 />
</div>
