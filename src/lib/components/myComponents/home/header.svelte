<script>
    import icon38 from "$lib/imgs/icons/icon38.png";
    import icon38Flip from "$lib/imgs/icons/icon38Flip.png";
    import icon38Mirror from "$lib/imgs/icons/icon38Mirror.png";
    import icon38MirrorTop from "$lib/imgs/icons/icon38MirrorTop.png";
    import icon22 from "$lib/imgs/icons/icon22.png";
    import icon22Right from "$lib/imgs/icons/icon22Right.png";

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
        <div class="flex flex-col w-full max-w-xs justify-between items-start animate-[slideinLeft_1s_ease-in-out]">
            <img src={icon38} alt="icon" class="w-16 h-34" />
            <img src={icon22} alt="icon" class="w-14 h-28" />
            <img src={icon38Flip} alt="icon" class="w-16 h-34" />
        </div>

        <div
            class="w-full flex justify-center items-center flex-col text-center font-body gap-4 animate-[slideinFromTop_3s_ease-in-out]"
        >
            <div class="text-xs md:text-lg text-zinc-400 ">
                Mint, trade, and evolve your NFTs on Solana!
            </div>
            <div class="text-4xl md:text-6xl font-bold">
                Revolutionizing NFTs <br />
                <div class="flex lg:flex-nowrap flex-wrap gap-2 items-center justify-center mt-3"> 
                    <div class="border-2 border-[#F4C477c7] text-[#F4C477] text-4xl lg:text-6xl p-1.5 px-2 font-medium hover:bg-[#F4C477] hover:text-black transition-all ease-in-out duration-300 cursor-default">
                        Own
                    </div>
                    <div class="border-2 border-[#6FCF97c7] text-[#6FCF97] text-4xl lg:text-6xl p-1.5 px-2 font-medium  hover:bg-[#6FCF97] hover:text-black transition-all ease-in-out duration-300 cursor-default">Invest</div>
                    <div class="border-2 border-[#7FA9F5c7] text-[#7FA9F5] text-4xl lg:text-6xl p-1.5 px-2 font-medium  hover:bg-[#7FA9F5] hover:text-black transition-all ease-in-out duration-300 cursor-default">Upgrade</div>
                    <div class="border-2 border-[#9D82F7c7] text-[#9D82F7] text-4xl lg:text-6xl p-1.5 px-2 font-medium  hover:bg-[#9D82F7] hover:text-black transition-all ease-in-out duration-300 cursor-default">Merge</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col w-full max-w-xs justify-between items-end animate-[slideinRight_1s_ease-in-out]">
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
