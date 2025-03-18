<script>
    import { Button } from "$lib/components/ui/button";
    

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

        <div
            class="h-fit bg-zinc-900 border-x-2 flex flex-col gap-1 px-3 py-2 text-start"
        >
            <div class="flex gap-1 items-center">
                <div class="font-body font-medium text-white">Kai</div>
                <div class="font-body text-xs text-zinc-400">
                    #{sale.tokenId}
                </div>
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col gap-0 text-start">
                    <div class="text-[10px] text-zinc-400 font-body">
                        Invest price
                    </div>
                    <div class="text-xs text-white font-body">
                        0.25 <span class="text-xs text-zinc-400">SOL</span>
                    </div>
                </div>
                <div class="flex flex-col gap-0 text-end">
                    <div class="text-[10px] text-zinc-400 font-body">
                        Avalaible(%)
                    </div>
                    <div class="text-xs text-white font-body">25%</div>
                </div>
            </div>
        </div>

        <div class="h-fit rounded-b-xl w-full">
            <Button
                onclick={() =>
                    (window.location.href = "/platform/invest/randomid")}
                class="h-7 bg-[#ab9ff2] hover:bg-[#9587e0] rounded-none w-full text-black text-xs"
                >Invest now</Button
            >
        </div>
    </div>
{/each}
