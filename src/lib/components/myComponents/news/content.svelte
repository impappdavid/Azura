<script>
    import icon38 from "$lib/imgs/icons/icon38.png";
    import icon38Flip from "$lib/imgs/icons/icon38Flip.png";
    import icon38Mirror from "$lib/imgs/icons/icon38Mirror.png";
    import icon38MirrorTop from "$lib/imgs/icons/icon38MirrorTop.png";
    import icon22 from "$lib/imgs/icons/icon22.png";
    import icon22Right from "$lib/imgs/icons/icon22Right.png";
    import Card from "./card.svelte";
</script>

<div
    class="relative w-full h-screen bg-zinc-950 pt-20 pb-8 flex flex-col gap-16 transition-all ease-in-out duration-300"
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
    <div class="flex justify-between h-screen">
        <div
            class="flex flex-col w-full max-w-[50px] justify-between items-start animate-[slideinLeft_1s_ease-in-out]"
        >
            <img src={icon38} alt="icon" class="w-16 h-34" />
            <img src={icon22} alt="icon" class="w-14 h-28" />
            <img src={icon38Flip} alt="icon" class="w-16 h-34" />
        </div>

        <div
            class="w-full max-w-3xl flex flex-col sm:grid grid-cols-3 font-body gap-4 py-4 animate-[reveal_3s_ease-in-out]"
        >
            <Card />
        </div>

        <div
            class="flex flex-col w-full max-w-[50px] justify-between items-end animate-[slideinRight_1s_ease-in-out]"
        >
            <img
                src={icon38MirrorTop}
                alt="icon"
                class="w-16 h-34 transform scaleX(-1)"
            />
            <img src={icon22Right} alt="icon" class="w-14 h-28" />
            <img src={icon38Mirror} alt="icon" class="w-16 h-34" />
        </div>
    </div>
</div>
