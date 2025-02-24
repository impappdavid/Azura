<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Table from "$lib/components/ui/table";
    import { Input } from "$lib/components/ui/input";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import * as HoverCard from "$lib/components/ui/hover-card";
    import CountDown from "../countDown.svelte";

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
            date: "25/01/26",
            buyer: "-",
        },
        {
            type: "sale",
            price: 2.49,
            owner: "0n23x2734",
            date: "25/01/26",
            buyer: "0n23x2734",
        },
        {
            type: "list",
            price: 2.49,
            owner: "0n23x2734",
            date: "25/01/26",
            buyer: "-",
        },
        {
            type: "mint",
            price: 1,
            owner: "0x00",
            date: "25/01/26",
            buyer: "0n23x2734",
        },
    ];

    let solByPercentage = 0.25;

    let investPercent = 0;

    export let data;
</script>

<Dialog.Root>
    <Dialog.Trigger class="outline-none w-full">
        <Button
            class="h-7 bg-[#ab9ff2] hover:bg-[#9587e0] rounded-none w-full text-black text-xs"
            >Invest now</Button
        >
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title
                class="font-body pb-2 gap-2 text-white text-2xl flex items-center w-full "
            >
                <div class="relative">
                    <img src={data.url} alt="def1" class="rounded-t-xl" />
                    <div class="absolute bottom-6 left-2 flex flex-col gap-2">
                        <div class="font-logo text-5xl">{data.character}</div>
                        <div
                            class="bg-white/30 backdrop-blur-sm rounded-full p-1 px-1.5 pr-3 flex gap-1 items-center"
                        >
                            <div
                                class="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-100 to-red-400"
                            ></div>
                            <div class="text-sm text-zinc-200">0xab...b259</div>
                        </div>
                    </div>
                    <div class="absolute top-4 left-2">
                        {#if data.rarity == "common"}
                            <div
                                class="mt-2 absolute top-0 left-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg p-1 px-3 flex gap-1 items-center"
                            >
                                <div class="text-xs text-zinc-200 font-body">
                                    Common
                                </div>
                            </div>
                        {:else if data.rarity == "uncommon"}
                            <div
                                class="mt-2 absolute top-0 left-2 bg-emerald-500/50 backdrop-blur-sm rounded-lg p-1 px-3 flex gap-1 items-center"
                            >
                                <div class="text-xs text-zinc-200 font-body">
                                    Uncommon
                                </div>
                            </div>
                        {:else if data.rarity == "rare"}
                            <div
                                class="mt-2 absolute top-0 left-2 bg-sky-500/50 backdrop-blur-sm rounded-lg p-1 px-3 flex gap-1 items-center"
                            >
                                <div class="text-xs text-zinc-200 font-body">
                                    Rare
                                </div>
                            </div>
                        {:else if data.rarity == "epic"}
                            <div
                                class="mt-2 absolute top-0 left-2 bg-violet-500/50 backdrop-blur-sm rounded-lg p-1 px-3 flex gap-1 items-center"
                            >
                                <div class="text-xs text-zinc-200 font-body">
                                    Epic
                                </div>
                            </div>
                        {:else if data.rarity == "legendary"}
                            <div
                                class="mt-2 absolute top-0 left-2 bg-amber-500/50 backdrop-blur-sm rounded-lg p-1 px-3 flex gap-1 items-center"
                            >
                                <div class="text-xs text-zinc-200 font-body">
                                    Legendary
                                </div>
                            </div>
                        {/if}
                    </div>
                    <div class="absolute top-3 right-2">
                        <Dialog.Close
                            class="p-1 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                ><path
                                    fill="#f9f8fb"
                                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                                /></svg
                            >
                        </Dialog.Close>
                    </div>

                    <div
                        class="absolute bottom-3 right-2 bg-zinc-900/50 backdrop-blur-sm rounded-md w-fit p-2 px-4"
                    >
                        <div class="flex justify-between w-fit">
                            <div class="flex flex-col gap-0 text-end">
                                <div class="text-xs text-zinc-400 font-body">
                                    Ends in
                                </div>
                                <div class="text-sm text-white font-body">
                                    <CountDown time={data.timerData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog.Title>
            <Dialog.Description>
                <Tabs.Root value="overview" class="w-full ">
                    <Tabs.List
                        class="flex w-full justify-start border-b border-zinc-800 text-md font-body"
                    >
                        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                        <Tabs.Trigger value="offers">Offers</Tabs.Trigger>
                        <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content
                        value="overview"
                        class="max-h-[500px] overflow-y-scroll"
                    >
                        <div class="grid sm:grid-cols-1 w-full gap-4">
                            <div
                                class="w-full h-fit flex flex-col gap-2 col-span-1 sm:col-span-1 items-center"
                            >
                                <div
                                    class="w-full flex flex-col gap-2 p-2 rounded-lg justify-center"
                                >
                                    <div
                                        class=" flex text-zinc-300 justify-between items-center"
                                    >
                                        <div class="text-lg font-body">
                                            Invest price
                                        </div>
                                        <div
                                            class="flex gap-1 text-white items-center text-lg font-body"
                                        >
                                            {investPercent}
                                            <span class="text-zinc-400 text-sm"
                                                >SOL</span
                                            >
                                            <div class="text-sm text-zinc-400">
                                                | ${investPercent * 200}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class=" flex text-zinc-300 justify-between items-center"
                                    >
                                        <div
                                            class="text-sm text-zinc-400 font-body flex gap-1"
                                        >
                                            EST. profit
                                            <HoverCard.Root>
                                                <HoverCard.Trigger
                                                    rel="noreferrer noopener"
                                                    class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 cursor-default"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        ><path
                                                            fill="#9487e0b4"
                                                            d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                                        /></svg
                                                    >
                                                </HoverCard.Trigger>
                                                <HoverCard.Content
                                                    class="w-fit"
                                                >
                                                    <div
                                                        class="flex justify-between space-x-4 px-2 py-1 text-zinc-400 text-xs font-body"
                                                    >
                                                        When the NFT is sold you get the <br> percentage What you bought here. <br>
                                                        Example: You bought 50% nft <br> sold for 10SOL you get 5SOL
                                                    </div>
                                                </HoverCard.Content>
                                            </HoverCard.Root>
                                        </div>
                                        <div
                                            class="flex gap-1 text-white items-center text-sm font-body"
                                        >
                                            {parseFloat((investPercent * 0.95).toFixed(3))}
                                            <span class="text-zinc-400 text-sm"
                                                >SOL</span
                                            >
                                            <div class="text-sm text-zinc-400">
                                                | ${parseFloat((investPercent * 200 * 0.95).toFixed(3))}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <ToggleGroup.Root type="single">
                                            <ToggleGroup.Item
                                                value="five"
                                                aria-label="five"
                                                onclick={() =>
                                                    (investPercent =
                                                        solByPercentage)}
                                            >
                                                5%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="ten"
                                                aria-label="ten"
                                                onclick={() =>
                                                    (investPercent =
                                                        2 * solByPercentage)}
                                            >
                                                10%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="fifteen"
                                                aria-label="fifteen"
                                                onclick={() =>
                                                    (investPercent =
                                                        3 * solByPercentage)}
                                            >
                                                15%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="twenty"
                                                aria-label="twenty"
                                                onclick={() =>
                                                    (investPercent =
                                                        4 * solByPercentage)}
                                            >
                                                20%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="twentyfive"
                                                aria-label="twentyfive"
                                                onclick={() =>
                                                    (investPercent =
                                                        5 * solByPercentage)}
                                            >
                                                25%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="thirty"
                                                aria-label="thirty"
                                                onclick={() =>
                                                    (investPercent =
                                                        6 * solByPercentage)}
                                            >
                                                30%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="thirtyfive"
                                                aria-label="thirtyfive"
                                                onclick={() =>
                                                    (investPercent =
                                                        7 * solByPercentage)}
                                            >
                                                35%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="fourty"
                                                aria-label="fourty"
                                                onclick={() =>
                                                    (investPercent =
                                                        8 * solByPercentage)}
                                            >
                                                40%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="fourtyfive"
                                                aria-label="fourtyfive"
                                                onclick={() =>
                                                    (investPercent =
                                                        9 * solByPercentage)}
                                            >
                                                45%
                                            </ToggleGroup.Item>
                                            <ToggleGroup.Item
                                                value="fifty"
                                                aria-label="fifty"
                                                onclick={() =>
                                                    (investPercent =
                                                        10 * solByPercentage)}
                                            >
                                                50%
                                            </ToggleGroup.Item>
                                        </ToggleGroup.Root>
                                    </div>
                                    <div class="w-full">
                                        <Button
                                            class="bg-[#ab9ff2] hover:bg-[#9587e0] font-body rounded-lg text-white w-full"
                                            >Invest</Button
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content
                        value="offers"
                        class="max-h-[200px] overflow-y-scroll px-2"
                    >
                        <Table.Root>
                            <Table.Caption
                                >A list of your recent offers.</Table.Caption
                            >
                            <Table.Header class="bg-zinc-800 hover:bg-zinc-800">
                                <Table.Row>
                                    <Table.Head class="w-[100px]"
                                        >Price</Table.Head
                                    >
                                    <Table.Head>From</Table.Head>
                                    <Table.Head>Updated</Table.Head>
                                    <Table.Head class="text-right"
                                        >Expires in</Table.Head
                                    >
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {#each nftdata as nft, i (i)}
                                    <Table.Row>
                                        <Table.Cell
                                            class="font-medium text-white"
                                            >{nft.price}
                                            <span class="text-zinc-400 text-xs"
                                                >SOL</span
                                            ></Table.Cell
                                        >
                                        <Table.Cell
                                            class="text-zinc-400 text-xs"
                                            >{nft.from}</Table.Cell
                                        >
                                        <Table.Cell
                                            class="text-zinc-400 text-xs"
                                            >{nft.updated}</Table.Cell
                                        >
                                        <Table.Cell
                                            class="text-right text-zinc-400 text-xs"
                                            >{nft.expiresin}</Table.Cell
                                        >
                                    </Table.Row>
                                {/each}
                            </Table.Body>
                        </Table.Root>
                    </Tabs.Content>
                    <Tabs.Content
                        value="activity"
                        class="h-[200px] overflow-y-scroll px-2"
                    >
                        <Table.Root>
                            <Table.Caption
                                >A list of your recent activities.</Table.Caption
                            >
                            <Table.Header class="bg-zinc-800 hover:bg-zinc-800">
                                <Table.Row>
                                    <Table.Head class="w-[100px]"
                                        >Type</Table.Head
                                    >
                                    <Table.Head>Date</Table.Head>
                                    <Table.Head>Seller</Table.Head>
                                    <Table.Head>Buyer</Table.Head>
                                    <Table.Head class="text-right"
                                        >Price</Table.Head
                                    >
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {#each activity as active, i (i)}
                                    <Table.Row>
                                        <Table.Cell class="font-body">
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
                                            <span class="text-zinc-400 text-xs"
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
