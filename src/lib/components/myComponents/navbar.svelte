<script>
    import Button from "../ui/button/button.svelte";
    import * as HoverCard from "$lib/components/ui/hover-card";

    // Separate state variables for each hover card
    let isSocialsOpen = false;
</script>

<nav class="flex w-full p-4 justify-between items-center fixed top-0 z-50">
    <div class="flex items-center w-full max-w-36">
        <a
            href="../"
            class="bg-[#df2623] hover:bg-[#df2623cc] px-2 py-0.5 font-bold text-white text-lg rounded-md transition-all font-logo"
            >AZURA</a
        >
    </div>
    <div class="flex items-center">
        <a
            href="../"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >ABOUT</a
        >

        <a
            href="../../azurox"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >AZUROX</a
        >

        <HoverCard.Root
            bind:open={isSocialsOpen}
            class="group"
            openDelay={0}
            closeDelay={0}
        >
            <HoverCard.Trigger
                
                rel="noreferrer noopener"
                class="group font-medium tracking-wide font-body text-sm px-3  py-1.5 rounded-full transition-all cursor-default flex items-center {isSocialsOpen ? 'bg-white/90 text-black' : 'hover:bg-white/90 hover:text-black text-white'}"
            >
                SOCIALS
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
                class="w-64 flex flex-col gap-1 p-0.5 bg-[#eaebe5]"
            >
                <div class=" bg-white flex flex-col drop-shadow-md rounded-md">
                    <div
                        class="flex justify-between items-center py-1 px-1 rounded-md border-b"
                    >
                        <div class="text-xs font-body text-zinc-600">AZURA</div>
                    </div>
                    <a
                        href="#"
                        class="py-2 px-1 rounded-md flex gap-3 font-body hover:opacity-80 transition-all ease-in-out border-b items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            ><path
                                fill="none"
                                stroke="#040404"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                color="#040404"
                            /></svg
                        >
                        Twitter
                    </a>
                    <a
                        href="#"
                        class="py-2 px-1 rounded-md flex gap-3 font-body hover:opacity-80 transition-all ease-in-out border-b items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28.45"
                            height="20"
                            viewBox="0 0 256 180"
                            ><path
                                fill="#f00"
                                d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                            /><path
                                fill="#fff"
                                d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                            /></svg
                        >
                        YouTube
                    </a>
                </div>
                <div class=" bg-white flex flex-col drop-shadow-md rounded-md">
                    <div
                        class="flex justify-between items-center py-1 px-1 rounded-md border-b"
                    >
                        <div class="text-xs font-body text-zinc-600">
                            AZUROX
                        </div>
                    </div>
                    <a
                        href="#"
                        class="py-2 px-1 rounded-md flex gap-3 font-body hover:opacity-80 transition-all ease-in-out border-b items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            ><path
                                fill="none"
                                stroke="#040404"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                color="#040404"
                            /></svg
                        >
                        Twitter
                    </a>
                    <a
                        href="#"
                        class="py-2 px-1 rounded-md flex gap-3 font-body hover:opacity-80 transition-all ease-in-out border-b items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28.45"
                            height="20"
                            viewBox="0 0 256 180"
                            ><path
                                fill="#f00"
                                d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                            /><path
                                fill="#fff"
                                d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                            /></svg
                        >
                        YouTube
                    </a>
                </div>
            </HoverCard.Content>
        </HoverCard.Root>
        <a
            href="../"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >MARKET</a
        >
        <a
            href="../"
            class="font-medium tracking-wide font-body text-sm px-3 hover:bg-white/90 hover:text-black text-white py-1.5 rounded-full transition-all"
            >GENERATE</a
        >
    </div>
    <div class="flex items-center max-w-36">
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
</nav>
