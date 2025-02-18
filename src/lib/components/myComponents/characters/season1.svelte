<script>
    import icon38 from "$lib/imgs/icons/icon38.png";
    import icon38Flip from "$lib/imgs/icons/icon38Flip.png";
    import icon38Mirror from "$lib/imgs/icons/icon38Mirror.png";
    import icon38MirrorTop from "$lib/imgs/icons/icon38MirrorTop.png";
    import icon22 from "$lib/imgs/icons/icon22.png";
    import icon22Right from "$lib/imgs/icons/icon22Right.png";

    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import auro from "$lib/imgs/goldenretriver.jpg";
</script>

<div class="flex justify-between h-full sm:h-screen">
    <div
        class="flex flex-col w-full max-w-[50px] sm:max-w-[100px] justify-between items-start animate-[slideinLeft_1s_ease-in-out]"
    >
        <img src={icon38} alt="icon" class="w-16 h-34" />
        <img src={icon22} alt="icon" class="w-14 h-28" />
        <img src={icon38Flip} alt="icon" class="w-16 h-34" />
    </div>

    <div
        class="w-full flex flex-col font-body gap-4 py-4 animate-[slideinFromTop_3s_ease-in-out]"
    >
        <div
            class="text-xl sm:text-3xl font-body p-1 px-2 border-2 border-green-500/80 text-green-500 w-fit"
        >
            S1
        </div>
        <div class="hidden h-full sm:grid  grid-cols-4 gap-2">
            <div
                class="group h-full w-full flex flex-col overflow-hidden cursor-pointer"
            >
                <div
                    class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]"
                >
                    <img
                        src={def1}
                        alt="def1"
                        class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                    />
                </div>
                <div
                    class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]"
                >
                    <div
                        class=" opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
                    >
                        <h3 class="text-5xl text-white font-bold font-body">
                            Lena
                        </h3>
                    </div>
                </div>
            </div>
            <div
                class="group h-full w-full flex flex-col overflow-hidden cursor-pointer"
            >
                <div
                    class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]"
                >
                    <img
                        src={def3}
                        alt="def1"
                        class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                    />
                </div>
                <div
                    class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]"
                >
                    <div
                        class=" opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
                    >
                        <h3 class="text-5xl text-white font-bold font-body">
                            Kai
                        </h3>
                    </div>
                </div>
            </div>
            <div
                class="group h-full w-full flex flex-col overflow-hidden cursor-pointer"
            >
                <div
                    class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]"
                >
                    <img
                        src={auro}
                        alt="def1"
                        class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                    />
                </div>
                <div
                    class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]"
                >
                    <div
                        class=" opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
                    >
                        <h3 class="text-5xl text-white font-bold font-body">
                            Auro
                        </h3>
                    </div>
                </div>
            </div>
            <div
                class="group h-full w-full flex flex-col overflow-hidden cursor-pointer"
            >
                <div
                    class="h-full transition-all duration-500 ease-in-out group-hover:h-[94%]"
                >
                    <img
                        src={def4}
                        alt="def1"
                        class="h-full w-full object-cover transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                    />
                </div>
                <div
                    class="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[6%]"
                >
                    <div
                        class=" opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
                    >
                        <h3 class="text-5xl text-white font-bold font-body">
                            Noah
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:hidden grid grid-cols-1 gap-2">
            <div class="group h-full w-full flex flex-col overflow-hidden cursor-pointer">
                <div class="h-full transition-all duration-500 ease-in-out  relative">
                    <img src={def1} alt="def1" class="h-full max-h-[180px] object-top w-full object-cover transition-all duration-500 ease-in-out " />
                    <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                        <h3 class="text-5xl text-white font-bold font-body">Lena</h3>
                    </div>
                </div>
                
            </div>
            <div class="group h-full w-full  flex flex-col overflow-hidden cursor-pointer">
                <div class="h-full transition-all duration-500 ease-in-out relative">
                    <img src={def3} alt="def1" class="h-full max-h-[180px] object-top w-full object-cover transition-all duration-500 ease-in-out " />
                    <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                        <h3 class="text-5xl text-white font-bold font-body">Kai</h3>
                    </div>
                </div>
                
            </div>
            <div class="group h-full w-full  flex flex-col overflow-hidden cursor-pointer">
                <div class="h-full relative">
                    <img src={def4} alt="def1" class="h-full max-h-[180px] object-top w-full object-cover transition-all duration-500 ease-in-out " />
                    <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                        <h3 class="text-5xl text-white font-bold font-body">Noah</h3>
                    </div>
                </div>
                
            </div>
            <div class="group h-full w-full flex flex-col overflow-hidden cursor-pointer">
                <div class="h-full relative">
                    <img src={auro} alt="def1" class="h-full max-h-[180px] w-full object-center object-cover transition-all duration-500 ease-in-out " />
                    <div class="mt-2 absolute bottom-0 left-0 bg-zinc-900 p-2 px-4">
                        <h3 class="text-5xl text-white font-bold font-body">Auro</h3>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div
        class="flex flex-col w-full max-w-[50px] sm:max-w-[100px] justify-between items-end animate-[slideinRight_1s_ease-in-out]"
    >
        <img
            src={icon38MirrorTop}
            alt="icon"
            class="w-16 h-34 transform scaleX(-1)"
        />
        <img src={icon22Right} alt="icon" class="w-14 h-28" />
        <img src={icon38Mirror} alt="icon" class="w-16 h-34" />
    </div>
</div>
