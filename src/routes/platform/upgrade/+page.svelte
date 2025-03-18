<script>
    import Navbar from "$lib/components/myComponents/platform/navbar.svelte";
    
    //test image
    import lena from "$lib/imgs/s1-0.jpg";

    import Canvas from "$lib/components/myComponents/platform/upgrade/canvas.svelte";
    import Toolbar from "$lib/components/myComponents/platform/upgrade/toolbar.svelte";
    import Sidebar from "$lib/components/myComponents/platform/sidebar.svelte";

   

  


    
</script>

<div class="bg-zinc-950 h-screen w-full flex justify-center items-center">
    <Navbar />
    

    <div class="absolute inset-0 flex sm:flex-row flex-col gap-2 pt-16 pb-4 px-2 ">
        <div
            class="hidden xl:flex flex-col w-full max-w-[50px] justify-between items-start animate-[slideinLeft_1s_ease-in-out] relative"
        >
            <Sidebar />
        </div>
        <Canvas imageUrl={lena}/>
        <Toolbar/>
    </div>
</div>

