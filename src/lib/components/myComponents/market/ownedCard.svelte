<script>
    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";

    let data = [
        {
            totalSupply: "",
            rarity: "",
            collectionName: "",
            ownedBy: "",
        },
    ];
</script>

<div
    class="h-full max-h-[240px] w-full max-w-[180px] transition-all duration-300 ease-in-out relative rounded-xl cursor-pointer group"
>
    <div class="relative overflow-hidden rounded-xl h-full">
        <img
            src={def3}
            alt="def1"
            class="h-full w-full object-cover transition-all duration-300 ease-in-out rounded-xl group-hover:scale-110"
        />
    </div>
    <div class="mt-2 absolute bottom-2 left-2 flex flex-col gap-1">
        <div class="font-logo text-start text-white text-3xl">Kai</div>
        <div
            class="bg-white/30 backdrop-blur-sm rounded-full p-1 px-1.5 flex gap-1 items-center"
        >
            <div
                class="w-5 h-5 rounded-full bg-gradient-to-br from-zinc-100 to-red-400"
            ></div>
            <div class="text-xs text-zinc-200">0xab...b259</div>
        </div>
    </div>
    <div
        class="mt-2 absolute top-0 right-2 bg-white/30 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
    >
        <div class="text-xs text-zinc-200">Common</div>
    </div>
</div>
