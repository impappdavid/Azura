<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Table from "$lib/components/ui/table";
    import FixbuyDialog from "./dialogs/fixbuyDialog.svelte";

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
    class="h-full max-h-[260px] w-full max-w-[200px] transition-all duration-300 ease-in-out relative rounded-xl cursor-pointer group"
>
    <div class="relative overflow-hidden rounded-t-xl h-[220px] ">
        <img
            src={sale.url}
            alt="def1"
            class="h-full w-full object-cover transition-all duration-300 ease-in-out rounded-t-xl group-hover:scale-110"
        />
        
    </div>
    
    {#if sale.rarity == "common"}
            <div
                class="mt-2 absolute top-0 left-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Common</div>
            </div>
        {:else if sale.rarity == "uncommon"}
            <div
                class="mt-2 absolute top-0 left-2 bg-emerald-500/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Uncommon</div>
            </div>
        {:else if sale.rarity == "rare"}
            <div
                class="mt-2 absolute top-0 left-2 bg-sky-500/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Rare</div>
            </div>
        {:else if sale.rarity == "epic"}
            <div
                class="mt-2 absolute top-0 left-2 bg-violet-500/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Epic</div>
            </div>
        {:else if sale.rarity == "legendary"}
            <div
                class="mt-2 absolute top-0 left-2 bg-amber-500/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
            >
                <div class="text-[10px] text-zinc-200 font-body">Legendary</div>
            </div>
        {/if}
    <div
        class="mt-2 absolute top-0 right-2 bg-white/10 backdrop-blur-sm rounded-full p-1 flex gap-1 items-center hover:text-red-500"
    >
        <div class="text-xs text-zinc-200 hover:text-red-500 transition-all">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
        </div>
    </div>

    <div
        class="mt-2 absolute bottom-12 w-full   p-1 flex gap-1 items-center"
    >
        <div class="bg-zinc-900/50 backdrop-blur-sm rounded-md w-full p-2">
            <div class="flex justify-between">
                <div class="flex flex-col gap-0 text-start">
                    <div class="text-[10px] text-zinc-400 font-body">Current bid</div>
                    <div class="text-xs text-white font-body">0.56 <span class="text-xs text-zinc-400">SOL</span></div>
                </div>
                <div class="flex flex-col gap-0 text-end">
                    <div class="text-[10px] text-zinc-400 font-body">Ends in</div>
                    <div class="text-xs text-white font-body">25:47</div>
                </div>
            </div>
        </div>
        
    </div>

    <div class="h-fit bg-white rounded-b-xl flex justify-between px-2 py-2">
        <div class="flex text-start gap-1 items-center">
            <div class="w-7 h-7 bg-gradient-to-br from-zinc-100 to-red-400 rounded-full"></div>
            <div class="flex flex-col">
                <div class="text-xs font-body">0xab...b259</div>
                <div class="text-[10px] font-body text-zinc-500">286 likes</div>
            </div>
        </div>
        <div class="flex items-center">
            <Button class="h-8 px-4 rounded-lg">bid</Button>
        </div>
    </div>
    
</div>
{/each}