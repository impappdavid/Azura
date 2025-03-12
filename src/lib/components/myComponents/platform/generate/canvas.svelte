<script>
    
    import DottedPattern from "./dottedPattern.svelte";
    import Sidebar from "./sidebar.svelte";
    export let imageUrl;
    
   
</script>

<div class="w-full max-w-12/12 h-full flex justify-center items-center">
    
    <DottedPattern
    class="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] z-0 w-full h-full"
  />
        <img src={imageUrl} alt="def1" class="w-full h-full max-w-[700px] max-h-[700px] border-4 border-zinc-600 z-50 ">
        
</div>



