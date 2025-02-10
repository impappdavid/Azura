<script>
import Button from "$lib/components/ui/button/button.svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Table from "$lib/components/ui/table";

    const nftdata = [
        {
            price: 2.45,
            from: "0n23x2734",
            updated: "9m",
            expiresin: "29d",
        },
        {
            price: 2.13,
            from: "0h75x5872",
            updated: "15m",
            expiresin: "29d",
        },
        {
            price: 2.04,
            from: "0q12x9nh2",
            updated: "20d",
            expiresin: "9d",
        },
        {
            price: 1.99,
            from: "0u23x9m12",
            updated: "34m",
            expiresin: "5d",
        },
        {
            price: 2.73,
            from: "0a1bx2c3d",
            updated: "12m",
            expiresin: "27d",
        },
        {
            price: 1.89,
            from: "0e4fx5a6b",
            updated: "4h",
            expiresin: "15d",
        },
        {
            price: 2.34,
            from: "0c7dx8e9f",
            updated: "32m",
            expiresin: "22d",
        },
        {
            price: 1.55,
            from: "0g1hx2i3j",
            updated: "7m",
            expiresin: "38d",
        },
        {
            price: 2.67,
            from: "0k4lx5m6n",
            updated: "23m",
            expiresin: "30d",
        },
        {
            price: 1.73,
            from: "0o7px8q9r",
            updated: "2h",
            expiresin: "18d",
        },
        {
            price: 2.95,
            from: "0s1tx2u3v",
            updated: "45m",
            expiresin: "40d",
        },
        {
            price: 2.1,
            from: "0w4xx5y6z",
            updated: "6m",
            expiresin: "12d",
        },
        {
            price: 1.99,
            from: "0a8bx9c0d",
            updated: "15m",
            expiresin: "20d",
        },
        {
            price: 2.82,
            from: "0e1fx2g3h",
            updated: "10m",
            expiresin: "25d",
        },
        {
            price: 1.67,
            from: "0i4jx5k6l",
            updated: "1h",
            expiresin: "10d",
        },
    ];

    const activity = [
        {
            type: "list",
            price: 3.49,
            owner: "0n23x2734",
            date: "2025/01/26",
            buyer: "-",
        },
        {
            type: "sale",
            price: 2.49,
            owner: "0n23x2734",
            date: "2025/01/26",
            buyer: "0n23x2734",
        },
        {
            type: "list",
            price: 2.49,
            owner: "0n23x2734",
            date: "2025/01/26",
            buyer: "-",
        },
        {
            type: "mint",
            price: 1,
            owner: "0x00",
            date: "2025/01/26",
            buyer: "0n23x2734",
        },
    ];

    export let data;
</script>

