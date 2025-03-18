<script>
    import { Button } from "$lib/components/ui/button";

   

    export let data;
</script>

{#each data as sale}
    <div
        class="h-[320px] w-full max-w-[280px] transition-all duration-300 ease-in-out relative cursor-pointer group"
    >
        <div class="relative overflow-hidden h-full max-h-[280px]">
            <img
                src={sale.url}
                alt="nft"
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
        <div
            class="h-fit border-x-2 border-b-2 flex justify-between px-2 py-1 bg-zinc-900"
        >
            <div class="flex flex-col text-start gap-0">
                <div
                    class="text-zinc-400 font-body text-xs font-medium flex gap-1"
                >
                    {sale.character}
                    <div class="text-[10px]">
                        #{sale.tokenId}
                    </div>
                </div>
                <div class="text-white font-body font-semibold text-sm">
                    {sale.price}
                    <span class="text-zinc-400 font-medium text-xs">SOL</span>
                </div>
            </div>
            <div class="flex items-center">
                <Button
                    onclick={() => window.location.href = '/platform/market/randomid'}
                    class="h-7 px-4 rounded-none bg-[#ab9ff2] text-black hover:bg-[#9587e0] text-xs font-medium"
                    >BUY</Button
                >
            </div>
        </div>
    </div>
{/each}
