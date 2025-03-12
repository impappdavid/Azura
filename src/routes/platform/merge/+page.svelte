<script>
    import Navbar from "$lib/components/myComponents/platform/navbar.svelte";
    
    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import auro from "$lib/imgs/goldenretriver.jpg";

    import { page } from '$app/stores';
    import Canvas from "$lib/components/myComponents/platform/merge/canvas.svelte";
    import Toolbar from "$lib/components/myComponents/platform/merge/toolbar.svelte";
    import Sidebar from "$lib/components/myComponents/platform/sidebar.svelte";

   

    const pageUrl = $page.params.slug;
    let imageUrl;
    let activeName;

    if(pageUrl == "kai"){
        imageUrl = def3;
        activeName = "Kai";
    }else if(pageUrl == "lena"){
        imageUrl = def1;
        activeName = "Lena";
    }else if(pageUrl == "noah"){
        imageUrl = def4;
        activeName = "Noah";
    }else if(pageUrl == "auro"){
        imageUrl = auro;
        activeName = "Auro";
    }


    
</script>

<div class="bg-zinc-950 h-screen w-full flex justify-center items-center">
    <Navbar />
    

    <div class="absolute inset-0 flex sm:flex-row flex-col gap-2 pt-16 pb-4 px-2 ">
        <div
            class="hidden xl:flex flex-col w-full max-w-[50px] justify-between items-start animate-[slideinLeft_1s_ease-in-out] relative"
        >
            <Sidebar />
        </div>
        <Canvas imageUrl={auro}/>
        <Toolbar/>
    </div>
</div>

