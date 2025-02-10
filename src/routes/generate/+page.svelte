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
            <div class="w-full text-center text-2xl text-white font-body">Choose a character</div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <a href="/generate/kai"
                    class="relative w-full max-w-md overflow-hidden rounded-2xl cursor-pointer group bg-zinc-900 border border-zinc-800 p-2 flex flex-col gap-2"
                >
                    <div class="overflow-hidden rounded-xl">
                        <img
                            src={def3}
                            alt="def3"
                            class="w-full h-auto rounded-md object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <div class="font-logo text-3xl text-white">Kai</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                ><g fill="none"
                                    ><path
                                        fill="url(#tokenBrandedSolana0)"
                                        d="M18.413 7.902a.62.62 0 0 1-.411.163H3.58c-.512 0-.77-.585-.416-.928l2.369-2.284a.6.6 0 0 1 .41-.169H20.42c.517 0 .77.59.41.935z"
                                    /><path
                                        fill="url(#tokenBrandedSolana1)"
                                        d="M18.413 19.158a.62.62 0 0 1-.411.158H3.58c-.512 0-.77-.58-.416-.923l2.369-2.29a.6.6 0 0 1 .41-.163H20.42c.517 0 .77.586.41.928z"
                                    /><path
                                        fill="url(#tokenBrandedSolana2)"
                                        d="M18.413 10.473a.62.62 0 0 0-.411-.158H3.58c-.512 0-.77.58-.416.923l2.369 2.29c.111.103.257.16.41.163H20.42c.517 0 .77-.586.41-.928z"
                                    /><defs
                                        ><linearGradient
                                            id="tokenBrandedSolana0"
                                            x1="3.001"
                                            x2="21.459"
                                            y1="55.041"
                                            y2="54.871"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#599db0" /><stop
                                                offset="1"
                                                stop-color="#47f8c3"
                                            /></linearGradient
                                        ><linearGradient
                                            id="tokenBrandedSolana1"
                                            x1="3.001"
                                            x2="21.341"
                                            y1="9.168"
                                            y2="9.027"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#c44fe2" /><stop
                                                offset="1"
                                                stop-color="#73b0d0"
                                            /></linearGradient
                                        ><linearGradient
                                            id="tokenBrandedSolana2"
                                            x1="4.036"
                                            x2="20.303"
                                            y1="12.003"
                                            y2="12.003"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#778cbf" /><stop
                                                offset="1"
                                                stop-color="#5dcdc9"
                                            /></linearGradient
                                        ></defs
                                    ></g
                                ></svg
                            >
                        </div>
                    </div>
                </a>

                <a href="/generate/lena"
                    class="relative w-full max-w-md overflow-hidden rounded-2xl cursor-pointer group bg-[#df2623cc] p-2 flex flex-col gap-2"
                >
                    <div class="overflow-hidden rounded-xl">
                        <img
                            src={def1}
                            alt="def1"
                            class="w-full h-auto rounded-md object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <div class="font-logo text-3xl text-white">
                                Lena
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                ><g fill="none"
                                    ><path
                                        fill="url(#tokenBrandedSolana0)"
                                        d="M18.413 7.902a.62.62 0 0 1-.411.163H3.58c-.512 0-.77-.585-.416-.928l2.369-2.284a.6.6 0 0 1 .41-.169H20.42c.517 0 .77.59.41.935z"
                                    /><path
                                        fill="url(#tokenBrandedSolana1)"
                                        d="M18.413 19.158a.62.62 0 0 1-.411.158H3.58c-.512 0-.77-.58-.416-.923l2.369-2.29a.6.6 0 0 1 .41-.163H20.42c.517 0 .77.586.41.928z"
                                    /><path
                                        fill="url(#tokenBrandedSolana2)"
                                        d="M18.413 10.473a.62.62 0 0 0-.411-.158H3.58c-.512 0-.77.58-.416.923l2.369 2.29c.111.103.257.16.41.163H20.42c.517 0 .77-.586.41-.928z"
                                    /><defs
                                        ><linearGradient
                                            id="tokenBrandedSolana0"
                                            x1="3.001"
                                            x2="21.459"
                                            y1="55.041"
                                            y2="54.871"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#599db0" /><stop
                                                offset="1"
                                                stop-color="#47f8c3"
                                            /></linearGradient
                                        ><linearGradient
                                            id="tokenBrandedSolana1"
                                            x1="3.001"
                                            x2="21.341"
                                            y1="9.168"
                                            y2="9.027"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#c44fe2" /><stop
                                                offset="1"
                                                stop-color="#73b0d0"
                                            /></linearGradient
                                        ><linearGradient
                                            id="tokenBrandedSolana2"
                                            x1="4.036"
                                            x2="20.303"
                                            y1="12.003"
                                            y2="12.003"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#778cbf" /><stop
                                                offset="1"
                                                stop-color="#5dcdc9"
                                            /></linearGradient
                                        ></defs
                                    ></g
                                ></svg
                            >
                        </div>
                    </div>
                </a>
                <a href="generate/noah"
                    class="relative w-full max-w-md overflow-hidden rounded-2xl cursor-pointer group bg-zinc-900 p-2  border border-zinc-800 flex flex-col gap-2"
                >
                    <div class="overflow-hidden rounded-xl">
                        <img
                            src={def4}
                            alt="def4"
                            class="w-full h-auto rounded-md object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <div class="font-logo text-3xl text-white">
                                Noah
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                ><g fill="none"
                                    ><path
                                        fill="url(#tokenBrandedSolana0)"
                                        d="M18.413 7.902a.62.62 0 0 1-.411.163H3.58c-.512 0-.77-.585-.416-.928l2.369-2.284a.6.6 0 0 1 .41-.169H20.42c.517 0 .77.59.41.935z"
                                    /><path
                                        fill="url(#tokenBrandedSolana1)"
                                        d="M18.413 19.158a.62.62 0 0 1-.411.158H3.58c-.512 0-.77-.58-.416-.923l2.369-2.29a.6.6 0 0 1 .41-.163H20.42c.517 0 .77.586.41.928z"
                                    /><path
                                        fill="url(#tokenBrandedSolana2)"
                                        d="M18.413 10.473a.62.62 0 0 0-.411-.158H3.58c-.512 0-.77.58-.416.923l2.369 2.29c.111.103.257.16.41.163H20.42c.517 0 .77-.586.41-.928z"
                                    /><defs
                                        ><linearGradient
                                            id="tokenBrandedSolana0"
                                            x1="3.001"
                                            x2="21.459"
                                            y1="55.041"
                                            y2="54.871"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#599db0" /><stop
                                                offset="1"
                                                stop-color="#47f8c3"
                                            /></linearGradient
                                        ><linearGradient
                                            id="tokenBrandedSolana1"
                                            x1="3.001"
                                            x2="21.341"
                                            y1="9.168"
                                            y2="9.027"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#c44fe2" /><stop
                                                offset="1"
                                                stop-color="#73b0d0"
                                            /></linearGradient
                                        ><linearGradient
                                            id="tokenBrandedSolana2"
                                            x1="4.036"
                                            x2="20.303"
                                            y1="12.003"
                                            y2="12.003"
                                            gradientUnits="userSpaceOnUse"
                                            ><stop stop-color="#778cbf" /><stop
                                                offset="1"
                                                stop-color="#5dcdc9"
                                            /></linearGradient
                                        ></defs
                                    ></g
                                ></svg
                            >
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
