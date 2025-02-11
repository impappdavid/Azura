<script>
    import Season from "$lib/components/myComponents/home/season.svelte";
    import Target from "$lib/components/myComponents/home/target.svelte";
    import Navbar from "$lib/components/myComponents/navbar.svelte";
    import background from "$lib/imgs/bg3.png";
    import ainft from "$lib/imgs/ainft.png";
    import invest from "$lib/imgs/invest.png";
    import characters from "$lib/imgs/characters.png";
</script>

<div class="bg-zinc-900 h-full">
    <Navbar />
    <div
        class="h-full w-full bg-[#9587e0] pt-20 pb-8 flex flex-col items-center"
    >
        <div class="w-full max-w-2xl bg-zinc-900 p-4 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <div class="font-body text-3xl font-semibold">
                    Building the Future of NFTs
                </div>
                <div class="font-body text-zinc-300">
                    Welcome to Azurox, the next evolution of AI-powered NFT
                    creation and trading. We believe that NFTs should be more
                    than just digital collectibles—they should be dynamic,
                    customizable, and valuable.
                </div>
                <div class="font-body text-zinc-300">
                    Azurox is a first-of-its-kind platform where users can:
                    <ul class="px-4 text-sm text-white font-medium">
                        <li>Customize & Generate Unique NFTs with AI</li>
                        <li>Trade, Auction, or Invest in NFTs like assets</li>
                        <li>
                            Build & Expand their NFT collection with
                            rarity-based pricing
                        </li>
                    </ul>
                </div>
                <div class="font-body">
                    Whether you're a collector, creator, or investor—Azurox
                    gives you full control over your NFT journey.
                </div>
            </div>
        </div>

        <div class="w-full max-w-2xl bg-zinc-900 p-4 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <div class="font-body text-3xl font-semibold">
                    What Makes Azurox Unique?
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="font-body text-xl font-semibold">
                    AI-Powered NFT Customization
                </div>
                <div class="font-body text-zinc-300">
                    Forget static NFTs Azurox lets you create your own. Choose
                    from legendary characters, customize their outfits,
                    accessories, backgrounds, and mint one-of-a-kind digital
                    assets.
                </div>
                <img src={ainft} alt="ainft" class="rounded-lg" />
            </div>
            <div class="flex flex-col gap-4">
                <div class="font-body text-xl font-semibold">
                    Investment-Based NFTs
                </div>
                <div class="font-body text-zinc-300">
                    We’re introducing a game changing investment model—NFTs can
                    now be partially owned. Up to 10 investors can back an NFT,
                    earning a share when it's sold.
                </div>
                <img src={invest} alt="invest" class="rounded-lg" />
            </div>
            <div class="flex flex-col gap-4">
                <div class="font-body text-xl font-semibold">
                    Solana-Powered Marketplace
                </div>
                <div class="font-body text-zinc-300">
                    Fast, low-fee, and scalable—Azurox is built on Solana,
                    ensuring smooth transactions, zero gas wars, and instant NFT
                    minting.
                </div>
                <div class="w-full h-fit bg-gradient-to-br from-violet-400 to-indigo-600 flex justify-center items-center py-16 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="none"><path fill="url(#tokenBrandedSolana0)" d="M18.413 7.902a.62.62 0 0 1-.411.163H3.58c-.512 0-.77-.585-.416-.928l2.369-2.284a.6.6 0 0 1 .41-.169H20.42c.517 0 .77.59.41.935z"/><path fill="url(#tokenBrandedSolana1)" d="M18.413 19.158a.62.62 0 0 1-.411.158H3.58c-.512 0-.77-.58-.416-.923l2.369-2.29a.6.6 0 0 1 .41-.163H20.42c.517 0 .77.586.41.928z"/><path fill="url(#tokenBrandedSolana2)" d="M18.413 10.473a.62.62 0 0 0-.411-.158H3.58c-.512 0-.77.58-.416.923l2.369 2.29c.111.103.257.16.41.163H20.42c.517 0 .77-.586.41-.928z"/><defs><linearGradient id="tokenBrandedSolana0" x1="3.001" x2="21.459" y1="55.041" y2="54.871" gradientUnits="userSpaceOnUse"><stop stop-color="#599db0"/><stop offset="1" stop-color="#47f8c3"/></linearGradient><linearGradient id="tokenBrandedSolana1" x1="3.001" x2="21.341" y1="9.168" y2="9.027" gradientUnits="userSpaceOnUse"><stop stop-color="#c44fe2"/><stop offset="1" stop-color="#73b0d0"/></linearGradient><linearGradient id="tokenBrandedSolana2" x1="4.036" x2="20.303" y1="12.003" y2="12.003" gradientUnits="userSpaceOnUse"><stop stop-color="#778cbf"/><stop offset="1" stop-color="#5dcdc9"/></linearGradient></defs></g></svg>
                </div>
            </div>
        </div>

        <div class="w-full max-w-2xl bg-zinc-900 p-4 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <div class="font-body text-3xl font-semibold">
                    Our Vision & Roadmap
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="font-body text-xl font-semibold">
                    Exclusive Character Drops & Limited Editions
                </div>
                
                <img src={characters} alt="ainft" class="rounded-lg" />
            </div>
            <div class="flex flex-col gap-4">
                <div class="font-body text-xl font-semibold">
                    Collaborations with Creators
                </div>
                <div class="font-body text-zinc-300">
                    In the future, we aim to work with digital artists, designers, and influencers to create exclusive NFT collections and expand our creative universe.
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="font-body text-xl font-semibold">
                    We are here to push the NFT space forward. Join the revolution, and let’s build the future together.
                </div>
                
            </div>
        </div>
        
    </div>
</div>
