<script>
    import { Button } from "$lib/components/ui/button";
    import CountDown from "./countDown.svelte";

    export let data;
</script>

{#each data as sale}
    <div
        class="h-[340px] w-full max-w-[280px] transition-all duration-300 ease-in-out relative cursor-pointer group"
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

        <div class="mt-2 absolute bottom-16 w-full p-1 flex gap-1 items-center">
            <div class="bg-zinc-950/50 backdrop-blur-lg w-full p-2">
                <div class="flex justify-between">
                    <div class="flex flex-col gap-0 text-start">
                        <div class="text-[10px] text-zinc-400 font-body">
                            Current bid
                        </div>
                        <div class="text-xs text-white font-body">
                            0.56 <span class="text-xs text-zinc-300">ETH</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-0 text-end">
                        <div class="text-[10px] text-zinc-400 font-body">
                            Ends in
                        </div>
                        <div class="text-xs text-white font-body">
                            <CountDown time={sale.timerData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="h-fit bg-zinc-900 border-y-2 border-x-2 flex justify-between px-2 py-2 "
        >
            <div class="flex text-start items-center gap-1 justify-center">
                <div class="text-lg">{sale.character}</div>
                <div class="text-xs text-zinc-400">#{sale.tokenId}</div>
            </div>
            <div class="flex items-center">
                <Button
                    onclick={() => window.location.href = '/platform/auction/randomid'}
                    class="h-7 px-4 rounded-none bg-[#ab9ff2] text-black hover:bg-[#9587e0] text-xs font-medium"
                    >BUY</Button
                >
            </div>
        </div>
    </div>
{/each}
