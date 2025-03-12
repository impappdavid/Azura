<script>
    import DottedPattern from "./dottedPattern.svelte";
    import { selectedImage1, selectedImage2 } from '$lib/stores/mergeStore';

    function removeImage(imageNumber) {
        if (imageNumber === 1) {
            $selectedImage1 = null;
        } else {
            $selectedImage2 = null;
        }
    }
</script>

<div class="w-full max-w-8/12 h-full flex gap-8 justify-center items-center">
    <DottedPattern
        class="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] z-0 w-full h-full"
    />
    <div class="z-50 flex sm:flex-row flex-col gap-8 items-center justify-center">
        {#if $selectedImage1}
            <div 
                class="relative group cursor-pointer"
                on:click={() => removeImage(1)}
            >
                <img
                    src={$selectedImage1}
                    alt="First NFT"
                    class="w-full h-full max-w-[500px] max-h-[500px] border-2 border-zinc-600 z-50 transition-all duration-300"
                />
                <div class="absolute inset-0 bg-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        {:else}
            <div class="w-full h-full text-md text-xs sm:min-w-[500px] max-w-[500px] sm:min-h-[500px] max-h-[500px] border-2 border-zinc-600 backdrop-blur-sm bg-zinc-600/50 z-50 font-body flex justify-center items-center">
                Select first NFT
            </div>
        {/if}

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 1024 1024"
        >
            <path
                fill="currentColor"
                d="M482.2 508.4L331.3 389c-3-2.4-7.3-.2-7.3 3.6V478H184V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H144c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H184V546h140v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2M880 116H596c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H700v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3.2 7.3-3.6V546h140v294H636V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28"
            />
        </svg>

        {#if $selectedImage2}
            <div 
                class="relative group cursor-pointer"
                on:click={() => removeImage(2)}
            >
                <img
                    src={$selectedImage2}
                    alt="Second NFT"
                    class="w-full h-full max-w-[500px] max-h-[500px] border-2 border-zinc-600 z-50 transition-all duration-300"
                />
                <div class="absolute inset-0 bg-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        {:else}
            <div class="w-full h-full text-md text-xs sm:min-w-[500px] max-w-[500px] sm:min-h-[500px] max-h-[500px] border-2 border-zinc-600 backdrop-blur-sm bg-zinc-600/50 z-50 font-body flex justify-center items-center">
                Select second NFT
            </div>
        {/if}
    </div>
</div>
