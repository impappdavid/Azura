<script>
    
    import DottedPattern from "./dottedPattern.svelte";
    export let imageUrl;
    
   
</script>

<div class="w-full max-w-12/12 h-full flex justify-center items-center">
    <DottedPattern
    class="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] z-0 w-full h-full"
  />
        <img src={imageUrl} alt="def1" class="w-full h-full max-w-[700px] max-h-[700px] border-4 border-[#9587e0] z-50 rounded-md">
        
</div>



