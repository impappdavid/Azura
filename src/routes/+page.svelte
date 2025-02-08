<script>
    import Season from "$lib/components/myComponents/home/season.svelte";
    import Target from "$lib/components/myComponents/home/target.svelte";
    import Navbar from "$lib/components/myComponents/navbar.svelte";
    import background from "$lib/imgs/bg3.png";

    
</script>

<div class="bg-[#eaebe5] h-screen">
    <Navbar />
    <section class="w-full h-screen max-h-screen relative">
        <img
            src={background}
            alt="Background"
            class="w-full h-screen object-cover"
        />
        <!-- Animated scroll down icon at the bottom center -->
        <div
            class="absolute bottom-8 left-1/2 transform -translate-x-1 border-2 border-white h-14 w-8 rounded-full flex items-end justify-center backdrop-blur-md"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="animate-bounce"
                width="44"
                height="44"
                viewBox="0 0 256 256"
                ><g fill="#f4eeee"
                    ><path
                        d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24"
                        opacity="0.2"
                    /><path
                        d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
                    /></g
                ></svg
            >
        </div>
    </section>
    <section
        class="w-full h-fit py-8 bg-[#eaebe5] flex flex-col items-center justify-center gap-4"
    >
        <Season />
    </section>
    <section
        class="p-4 w-full h-screen bg-[#df2623cc] flex justify-center items-center py-16"
    >
       <Target />
    </section>
</div>
