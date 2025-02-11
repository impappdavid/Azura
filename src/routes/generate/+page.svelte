<script>
    import Navbar from "$lib/components/myComponents/navbar.svelte";
    import background from "$lib/imgs/bg3.png";
    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import Button from "$lib/components/ui/button/button.svelte";

    const rarity = [
        { value: "common", label: "Common", left: 5000 },
        { value: "uncommon", label: "Uncommon", left: 2500 },
        { value: "rare", label: "Rare", left: 1000 },
        { value: "epic", label: "Epic", left: 500 },
        { value: "legendary", label: "Legendary", left: 50 },
    ];

    let value = $state("");

    const triggerContent = $derived(
        rarity.find((f) => f.value === value)?.label ?? "Choose rarity",
    );
</script>

<div class="bg-zinc-900 h-screen w-full flex justify-center items-center">
    <Navbar />
    <section class="w-full h-screen absolute">
        <img
            src={background}
            alt="Background"
            class="w-full h-full object-cover"
        />
    </section>

    <div class="absolute inset-0 flex items-center justify-center">
        <div
            class="bg-zinc-900/90 backdrop-blur-md p-2 rounded-2xl shadow-lg text-center w-full h-fit max-w-6xl flex flex-col gap-4"
        >
            <div class="w-full text-center text-2xl text-white font-body">
                Choose a character
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <a href="/generate/kai"
                    class="h-full max-h-[460px] w-full max-w-[180px] sm:max-w-[380px] transition-all duration-300 ease-in-out relative rounded-xl cursor-pointer group"
                >
                    <div class="relative overflow-hidden rounded-xl h-[200px] sm:h-[420px]">
                        <img
                            src={def3}
                            alt="def1"
                            class="h-full w-full object-cover transition-all duration-300 ease-in-out rounded-xl group-hover:scale-110"
                        />
                    </div>
                    <div
                        class="mt-2 absolute bottom-2 left-2 flex flex-col gap-1"
                    >
                        <div class="font-logo text-start text-white text-3xl">
                            Kai
                        </div>
                        <div
                            class="bg-zinc-900/50 backdrop-blur-sm rounded-full p-1 px-1.5 flex gap-1 items-center"
                        >
                            <div
                                class="w-5 h-5 rounded-full bg-gradient-to-br from-zinc-100 to-red-400"
                            ></div>
                            <div class="text-xs text-zinc-200 font-logo pr-1">AZURA</div>
                        </div>
                    </div>
                    <div
                        class="mt-2 absolute top-0 right-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
                    >
                        <div class="text-xs text-zinc-200">Default</div>
                    </div>
                </a>

                <a href="/generate/lena"
                    class="h-full max-h-[460px] w-full max-w-[180px] sm:max-w-[380px] transition-all duration-300 ease-in-out relative rounded-xl cursor-pointer group"
                >
                    <div class="relative overflow-hidden rounded-xl h-[200px] sm:h-[420px]">
                        <img
                            src={def1}
                            alt="def1"
                            class="h-full w-full object-cover transition-all duration-300 ease-in-out rounded-xl group-hover:scale-110"
                        />
                    </div>
                    <div
                        class="mt-2 absolute bottom-2 left-2 flex flex-col gap-1"
                    >
                        <div class="font-logo text-start text-white text-3xl">
                            Lena
                        </div>
                        <div
                            class="bg-zinc-900/50 backdrop-blur-sm rounded-full p-1 px-1.5 flex gap-1 items-center"
                        >
                            <div
                                class="w-5 h-5 rounded-full bg-gradient-to-br from-zinc-100 to-red-400"
                            ></div>
                            <div class="text-xs text-zinc-200 font-logo pr-1">AZURA</div>
                        </div>
                    </div>
                    <div
                        class="mt-2 absolute top-0 right-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
                    >
                        <div class="text-xs text-zinc-200">Default</div>
                    </div>
                </a>
                <a href="/generate/noah"
                    class="h-full max-h-[460px] w-full max-w-[180px] sm:max-w-[380px] transition-all duration-300 ease-in-out relative rounded-xl cursor-pointer group"
                >
                    <div class="relative overflow-hidden rounded-xl h-[200px] sm:h-[420px]">
                        <img
                            src={def4}
                            alt="def1"
                            class="h-full w-full object-cover transition-all duration-300 ease-in-out rounded-xl group-hover:scale-110"
                        />
                    </div>
                    <div
                        class="mt-2 absolute bottom-2 left-2 flex flex-col gap-1"
                    >
                        <div class="font-logo text-start text-white text-3xl">
                            Noah
                        </div>
                        <div
                            class="bg-zinc-900/50 backdrop-blur-sm rounded-full p-1 px-1.5 flex gap-1 items-center"
                        >
                            <div
                                class="w-5 h-5 rounded-full bg-gradient-to-br from-zinc-100 to-red-400"
                            ></div>
                            <div class="text-xs text-zinc-200 font-logo pr-1">AZURA</div>
                        </div>
                    </div>
                    <div
                        class="mt-2 absolute top-0 right-2 bg-zinc-900/50 backdrop-blur-sm rounded-lg p-1 px-2 flex gap-1 items-center"
                    >
                        <div class="text-xs text-zinc-200">Default</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
