<script>
    
    import Sidebar from "../sidebar.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import OwnCard from "./ownCard.svelte";

   

</script>

<div
    class="relative w-full h-fit min-h-screen bg-zinc-950 pt-20 pb-24 flex flex-col gap-16 transition-all ease-in-out duration-300 "
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
    <div class="flex justify-between h-full px-4 sm:px-8">
        <div
            class="hidden xl:flex flex-col w-full max-w-[50px] justify-between items-start animate-[slideinLeft_1s_ease-in-out] relative"
        >
            <Sidebar />
        </div>

        <div
            class="w-full flex flex-col font-body gap-4 py-4 sm:px-4 animate-[reveal_3s_ease-in-out]"
        >
            <div class="flex justify-between w-full">
                <div class="flex gap-4 font-body">
                    <div
                        class="text-xs border-2 p-1 px-2 border-[#9487e0b2] text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md flex items-center h-fit"
                    >
                        MY NFT
                    </div>
                </div>

                <div class="flex gap-4 font-body">
                    <div class="text-xs text-zinc-600">LIVE DATA/</div>
                    <div class="text-xs text-zinc-400">SOL &#149; $160.29</div>
                </div>
            </div>

            <div class="w-full flex justify-between">
                <div class="flex gap-2">
                    <div
                        class="text-xs border-2 p-1 w-7 h-7 flex items-center justify-center text-zinc-400 backdrop-blur-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-filter"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
                            /></svg
                        >
                    </div>
                    <div
                        class="text-xs border-2 p-1 px-2 flex items-center justify-center text-zinc-400 backdrop-blur-md hover:border-[#9487e0b2] hover:text-[#ab9ff2] cursor-pointer transition-all"
                    >
                        ALL
                    </div>
                    <div
                        class="text-xs border-2 p-1 px-2 flex items-center justify-center text-zinc-400 backdrop-blur-md hover:border-[#9487e0b2] hover:text-[#ab9ff2] cursor-pointer transition-all"
                    >
                        LATEST
                    </div>
                    
                </div>
                <div class="relative w-full max-w-32 sm:max-w-64 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-search absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                      d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                    /><path d="M21 21l-6 -6" /></svg
                  >
                  <Input type="text" placeholder="Search..." class="pl-10 h-7 bg-transparent rounded-none text-xs border-2" />
                </div>
                
            </div>

            <div class="w-full h-full grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
                <OwnCard />
            </div>
        </div>
    </div>
</div>
