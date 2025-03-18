<script>
    import icon38Flip from "$lib/imgs/icons/icon38Flip.png";
    import icon38Mirror from "$lib/imgs/icons/icon38Mirror.png";
    import icon22 from "$lib/imgs/icons/icon22.png";
    import icon22Right from "$lib/imgs/icons/icon22Right.png";
</script>

<div class="flex justify-between h-fit">
    <div
        class="flex flex-col w-full max-w-[50px] sm:max-w-[100px] justify-between items-start animate-[slideinLeft_1s_ease-in-out]"
    >
        <img src={icon22} alt="icon" class="w-14 h-28" />
        
        <img src={icon38Flip} alt="icon" class="w-16 h-34" />
    </div>

    <div
        class="w-full max-w-3xl flex flex-col sm:grid grid-cols-3 font-body gap-4 py-4 animate-[reveal_3s_ease-in-out]"
    >
        <div class="text-xl sm:text-3xl w-fit flex gap-8 font-body">
            <div class="text-zinc-400 text-sm">/03/</div>
            <div class="text-white text-sm">/ROADMAP/</div>
        </div>
        <div class="col-span-2 text-zinc-400 text-sm flex flex-col gap-8">
            <div class="flex flex-col gap-1">
                <div class="text-lg text-white flex gap-2 items-center">
                    <div
                        class="p-0.5 px-2 border-2 border-green-500 text-green-500 text-md"
                    >
                        S1 Foundation & Launch
                    </div>
                </div>
                <div class="text-lg text-white">AI-Generated NFTs</div>
                <div class="">
                    Users can generate unique NFTs with customizable traits and
                    rarity-based pricing.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">NFT Marketplace</div>
                <div class="">
                    Trade, buy, and sell NFTs with multiple listing options:
                    <ul class="px-8">
                        <li>- Buy Now - Direct purchases at set prices.</li>
                        <li>
                            - Auction - Competitive bidding for high-value NFTs.
                        </li>
                        <li>- Buy Now - Direct purchases at set prices.</li>
                        <li>
                            - Invest - Multi-owner investment model where users
                            can co-invest in NFTs and earn profits when sold.
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">Phantom Wallet Integration</div>
                <div class="">
                    Secure and seamless transactions powered by Solana.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white flex gap-2 items-center">
                    <div
                        class="p-0.5 px-2 border-2 border-violet-500 text-violet-500 text-md"
                    >
                        S2 Expansion & Community Growth
                    </div>
                </div>
                <div class="text-lg text-white">Creator Collaborations</div>
                <div class="">
                    Allow artists to design NFT assets (backgrounds, outfits,
                    accessories) for the generation and upgrade system.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">NFT Asset Marketplace</div>
                <div class="">
                    Users can buy and sell standalone assets to customize NFTs.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">Upgradable NFTs</div>
                <div class="">
                    Upgrade existing NFTs with new traits, maintaining rarity-based progression.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white">Merging System</div>
                <div class="">
                    Combine characters and pets to create new NFTs with exclusive designs.
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <div class="text-lg text-white flex gap-2 items-center">
                    <div
                        class="p-0.5 px-2 border-2 border-orange-500 text-orange-500 text-md"
                    >
                        S3 Soon
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div
        class="flex flex-col w-full max-w-[50px] sm:max-w-[100px] justify-between items-end animate-[slideinRight_1s_ease-in-out]"
    >
        
        <img src={icon22Right} alt="icon" class="w-14 h-28" />
        <img
            src={icon38Mirror}
            alt="icon"
            class="w-16 h-34 transform scaleX(-1)"
        />
    </div>
</div>
