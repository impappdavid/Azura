<script>
    import icon38 from "$lib/imgs/icons/icon38.png";
    import icon38MirrorTop from "$lib/imgs/icons/icon38MirrorTop.png";
    import icon22 from "$lib/imgs/icons/icon22.png";
    import icon22Right from "$lib/imgs/icons/icon22Right.png";
</script>

<div class="flex justify-between h-fit ">
    <div
        class="flex flex-col w-full max-w-[50px] sm:max-w-[100px] justify-between items-start animate-[slideinLeft_1s_ease-in-out]"
    >
        <img src={icon38} alt="icon" class="w-16 h-34" />
        <img src={icon22} alt="icon" class="w-14 h-28" />
    </div>

    <div
        class="w-full max-w-3xl flex flex-col sm:grid grid-cols-3 font-body gap-4 py-4 animate-[reveal_3s_ease-in-out]"
    >
        <div class="text-xl sm:text-3xl w-fit flex gap-8 font-body">
            <div class="text-zinc-400 text-sm">/01/</div>
            <div class="text-white text-sm">/ABOUT US/</div>
        </div>
        <div class="col-span-2 text-zinc-400 text-sm flex flex-col gap-8">
            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">
                    Building the Future of NFTs
                </div>
                <div class="">
                    NFTs are evolving beyond simple digital collectibles. We’re
                    redefining the space by combining AI-generated assets,
                    investment opportunities, and dynamic NFT mechanics to bring
                    a fresh, engaging experience for collectors and creators
                    alike.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">More Than Just Ownership</div>
                <div class="">
                    With Investment NFTs, Merging, and Upgrading, we’re
                    introducing a whole new way to interact with digital assets.
                    Whether you’re collecting, investing, or customizing, our
                    platform ensures continuous value growth and exciting new
                    possibilities for every NFT holder.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">
                    Expanding the NFT Ecosystem
                </div>
                <div class="">
                    Our vision goes beyond static collectibles. We’re building a
                    creator-driven marketplace where users can design, sell, and
                    trade NFT assets like backgrounds, outfits, and accessories.
                    This opens up new earning opportunities for artists while
                    giving collectors more ways to personalize their NFTs.
                </div>
            </div>
        </div>
    </div>

    <div
        class="flex flex-col w-full max-w-[50px] sm:max-w-[100px] justify-between items-end animate-[slideinRight_1s_ease-in-out]"
    >
        <img
            src={icon38MirrorTop}
            alt="icon"
            class="w-16 h-34 transform scaleX(-1)"
        />
        <img src={icon22Right} alt="icon" class="w-14 h-28" />
    </div>
</div>
