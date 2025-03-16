<script>
    import CountDown from "./countDown.svelte";
    import InvestDialog from "./dialogs/investDialog.svelte";

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

{#each data as sale}
    <div
        class="h-[390px] w-full max-w-[280px] transition-all duration-300 ease-in-out relative cursor-pointer group"
    >
        <div class="relative overflow-hidden h-[280px]">
            <img
                src={sale.url}
                alt="def1"
                class="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
            />
        </div>

        {#if sale.rarity == "common"}
            <div
                class="mt-2 absolute top-0 right-2 bg-zinc-900/50 backdrop-blur-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Common</div>
            </div>
        {:else if sale.rarity == "uncommon"}
            <div
                class="mt-2 absolute top-0 right-2 bg-emerald-500/50 backdrop-blur-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Uncommon</div>
            </div>
        {:else if sale.rarity == "rare"}
            <div
                class="mt-2 absolute top-0 right-2 bg-sky-500/50 backdrop-blur-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Rare</div>
            </div>
        {:else if sale.rarity == "epic"}
            <div
                class="mt-2 absolute top-0 right-2 bg-violet-500/50 backdrop-blur-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Epic</div>
            </div>
        {:else if sale.rarity == "legendary"}
            <div
                class="mt-2 absolute top-0 right-2 bg-amber-500/50 backdrop-blur-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Legendary</div>
            </div>
        {/if}
        <div
            class={`mt-2 absolute top-0 left-2 bg-green-500/30 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center `}
        >
            <div class="text-xs text-green-400">S1</div>
        </div>

        <div class="h-fit bg-zinc-900 border-x-2 flex flex-col gap-1 px-3 py-2 text-start">
            
            <div class="flex gap-1 items-center">
                <div class="font-body font-medium text-white">Kai</div>
                <div class="font-body text-xs text-zinc-400">#{sale.tokenId}</div>
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col gap-0 text-start">
                    <div class="text-[10px] text-zinc-400 font-body">
                        Invest price
                    </div>
                    <div class="text-xs text-white font-body">
                        0.25 <span class="text-xs text-zinc-400">ETH</span>
                    </div>
                </div>
                <div class="flex flex-col gap-0 text-end">
                    <div class="text-[10px] text-zinc-400 font-body">
                        Avalaible(%)
                    </div>
                    <div class="text-xs text-white font-body">
                        25%
                    </div>
                </div>
            </div>
        </div>
        <div class="h-fit rounded-b-xl w-full">
            <InvestDialog data={sale} />
        </div>
    </div>
{/each}
