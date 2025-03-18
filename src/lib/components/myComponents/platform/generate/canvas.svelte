<script>
    import DottedPattern from "./dottedPattern.svelte";
    import { selectedCharacterImage } from '$lib/stores/generateStore';

    // Map of character IDs to their image paths
    const characterImages = {
        kai: '/images/s1-1.jpg',
        lena: '/images/s1-0.jpg',
        noah: '/images/s1-2.jpg',
        auro: '/images/goldenretriver.jpg'
    };

    // Get the current image path based on selected character
    let currentImage;
    $: currentImage = selectedCharacterImage ? characterImages[selectedCharacterImage] : null;

    $: console.log("Current character:", selectedCharacterImage);
    $: console.log("Current image path:", currentImage);
    $: console.log("Available character images:", characterImages);

    function handleCharacterSelect(event) {
        console.log("Selected character:", event);
        // Update the store with the character ID
        selectedCharacterImage.set(event);
    }
</script>

<div class="w-full max-w-12/12 h-full flex justify-center items-center relative">
    <DottedPattern
        class="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] z-0 w-full h-full"
    />
    {#if currentImage}
        <img 
            src={currentImage} 
            alt="Selected character" 
            class="absolute w-full h-full max-w-[700px] max-h-[700px] border-4 border-zinc-600 z-50 object-cover"
        />
    {:else}
        <div class="absolute w-full h-full max-w-[700px] bg-zinc-900/50 backdrop-blur-sm max-h-[700px] border-4 border-zinc-600 z-50 flex items-center justify-center text-zinc-400 font-body">
            Select a character to begin
        </div>
    {/if}
</div>



