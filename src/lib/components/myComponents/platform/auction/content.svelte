<script>
    

    import Input from "$lib/components/ui/input/input.svelte";
    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import auro from "$lib/imgs/goldenretriver.jpg";
    import Sidebar from "./sidebar.svelte";
    import AuctionCard from "./auctionCard.svelte";

    const rarity = [
        { value: "lowtohigh", label: "Price: low to high" },
        { value: "hightolow", label: "Price: high to low" },
        { value: "recentlylisted", label: "Recently listed" },
    ];

    const data = [
        {
            character: "Lena",
            url: def1,
            tokenId: 3070,
            ownedBy: "0xab...xl2s",
            price: 2.49,
            rarity: "common",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Kai",
            url: def3,
            tokenId: 17,
            ownedBy: "0xab...xl2s",
            price: 1.28,
            rarity: "rare",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
                {
                    outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Noah",
            url: def4,
            tokenId: 231,
            ownedBy: "0xab...xl2s",
            price: 0.05,
            rarity: "uncommon",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
                {
                    outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Kai",
            url: def3,
            tokenId: 3251,
            ownedBy: "0xab...xl2s",
            price: 12.14,
            rarity: "legendary",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
                {
                    outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Lena",
            url: def1,
            tokenId: 3070,
            ownedBy: "0xab...xl2s",
            price: 2.49,
            rarity: "epic",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Auro",
            url: auro,
            tokenId: 231,
            ownedBy: "0xab...xl2s",
            price: 0.12,
            rarity: "rare",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
                {
                    outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Noah",
            url: def4,
            tokenId: 231,
            ownedBy: "0xab...xl2s",
            price: 0.005,
            rarity: "common",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
                {
                    outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Lena",
            url: def1,
            tokenId: 3070,
            ownedBy: "0xab...xl2s",
            price: 5,
            rarity: "legendary",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Kai",
            url: def3,
            tokenId: 3251,
            ownedBy: "0xab...xl2s",
            price: 12.14,
            rarity: "legendary",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
                {
                    outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Lena",
            url: def1,
            tokenId: 3070,
            ownedBy: "0xab...xl2s",
            price: 5,
            rarity: "uncommon",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
        {
            character: "Kai",
            url: def3,
            tokenId: 17,
            ownedBy: "0xab...xl2s",
            price: 1.28,
            rarity: "uncommon",
            isInvesment: false,
            prompt: [
                {
                    background:
                        "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
                {
                    outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
                },
            ],
        },
    ];
</script>

<div
    class="relative w-full h-fit min-h-screen bg-zinc-950 pt-20 pb-8 flex flex-col gap-16 transition-all ease-in-out duration-300"
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
                        AUCTION
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
                        ><path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        /><path
                            d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                        /><path d="M21 21l-6 -6" /></svg
                    >
                    <Input
                        type="text"
                        placeholder="Search..."
                        class="pl-10 h-7 bg-transparent rounded-none text-xs border-2"
                    />
                </div>
            </div>

            <div class="w-full h-fit grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
                <AuctionCard data={data}/>
            </div>
        </div>
    </div>
</div>