<Dialog.Root>
    <Dialog.Trigger class="outline-none ">
        <Button class="h-8 px-4 rounded-lg">buy</Button>
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title
                class="font-body pb-2 gap-2 text-white text-2xl flex items-center border-b border-zinc-800"
            >
                <div class="">{data.character}</div>
                <div class="">#{data.tokenId}</div>
            </Dialog.Title>
            <Dialog.Description>
                <Tabs.Root value="overview" class="w-full ">
                    <Tabs.List
                        class="flex w-full justify-start border-b border-zinc-800 text-md font-body"
                    >
                        <Tabs.Trigger value="overview"
                            >Overview</Tabs.Trigger
                        >
                        
                        <Tabs.Trigger value="activity"
                            >Activity</Tabs.Trigger
                        >
                    </Tabs.List>
                    <Tabs.Content
                        value="overview"
                        class="max-h-[500px] overflow-y-scroll"
                    >
                        <div
                            class="grid sm:grid-cols-2 w-full py-2 gap-4"
                        >
                            <div
                                class="w-full h-fit flex flex-col gap-4 col-span-2 sm:col-span-1"
                            >
                                <img
                                    src={data.url}
                                    alt="def1"
                                    class="rounded-xl"
                                />
                            </div>
                            <div
                                class="w-full h-fit flex flex-col gap-2 col-span-2 sm:col-span-1"
                            >
                                <div
                                    class="w-full flex flex-col gap-1 p-2 bg-zinc-950/80 rounded-lg justify-center"
                                >
                                    <div
                                        class=" flex text-zinc-300 justify-between items-center"
                                    >
                                        <div
                                            class="text-lg font-body"
                                        >
                                            Price
                                        </div>
                                        <div
                                            class="px-2 py-1 bg-black rounded-full font-body"
                                        >
                                            <span
                                                class="text-xs text-zinc-400"
                                                >Owned by:</span
                                            >
                                            0xab...b259
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-1 text-white items-center text-lg font-body"
                                    >
                                        {data.price}
                                        <span
                                            class="text-zinc-400 text-sm"
                                            >SOL</span
                                        >
                                        <div
                                            class="text-sm text-zinc-400"
                                        >
                                            | ${data.price *
                                                200}
                                        </div>
                                    </div>
                                    <Button
                                        class="bg-[#df2623cc] hover:bg-[#df2623ad] font-body"
                                        >Buy</Button
                                    >
                                </div>

                                <div
                                    class="bg-zinc-950/80 grid grid-cols-2 gap-2 p-2 rounded-lg"
                                >
                                    <div
                                        class="w-full bg-zinc-900 flex flex-col gap-1 py-2 justify-center items-center rounded-md font-body"
                                    >
                                        <div
                                            class="text-zinc-400 text-sm"
                                        >
                                            List price
                                        </div>
                                        <div
                                            class="text-white text-sm"
                                        >
                                            {data.price}
                                            <span
                                                class="text-zinc-400"
                                                >SOL</span
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="w-full bg-zinc-900 flex flex-col gap-1 py-2 justify-center items-center rounded-md font-body"
                                    >
                                        <div
                                            class="text-zinc-400 text-sm"
                                        >
                                            Floor price
                                        </div>
                                        <div
                                            class="text-white text-sm"
                                        >
                                            0.49 <span
                                                class="text-zinc-400"
                                                >SOL</span
                                            >
                                        </div>
                                    </div>

                                    <div
                                        class="w-full bg-zinc-900 flex flex-col gap-1 py-2 justify-center items-center rounded-md font-body"
                                    >
                                        <div
                                            class="text-zinc-400 text-sm"
                                        >
                                            Floor diff.
                                        </div>
                                        <div
                                            class="text-white text-sm"
                                        >
                                            5000 <span
                                                class="text-zinc-400"
                                                >%</span
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="w-full bg-zinc-900 flex flex-col gap-1 py-2 justify-center items-center rounded-md font-body"
                                    >
                                        <div
                                            class="text-zinc-400 text-sm"
                                        >
                                            Top offer
                                        </div>
                                        <div
                                            class="text-white text-sm"
                                        >
                                            1.8 <span
                                                class="text-zinc-400"
                                                >SOL</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2">
                                <div
                                    class="text-white text-lg font-body"
                                >
                                    Prompt
                                </div>
                                <div
                                    class="bg-zinc-950/80 p-2 rounded-lg flex flex-col gap-2 font-body"
                                >
                                    <div class="">
                                        <div class="text-sm">
                                            Background
                                        </div>
                                        <div
                                            class="w-full bg-zinc-900 flex flex-col gap-1 py-2 justify-center items-center rounded-md"
                                        >
                                            <div
                                                class="text-xs text-zinc-400 px-2"
                                            >
                                                A sprawling
                                                futuristic
                                                metropolis at
                                                dusk,
                                                illuminated by
                                                neon lights and
                                                towering
                                                skyscrapers made
                                                of glass and
                                                steel. The
                                                streets are
                                                alive with a mix
                                                of people,
                                                autonomous
                                                vehicles, and
                                                digital
                                                billboards
                                                flashing
                                                advertisements
                                                in multiple
                                                languages.
                                                Elevated
                                                highways
                                                crisscross
                                                above, while a
                                                high-speed
                                                monorail glides
                                                between the
                                                buildings. The
                                                city skyline is
                                                a blend of
                                                cutting-edge
                                                architecture and
                                                lush rooftop
                                                gardens, with
                                                drones hovering
                                                in the sky
                                                delivering
                                                packages. A soft
                                                glow from street
                                                lamps reflects
                                                off the wet
                                                pavement,
                                                hinting at a
                                                recent rain
                                                shower, as the
                                                hum of
                                                technology and
                                                distant chatter
                                                fills the air
                                            </div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div
                                            class="text-sm font-body"
                                        >
                                            Outfit
                                        </div>
                                        <div
                                            class="w-full bg-zinc-900 flex flex-col gap-1 py-2 justify-center items-center rounded-md font-body"
                                        >
                                            <div
                                                class="text-xs text-zinc-400 px-2"
                                            >
                                                A sprawling
                                                futuristic
                                                metropolis at
                                                dusk,
                                                illuminated by
                                                neon lights and
                                                towering
                                                skyscrapers made
                                                of glass and
                                                steel. The
                                                streets are
                                                alive with a mix
                                                of people,
                                                autonomous
                                                vehicles, and
                                                digital
                                                billboards
                                                flashing
                                                advertisements
                                                in multiple
                                                languages.
                                                Elevated
                                                highways
                                                crisscross
                                                above, while a
                                                high-speed
                                                monorail glides
                                                between the
                                                buildings. The
                                                city skyline is
                                                a blend of
                                                cutting-edge
                                                architecture and
                                                lush rooftop
                                                gardens, with
                                                drones hovering
                                                in the sky
                                                delivering
                                                packages. A soft
                                                glow from street
                                                lamps reflects
                                                off the wet
                                                pavement,
                                                hinting at a
                                                recent rain
                                                shower, as the
                                                hum of
                                                technology and
                                                distant chatter
                                                fills the air
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs.Content>
                    
                    <Tabs.Content
                        value="activity"
                        class="h-[500px] overflow-y-scroll"
                    >
                        <Table.Root>
                            <Table.Caption
                                >A list of your recent
                                activities.</Table.Caption
                            >
                            <Table.Header
                                class="bg-zinc-800 hover:bg-zinc-800"
                            >
                                <Table.Row>
                                    <Table.Head
                                        class="w-[100px]"
                                        >Type</Table.Head
                                    >
                                    <Table.Head>Date</Table.Head
                                    >
                                    <Table.Head
                                        >Seller</Table.Head
                                    >
                                    <Table.Head
                                        >Buyer</Table.Head
                                    >
                                    <Table.Head
                                        class="text-right"
                                        >Price</Table.Head
                                    >
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {#each activity as active, i (i)}
                                    <Table.Row>
                                        <Table.Cell
                                            class="font-body"
                                        >
                                            {#if active.type == "mint"}
                                                <div
                                                    class="py-0.5 px-2 rounded-md bg-[#9587e0] w-fit text-white text-xs flex items-center"
                                                >
                                                    {active.type}
                                                </div>
                                            {:else if active.type == "list"}
                                                <div
                                                    class="py-0.5 px-2 rounded-md bg-[#28A745CC] w-fit text-white text-xs flex items-center"
                                                >
                                                    {active.type}
                                                </div>
                                            {:else if active.type == "sale"}
                                                <div
                                                    class="py-0.5 px-2 rounded-md bg-[#a72828cc] w-fit text-white text-xs flex items-center"
                                                >
                                                    {active.type}
                                                </div>
                                            {/if}
                                        </Table.Cell>
                                        <Table.Cell
                                            class="font-body text-xs text-zinc-400"
                                            >{active.date}</Table.Cell
                                        >
                                        <Table.Cell
                                            class="font-body text-xs text-zinc-400"
                                            >{active.owner}</Table.Cell
                                        >
                                        <Table.Cell
                                            class="font-body text-xs text-zinc-400"
                                            >{active.buyer}</Table.Cell
                                        >
                                        <Table.Cell
                                            class="text-right text-white font-body"
                                            >{active.price}
                                            <span
                                                class="text-zinc-400 text-xs"
                                                >SOL</span
                                            ></Table.Cell
                                        >
                                    </Table.Row>
                                {/each}
                            </Table.Body>
                        </Table.Root>
                    </Tabs.Content>
                </Tabs.Root>
            </Dialog.Description>
        </Dialog.Header>
    </Dialog.Content>
</Dialog.Root>