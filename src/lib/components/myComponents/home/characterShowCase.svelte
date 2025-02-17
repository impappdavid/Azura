<script>
    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import kai from "$lib/imgs/kai.png";
    import auro from "$lib/imgs/goldenretriver.jpg";
</script>

<div class="relative w-full h-screen bg-zinc-950 py-24 flex flex-col gap-16">
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
    <div class="flex justify-center gap-8">
    </div>
</div>

<style>
   
</style>
