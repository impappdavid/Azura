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
</script>

{#each data as nft}
    <a href="../../platform/home/sell/2dase231asd12"
        class="h-[320px] w-full max-w-[280px] transition-all duration-300 ease-in-out relative  cursor-pointer group border-2"
    >
        <div class="relative overflow-hidden  h-full">
            <img
                src={nft.imageUrl}
                alt="def1"
                class="h-full w-full object-cover transition-all duration-300 ease-in-out  group-hover:scale-110"
            />
        </div>
        <div class="mt-2 absolute bottom-2 left-2 flex flex-col gap-1">
            
            <div
                class="bg-zinc-900/30 backdrop-blur-lg  p-1 px-1.5 flex gap-1 items-center"
            >
                
                <div class="font-body text-start text-white text-xl">{nft.characterName}</div>
                <div class="text-xs text-zinc-200">#3012</div>
            </div>
        </div>
        <div
            class={`mt-2 absolute top-0 right-2 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center ${rarityColors[nft.rarity] || "bg-zinc-500"}`}
        >
            <div class="text-xs text-zinc-200">{nft.rarity}</div>
        </div>
        <div
            class={`mt-2 absolute top-0 left-2 bg-green-500/30 backdrop-blur-lg  p-1 px-2 flex gap-1 items-center `}
        >
            <div class="text-xs text-green-400">S1</div>
        </div>
    </a>
{/each}
