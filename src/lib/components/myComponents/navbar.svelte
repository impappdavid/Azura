<script>
    import Button, { buttonVariants } from "../ui/button/button.svelte";
    import * as HoverCard from "$lib/components/ui/hover-card";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    // Separate state variables for each hover card
    let isSocialsOpen = false;
</script>

<nav class="flex w-full p-4 justify-between items-center fixed top-0 z-50">
    <div class="flex items-center w-full max-w-36">
        <a
            href="../"
            class="bg-[#ab9ff2] hover:bg-[#9587e0] px-2 py-0.5 font-bold text-white text-lg rounded-md transition-all font-logo"
            >AZURA</a
        >
    </div>
    <div class=" items-center sm:flex hidden">
        <a
            href="../../about"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >ABOUT</a
        >

        <a
            href="../../azurox"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >AZUROX</a
        >

        <a
            href="../../"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >TWITTER</a
        >

        <HoverCard.Root
            bind:open={isSocialsOpen}
            class="group"
            openDelay={0}
            closeDelay={0}
        >
            <HoverCard.Trigger
                rel="noreferrer noopener"
                class="group font-medium tracking-wide font-body text-sm px-3  py-1.5 rounded-full transition-all cursor-default flex items-center {isSocialsOpen
                    ? 'bg-white/90 text-black'
                    : 'hover:bg-white/90 hover:text-black text-white'}"
            >
                MARKET
                <svg
                    class={`inline-block transition-transform duration-300 ease-in-out transform ${isSocialsOpen ? "rotate-180" : "group-hover:rotate-180"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M8 10l4 4 4-4"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </HoverCard.Trigger>
            <HoverCard.Content
                class="w-64 flex flex-col gap-1 p-0.5 bg-[#eaebe5] border-white"
            >
                <div class=" bg-white flex flex-col drop-shadow-md rounded-md">
                    <a
                        href="../../market/buy"
                        class="py-2 px-1 rounded-t-md flex gap-3 font-body text-black hover:text-[#ab9ff2] transition-all ease-in-out border-b border-zinc-400 items-center font-semibold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-dollar"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                            /><path d="M13 17h-7v-14h-2" /><path
                                d="M6 5l14 1l-.575 4.022m-4.925 2.978h-8.5"
                            /><path
                                d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"
                            /><path d="M19 21v1m0 -8v1" /></svg
                        >
                        BUY
                    </a>

                    <a
                        href="../../market/auction"
                        class="py-2 px-1  flex gap-3 font-body text-black hover:text-[#ab9ff2] transition-all ease-in-out border-b border-zinc-400 items-center font-semibold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-question"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                            /><path d="M13.5 17h-7.5v-14h-2" /><path
                                d="M6 5l14 1l-.714 5m-4.786 2h-8.5"
                            /><path d="M19 22v.01" /><path
                                d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
                            /></svg
                        >
                        AUCTION
                    </a>

                    <a
                        href="../../market/invest"
                        class="py-2 px-1 rounded-md flex gap-3 font-body text-black hover:text-[#ab9ff2] transition-all ease-in-out border-b border-zinc-400 items-center font-semibold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-discount"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                            /><path d="M12.5 17h-6.5v-14h-2" /><path
                                d="M6 5l14 1l-.859 6.011m-6.141 .989h-7"
                            /><path d="M16 21l5 -5" /><path
                                d="M21 21v.01"
                            /><path d="M16 16v.01" /></svg
                        >
                        INVEST
                    </a>
                </div>
            </HoverCard.Content>
        </HoverCard.Root>
        <a
            href="../generate"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >GENERATE</a
        >
    </div>
    <div class="items-center max-w-36 sm:flex hidden">
        <a
            href="../"
            class="bg-[#ab9ff2] hover:bg-[#9587e0] px-3 py-1 font-medium text-white rounded-md font-body flex gap-1 items-center transition-all"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                ><path
                    fill="currentColor"
                    d="M5.13 19.2c2.297 0 4.023-1.92 5.053-3.436a2.9 2.9 0 0 0-.195.994c0 .885.53 1.516 1.574 1.516c1.433 0 2.965-1.208 3.758-2.51a2 2 0 0 0-.083.524c0 .617.362 1.006 1.1 1.006c2.324 0 4.663-3.959 4.663-7.421C21 7.175 19.58 4.8 16.016 4.8C9.752 4.8 3 12.154 3 16.905C3 18.771 4.044 19.2 5.13 19.2m8.729-9.622c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154m2.979 0c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154"
                /></svg
            >
            Connect
        </a>
    </div>
    <div class="sm:hidden flex">
        <Sheet.Root>
            <Sheet.Trigger class="bg-transparent outline-none ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    ><path
                        fill="none"
                        stroke="#fdfbfb"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    /></svg
                >
            </Sheet.Trigger>
            <Sheet.Content
                side="bottom"
                class="h-full bg-white/80 backdrop-blur-xs flex flex-col gap-8"
            >
                <Sheet.Header>
                    <Sheet.Title
                        ><div class="flex items-center w-full max-w-36">
                            <a
                                href="../"
                                class="bg-[#ab9ff2] hover:bg-[#9587e0] px-2 py-0.5 font-bold text-white text-lg rounded-md transition-all font-logo"
                                >AZURA</a
                            >
                        </div></Sheet.Title
                    >
                </Sheet.Header>
                <div class="flex flex-col gap-2">
                    <a
                        href="../"
                        class=" text-[#9587e0] px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">CONNECT WALLET</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            ><path
                                fill="currentColor"
                                d="M5.13 19.2c2.297 0 4.023-1.92 5.053-3.436a2.9 2.9 0 0 0-.195.994c0 .885.53 1.516 1.574 1.516c1.433 0 2.965-1.208 3.758-2.51a2 2 0 0 0-.083.524c0 .617.362 1.006 1.1 1.006c2.324 0 4.663-3.959 4.663-7.421C21 7.175 19.58 4.8 16.016 4.8C9.752 4.8 3 12.154 3 16.905C3 18.771 4.044 19.2 5.13 19.2m8.729-9.622c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154m2.979 0c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154"
                            /></svg
                        >
                    </a>
                    <a
                        href="../"
                        class=" text-black px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">ABOUT</div>
                    </a>
                    <a
                        href="../../azurox"
                        class=" text-black px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">AZUROX</div>
                    </a>
                    <a
                        href="../"
                        class=" text-black px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">SOCIALS</div>
                    </a>
                    <a
                        href="#"
                        class=" text-black px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">MARKET</div>
                    </a>
                    <a
                        href="../../market/buy"
                        class=" text-black pl-12 pr-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">BUY</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-dollar"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                            /><path d="M13 17h-7v-14h-2" /><path
                                d="M6 5l14 1l-.575 4.022m-4.925 2.978h-8.5"
                            /><path
                                d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"
                            /><path d="M19 21v1m0 -8v1" /></svg
                        >
                    </a>
                    <a
                        href="../../market/auction"
                        class=" text-black pl-12 pr-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">AUCTION</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-question"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                            /><path d="M13.5 17h-7.5v-14h-2" /><path
                                d="M6 5l14 1l-.714 5m-4.786 2h-8.5"
                            /><path d="M19 22v.01" /><path
                                d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
                            /></svg
                        >
                    </a>
                    <a
                        href="../../market/invest"
                        class=" text-black pl-12 pr-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">INVEST</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-discount"
                            ><path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            /><path
                                d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                            /><path d="M12.5 17h-6.5v-14h-2" /><path
                                d="M6 5l14 1l-.859 6.011m-6.141 .989h-7"
                            /><path d="M16 21l5 -5" /><path
                                d="M21 21v.01"
                            /><path d="M16 16v.01" /></svg
                        >
                    </a>
                    <a
                        href="../../generate"
                        class=" text-black px-3 py-2 font-medium font-body flex justify-between items-center transition-all border-b border-zinc-600/10"
                    >
                        <div class="text-2xl font-bold">GENERATE</div>
                    </a>
                </div>
            </Sheet.Content>
        </Sheet.Root>
    </div>
</nav>
