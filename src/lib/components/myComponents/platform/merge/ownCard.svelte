<script lang="ts">
    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import auro from "$lib/imgs/goldenretriver.jpg";

    let data = [
        {
            imageUrl: def1,
            characterName: "Lena",
            rarity: "common",
            season: 1,
        },
        {
            imageUrl: def3,
            characterName: "Kai",
            rarity: "epic",
            season: 1,
        },
        {
            imageUrl: def4,
            characterName: "Noah",
            rarity: "uncommon",
            season: 1,
        },
        {
            imageUrl: auro,
            characterName: "Auro",
            rarity: "legendary",
            season: 1,
        },

        {
            imageUrl: auro,
            characterName: "Auro",
            rarity: "rare",
            season: 1,
        },
        {
            imageUrl: def1,
            characterName: "Lena",
            rarity: "epic",
            season: 1,
        },
        {
            imageUrl: def3,
            characterName: "Kai",
            rarity: "epic",
            season: 1,
        },
    ];

    const rarityColors: Object = {
        common: "bg-zinc-900/30",
        uncommon: "bg-green-500/30",
        rare: "bg-blue-500/30",
        epic: "bg-purple-500/30",
        legendary: "bg-yellow-500/30",
    };

    export let selectImage;
</script>

{#each data as nft}
<div
on:click={() => selectImage(nft.imageUrl)}
        class="h-[344px] w-full max-w-[280px] transition-all duration-300 ease-in-out relative cursor-pointer group border-2"
    >
        <div class="relative overflow-hidden h-full max-h-[280px]">
            <img
                src={nft.imageUrl}
                alt="def1"
                class="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
            />
        </div>

        <div
            class={`mt-2 absolute top-0 right-2 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center ${rarityColors[nft.rarity] || "bg-zinc-500"}`}
        >
            <div class="text-xs text-zinc-200 font-body">{nft.rarity}</div>
        </div>
        <div
            class={`mt-2 absolute top-0 left-2 bg-green-500/30 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center `}
        >
            <div class="text-xs text-green-400 font-body">S1</div>
        </div>
        <div class="w-full bg-zinc-900 px-2 py-2">
            <div class="flex justify-between items-center">
                <div class="font-body text-start text-white text-xl">
                    {nft.characterName}
                </div>
                <div class="text-xs text-zinc-200">#3012</div>
            </div>
            <div class="flex justify-between items-center">
                <div class="font-body text-start text-zinc-400 text-xs">
                    Floor price
                </div>
                <div class="text-xs text-zinc-400 flex gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        ><path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
                        /></svg
                    >
                    {nft.floorprice}
                </div>
            </div>
        </div>
    </div>
{/each}
