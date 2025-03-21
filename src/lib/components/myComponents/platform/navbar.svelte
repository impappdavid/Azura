<script>
    import * as Sheet from "$lib/components/ui/sheet";
    import icon10 from "$lib/imgs/icons/icon10.png";
    import icon40 from "$lib/imgs/icons/icon40.png";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<nav
    class="flex w-full p-4 justify-between items-center fixed top-0 z-50 sm:px-4"
>
    <div class="flex lg:hidden">
        <Sheet.Root>
            <Sheet.Trigger class="bg-transparent w-full outline-none ">
                <div
                    aria-label="about us"
                    class="text-xs border-2 p-1 px-2 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
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
                        class="icon icon-tabler icons-tabler-outline icon-tabler-align-left"
                        ><path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        /><path d="M4 6l16 0" /><path d="M4 12l10 0" /><path
                            d="M4 18l14 0"
                        /></svg
                    >
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
                        href="../../../platform/home"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">HOME</div>
                    </a>
                    <a
                        href="../../../platform/market"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">MARKET</div>
                    </a>
                    <a
                        href="../../../platform/auction"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">AUCTION</div>
                    </a>
                    <a
                        href="../../../platform/invest"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">INVEST</div>
                    </a>
                    <div
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">SOON</div>
                    </div>
                    <a
                        href="../../../platform/upgrade"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">UPGRADE</div>
                    </a>
                    <a
                        href="../../../platform/merge"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">MERGE</div>
                    </a>
                    <a
                        href="../../../platform/generate"
                        class=" text-white px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">GENERATE</div>
                    </a>
                </div>
            </Sheet.Content>
        </Sheet.Root>
    </div>
    <div class="hidden lg:flex gap-6 items-center font-body">
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
            class="w-8 h-8 hidden sm:flex animate-[slideinLeft_1s_ease-in-out]"
        />

        <div
            class="text-xs border-2 p-1 px-2 text-zinc-400 transition-all ease-in-out duration-300 backdrop-blur-md hidden sm:flex items-center"
        >
            TOTAL NFTS / 7
        </div>
        <div
            class="text-xs border-2 p-1 px-2 text-zinc-400 transition-all ease-in-out duration-300 backdrop-blur-md hidden sm:flex items-center"
        >
            TOTAL ASSETS / 0
        </div>
    </div>

    <div class=" flex w-full justify-end gap-8">
        <div
            class="flex gap-3 items-center font-body animate-[slideinFromTop_3s_ease-in-out]"
        >
            <DropdownMenu.Root>
                <DropdownMenu.Trigger class="outline-none">
                    <div
                        aria-label="about us"
                        class="text-xs border-2 p-1 px-2 text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
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
                            class="icon icon-tabler icons-tabler-outline icon-tabler-lego"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path d="M9.5 11l.01 0" /><path
                                d="M14.5 11l.01 0"
                            /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><path
                                d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"
                            /></svg
                        >
                    </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content  class="rounded-none bg-zinc-900">
                    <DropdownMenu.Group class="rounded-none bg-zinc-900">
                        <DropdownMenu.Item
                            class="rounded-none bg-zinc-900 cursor-pointer"
                            >Disconnect Wallet</DropdownMenu.Item
                        >
                        <DropdownMenu.Item
                            class="rounded-none bg-zinc-900 text-red-500 hover:text-red-500 cursor-pointer"
                            onclick={() => (window.location.href = "/")}
                            >Log out</DropdownMenu.Item
                        >
                    </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </div>
</nav>
