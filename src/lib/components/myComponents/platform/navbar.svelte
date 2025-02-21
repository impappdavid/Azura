<script>
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import icon44 from "$lib/imgs/icons/icon44.png";
    import icon10 from "$lib/imgs/icons/icon10.png";
    import icon19 from "$lib/imgs/icons/icon19.png";
    import icon40 from "$lib/imgs/icons/icon40.png";
</script>

<nav class="flex w-full p-4 justify-between items-center fixed top-0 z-50 sm:px-4">
    <div class="flex lg:hidden">
        <Sheet.Root>
            <Sheet.Trigger class="bg-transparent outline-none ">
                <div
                    class="text-xs border-2 p-1 px-2 border-zinc-600 text-zinc-400 transition-all ease-in-out duration-300 w-fit max-w-[100px] backdrop-blur-md"
                >
                    OPEN MENU
                </div>
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
    <div class="flex gap-6 items-center font-body">
        <a href="../../" aria-label="home">
            <img
                src={icon40}
                alt="asd"
                class="w-16 h-12 hover:cursor-pointer hover:rotate-180 transition-all ease-in-out duration-300"
            />
        </a>
        <img
            src={icon10}
            alt="asd"
            class="w-8 h-8 animate-[slideinLeft_1s_ease-in-out]"
        />
        <div
            class="text-xs border-2 p-1 px-2 text-zinc-400 transition-all ease-in-out duration-300 backdrop-blur-md flex items-center"
        >
            /PLATFROM/HOME
        </div>
        <img
            src={icon10}
            alt="asd"
            class="w-8 h-8 animate-[slideinLeft_1s_ease-in-out]"
        />
        <div
            class="text-xs border-2 p-1 px-2 text-zinc-400 transition-all ease-in-out duration-300 backdrop-blur-md flex items-center"
        >
            TOTAL NFTS / 6
        </div>
        <div
            class="text-xs border-2 p-1 px-2 text-zinc-400 transition-all ease-in-out duration-300 backdrop-blur-md flex items-center"
        >
            TOTAL ASSETS / 0
        </div>
    </div>

    <div class="hidden lg:flex w-full max-w-md justify-end gap-8">
        <div
            class="flex gap-3 items-center font-body animate-[slideinFromTop_3s_ease-in-out]"
        >
            <a
                href="../../platform/home"
                aria-label="about us"
                class="text-xs border-2 p-1 px-2  text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-bell"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                    /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg
                ></a
            >
            <a
            href="../../platform/home"
            aria-label="about us"
            class="text-xs border-2 p-1 px-2  text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-lego"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M9.5 11l.01 0"
                /><path d="M14.5 11l.01 0" /><path
                    d="M9.5 15a3.5 3.5 0 0 0 5 0"
                /><path
                    d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"
                /></svg
            >
        </a>
        </div>
    </div>
    <div class="lg:hidden flex">
        <a
            href="../../platform/home"
            aria-label="about us"
            class="text-xs border-2 p-1 px-2 border-zinc-600 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-lego"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M9.5 11l.01 0"
                /><path d="M14.5 11l.01 0" /><path
                    d="M9.5 15a3.5 3.5 0 0 0 5 0"
                /><path
                    d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"
                /></svg
            >
        </a>
    </div>
</nav>
