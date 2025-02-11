<script>
    import Navbar from "$lib/components/myComponents/navbar.svelte";

    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import auro from "$lib/imgs/goldenretriver.jpg";
</script>


<div class="bg-zinc-900 h-screen">
    <Navbar />
    <section class="h-full max-h-screen hidden sm:grid sm:grid-cols-4 ">
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]">
                <img src={def1} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0" />
            </div>
            <div class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]">
                <div class="mt-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                    <h3 class="text-5xl text-white font-bold font-logo">Lena</h3>
                </div>
            </div>
        </div>
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]">
                <img src={def3} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0" />
            </div>
            <div class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]">
                <div class="mt-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                    <h3 class="text-5xl text-white font-bold font-logo">Kai</h3>
                </div>
            </div>
        </div>
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]">
                <img src={def4} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0" />
            </div>
            <div class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]">
                <div class="mt-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                    <h3 class="text-5xl text-white font-bold font-logo">Noah</h3>
                </div>
            </div>
        </div>
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]">
                <img src={auro} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0" />
            </div>
            <div class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]">
                <div class="mt-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                    <h3 class="text-5xl text-white font-bold font-logo">Auro</h3>
                </div>
            </div>
        </div>
      
    </section>
    <section class="h-full max-h-screen  sm:hidden flex flex-col py-16">
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full transition-all duration-500 ease-in-out  relative">
                <img src={def1} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out " />
                <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                    <h3 class="text-5xl text-white font-bold font-logo">Lena</h3>
                </div>
            </div>
            
        </div>
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full transition-all duration-500 ease-in-out relative">
                <img src={def3} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out " />
                <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                    <h3 class="text-5xl text-white font-bold font-logo">Kai</h3>
                </div>
            </div>
            
        </div>
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full relative">
                <img src={def4} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out " />
                <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                    <h3 class="text-5xl text-white font-bold font-logo">Noah</h3>
                </div>
            </div>
            
        </div>
        <div class="group h-full w-full p-2 flex flex-col overflow-hidden cursor-pointer">
            <div class="h-full relative">
                <img src={auro} alt="def1" class="h-full w-full object-cover transition-all duration-500 ease-in-out " />
                <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                    <h3 class="text-5xl text-white font-bold font-logo">Auro</h3>
                </div>
            </div>
            
        </div>
      
    </section>
</div>