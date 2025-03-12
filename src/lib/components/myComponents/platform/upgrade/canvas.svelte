<script>
    import DottedPattern from "./dottedPattern.svelte";
    import { selectedUpgradeNFT } from '$lib/stores/upgradeStore';
</script>

<div class="w-full max-w-8/12 h-full flex gap-8 justify-center items-center">
    <DottedPattern
        class="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] z-0 w-full h-full"
    />
    <div class="z-50 flex sm:flex-row flex-col gap-8 items-center justify-center">
        {#if $selectedUpgradeNFT}
            <img
                src={$selectedUpgradeNFT.imageUrl}
                alt="Selected NFT"
                class="w-full h-full max-w-[700px] max-h-[700px] border-2 border-zinc-600 z-50"
            />
        {:else}
            <div class="w-full h-full text-md text-xs sm:min-w-[700px] max-w-[700px] sm:min-h-[700px] max-h-[700px] border-2 border-zinc-600 backdrop-blur-sm bg-zinc-600/50 z-50 font-body flex justify-center items-center">
                Select an NFT to upgrade
            </div>
        {/if}
    </div>
</div>
