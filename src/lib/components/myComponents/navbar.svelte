<script>
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import icon8 from "$lib/imgs/icons/icon8.png";
    import icon19 from "$lib/imgs/icons/icon19.png";
    import icon40 from "$lib/imgs/icons/icon40.png";
    import hamburger from "$lib/imgs/icons/hamburger.png";
</script>

<nav class="flex w-full p-4 justify-between items-center fixed top-0 z-50">
    <div class="flex lg:hidden">
        <Sheet.Root>
            <Sheet.Trigger class="bg-transparent outline-none ">
                <div
                class="text-xs border-2 p-1 px-2 border-zinc-600 text-zinc-400 transition-all ease-in-out duration-300 w-fit max-w-[100px] backdrop-blur-md"
                >OPEN MENU</div
            >
            </Sheet.Trigger>
            <Sheet.Content
                side="bottom"
                class="h-full bg-zinc-950/80 backdrop-blur-xs flex flex-col gap-8"
            >
                <Sheet.Header>
                    <Sheet.Title
                        ><img
                            src={icon40}
                            alt="asd"
                            class="w-16 h-12 hover:cursor-pointer hover:rotate-180 transition-all ease-in-out duration-300"
                        /></Sheet.Title
                    >
                </Sheet.Header>
                <div class="flex flex-col gap-2">
                    <a
                        href="../../characters"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">CHARACTERS</div>
                    </a>
                    <a
                        href="../../about"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">ABOUT US</div>
                    </a>
                    <a
                        href="../../news"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">NEWS</div>
                    </a>
                    <a
                        href="../"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">CONTACT</div>
                    </a>
                </div>
            </Sheet.Content>
        </Sheet.Root>
    </div>
    <div class="hidden lg:flex gap-8 w-full max-w-md">
        <img
            src={icon8}
            alt="asd"
            class="w-16 h-12 animate-[slideinLeft_1s_ease-in-out]"
        />
        <div
            class="flex gap-3 items-center font-body animate-[slideinFromTop_3s_ease-in-out]"
        >
            <a
                href="../../characters"
                aria-label="characters"
                class="text-xs border-2 p-1 px-2 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                >CHARACTERS</a
            >
            <a
                href="../../about"
                aria-label="about us"
                class="text-xs border-2 p-1 px-2 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                >ABOUT US</a
            >
            <a
                href="../../news"
                aria-label="news"
                class="text-xs border-2 p-1 px-2 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                >NEWS</a
            >
        </div>
    </div>
    <div class="">
        <a href="../../" aria-label="home">
            <img
                src={icon40}
                alt="asd"
                class="w-16 h-12 hover:cursor-pointer hover:rotate-180 transition-all ease-in-out duration-300"
            />
        </a>
    </div>
    <div class="hidden lg:flex w-full max-w-md justify-end gap-8">
        <div
            class="flex gap-3 items-center font-body animate-[slideinFromTop_3s_ease-in-out]"
        >
        
    <a
                href="/"
                aria-label="about us"
                class="text-xs border-2 p-1 px-1 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
        
                </a
            >
            <a
                href="/"
                aria-label="about us"
                class="text-xs border-2 p-1 px-2 border-[#9487e0b2] text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                >PLATFORM</a
            >
        </div>
        <img
            src={icon19}
            alt="asd"
            class="w-16 h-12 animate-[slideinRight_1s_ease-in-out]"
        />
    </div>
    <div class="lg:hidden flex">
        <a
            href="/"
            aria-label="about us"
            class="text-xs border-2 p-1 px-2 border-[#9487e0b2] text-[#ab9ff2] transition-all ease-in-out duration-300 w-fit max-w-[100px] backdrop-blur-md"
            >PLATFORM</a
        >
    </div>
</nav>
