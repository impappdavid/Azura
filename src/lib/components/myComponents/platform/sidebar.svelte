<script>
    import * as HoverCard from "$lib/components/ui/hover-card";
</script>

<div class="flex flex-col gap-2 items-end py-4 fixed top-24">
    <!--Home-->
    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../../platform/home"
                aria-label="about us"
                class="text-xs hover:border-2 p-1 w-8 h-8 flex items-center justify-center text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-home"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M5 12l-2 0l9 -9l9 9l-2 0"
                    /><path
                        d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
                    /><path
                        d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
                    /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Home</div>
        </HoverCard.Content>
    </HoverCard.Root>

    <!--Market-->
    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../../platform/market"
                aria-label="about us"
                class="text-xs hover:border-2 p-1 w-8 h-8 flex items-center justify-center text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M3 21l18 0"
                    /><path
                        d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
                    /><path d="M5 21l0 -10.15" /><path
                        d="M19 21l0 -10.15"
                    /><path
                        d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
                    /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Market</div>
        </HoverCard.Content>
    </HoverCard.Root>

    <!--Auction-->
    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../../platform/auction"
                aria-label="about us"
                class="text-xs hover:border-2 p-1 w-8 h-8 flex items-center justify-center text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-gavel"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385"
                    /><path d="M6 9l4 4" /><path d="M13 10l-4 -4" /><path
                        d="M3 21h7"
                    /><path
                        d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z"
                    /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Auction</div>
        </HoverCard.Content>
    </HoverCard.Root>

    <!--Invest-->
    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../../platform/invest"
                aria-label="about us"
                class="text-xs hover:border-2 p-1 w-8 h-8 flex items-center justify-center text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-chart-line"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M4 19l16 0"
                    /><path d="M4 15l4 -6l4 2l4 -5l4 4" /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Invest</div>
        </HoverCard.Content>
    </HoverCard.Root>

    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../platform/home"
                aria-label="about us"
                class="text-xs hover:border-2 p-1 w-8 h-8 flex items-center justify-center text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-shirt"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0"
                    /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Assets</div>
        </HoverCard.Content>
    </HoverCard.Root>

    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../../platform/home"
                aria-label="about us"
                class="text-xs hover:border-2 p-1 w-8 h-8 flex items-center justify-center text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-up"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M17 11v6l-5 -4l-5 4v-6l5 -4z"
                    /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Upgrade</div>
        </HoverCard.Content>
    </HoverCard.Root>

    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../../platform/merge"
                aria-label="about us"
                class="text-xs hover:border-2 p-1 w-8 h-8 flex items-center justify-center text-zinc-400 hover:border-[#9487e0b2] hover:text-[#ab9ff2] backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-layers-intersect-2"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M8 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
                    /><path
                        d="M4 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
                    /><path d="M9 15l6 -6" /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Merge</div>
        </HoverCard.Content>
    </HoverCard.Root>

    <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger
            href="https://github.com/sveltejs"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
        >
            <a
                href="../../platform/home"
                aria-label="about us"
                class="text-xs border-2 p-1 w-8 h-8 flex items-center justify-center border-[#9487e0b2] text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-photo-ai"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M15 8h.01"
                    /><path
                        d="M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5"
                    /><path
                        d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1"
                    /><path d="M14 21v-4a2 2 0 1 1 4 0v4" /><path
                        d="M14 19h4"
                    /><path d="M21 15v6" /></svg
                >
            </a>
        </HoverCard.Trigger>
        <HoverCard.Content
            class="w-fit px-2 py-1 border-[#9487e0b2] text-[#ab9ff2]"
            side="right"
        >
            <div class="flex justify-between space-x-4 text-sm">Generate</div>
        </HoverCard.Content>
    </HoverCard.Root>
</div>
