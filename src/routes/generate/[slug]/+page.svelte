<script>
    import Navbar from "$lib/components/myComponents/navbar.svelte";
    import background from "$lib/imgs/bg3.png";
    import def1 from "$lib/imgs/s1-0.jpg";
    import def3 from "$lib/imgs/s1-1.jpg";
    import def4 from "$lib/imgs/s1-2.jpg";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import Button from "$lib/components/ui/button/button.svelte";

    import { page } from '$app/stores';

    const rarity = [
        { value: "common", label: "Common", left: 5000 },
        { value: "uncommon", label: "Uncommon", left: 2500 },
        { value: "rare", label: "Rare", left: 1000 },
        { value: "epic", label: "Epic", left: 500 },
        { value: "legendary", label: "Legendary", left: 50 },
    ];

    const type = [
        {valueType: "investment", label: "Investment"},
        {valueType: "normal", label:"Normal"}
    ];

    const investmentRarity = [
        { iValue: "common", label: "Common", left: 500 },
        { iValue: "uncommon", label: "Uncommon", left: 250 },
        { iValue: "rare", label: "Rare", left: 100 },
        { iValue: "epic", label: "Epic", left: 50 },
        { iValue: "legendary", label: "Legendary", left: 5 },
    ];

    let value = $state("");

    const triggerContent = $derived(
        rarity.find((f) => f.value === value)?.label ?? "Choose rarity",
    );

    let valueType = $state("");

    const triggerContentType = $derived(
        type.find((f) => f.valueType === valueType)?.label ?? "Choose type",
    );

    let iValue = $state("");

    const triggerContentInvest = $derived(
        investmentRarity.find((f) => f.iValue === iValue)?.label ?? "Choose Rarity",
    );

    const pageUrl = $page.params.slug;
    let imageUrl;

    if(pageUrl == "kai"){
        imageUrl = def3;
    }else if(pageUrl == "lena"){
        imageUrl = def1;
    }else if(pageUrl == "noah"){
        imageUrl = def4;
    }


    
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
            class="bg-zinc-900/90 backdrop-blur-md p-2 rounded-2xl shadow-lg text-center w-full h-fit max-w-6xl grid sm:grid-cols-2 gap-4 max-h-[700px] overflow-y-scroll"
        >
            <div class="w-full h-fit">
                <img src={imageUrl} alt="def1" class="sm:h-fit w-full rounded-xl" />
            </div>
            <div class="w-full flex flex-col gap-2 items-start justify-between">
                <div class="font-logo text-white text-5xl flex items-end text-start gap-1">
                    {#if pageUrl == "lena"}
                        Lena 
                    {:else if pageUrl == "noah"}
                        Noah          
                    {:else if pageUrl == "kai"}   
                        Kai          
                    {:else}
                        We dont find this character
                    {/if}
                </div>
                <div class="flex flex-col gap-4 items-start w-full justify-start h-full ">
                    <div class="flex flex-col w-full">
                        <div class="font-body text-sm text-zinc-300 text-start">
                            Type
                        </div>
                        <Select.Root
                            type="single"
                            name="choosetype"
                            bind:value={valueType}
                        >
                            <Select.Trigger class="w-full text-white">
                                {triggerContentType}
                            </Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    {#each type as isInvestment}
                                        <Select.Item
                                            value={isInvestment.valueType}
                                            label={`${isInvestment.label}`}
                                        />
                                    {/each}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </div>
                    {#if valueType == "normal"}
                    <div class="flex flex-col w-full">
                        <div class="font-body text-sm text-zinc-300 text-start">
                            Rarity
                        </div>
                        <Select.Root
                            type="single"
                            name="favoriteFruit"
                            bind:value
                        >
                            <Select.Trigger class="w-full text-white">
                                {triggerContent}
                            </Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    {#each rarity as rare}
                                        <Select.Item
                                            value={rare.value}
                                            label={`${rare.label} (${rare.left})`}
                                        />
                                    {/each}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </div>
                    {:else}
                    <div class="flex flex-col w-full">
                        <div class="font-body text-sm text-zinc-300 text-start">
                            Investment rarity
                        </div>
                        <Select.Root
                            type="single"
                            name="favoriteFruit"
                            bind:value={iValue}
                        >
                            <Select.Trigger class="w-full text-white">
                                {triggerContentInvest}
                            </Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    {#each investmentRarity as iValue}
                                        <Select.Item
                                            value={iValue.iValue}
                                            label={`${iValue.label} (${iValue.left})`}
                                        />
                                    {/each}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </div>
                    {/if}
                    {#if value || iValue}
                    <div class="flex flex-col w-full">
                        <div class="font-body text-sm text-zinc-300 text-start">
                            Background
                        </div>
                        <Input
                            type="text"
                            placeholder="Neon City, Dark Alley, Space Station, Ancient Ruins"
                            class="max-w-full"
                        />
                    </div>
                    {/if}
                    {#if value || iValue == "uncommon" || value|| iValue === "rare" || value|| iValue == "epic" || value|| iValue == "legendary"}
                        <div class="flex flex-col w-full">
                            <div
                                class="font-body text-sm text-zinc-300 text-start"
                            >
                                Outfit
                            </div>
                            <Input
                                type="text"
                                placeholder="Casual, Cyberpunk, Fantasy Armor, Streetwear"
                                class="max-w-full"
                            />
                        </div>
                    {/if}
                    {#if value || iValue === "rare" || value || iValue == "epic" || value || iValue == "legendary"}
                        <div class="flex flex-col w-full">
                            <div
                                class="font-body text-sm text-zinc-300 text-start"
                            >
                                Accessories
                            </div>
                            <Input
                                type="text"
                                placeholder="Glasses, Hat / Helmet, Weapon, Pets"
                                class="max-w-full"
                            />
                        </div>
                    {/if}
                    {#if value || iValue === "legendary"}
                        <div class="flex flex-col w-full">
                            <div
                                class="font-body text-sm text-zinc-300 text-start"
                            >
                                Face expression
                            </div>
                            <Input
                                type="text"
                                placeholder="Happy, Angry, Sad"
                                class="max-w-full"
                            />
                        </div>
                    {/if}
                    
                    
                    
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <Button
                        class="w-full bg-[#9587e0] font-body rounded-lg hover:bg-[#9487e0b4] flex text-white"
                    >
                    {#if value}
                    Mint for {value == "common"
                    ? 0.05
                    : value == "uncommon"
                      ? 0.1
                      : value == "rare"
                        ? 0.25
                        : value == "epic"
                          ? 0.5
                          : value == "legendary"
                            ? 1
                            : "null"}
                            {:else}
                            Mint for {iValue == "common"
                    ? 0.125
                    : iValue == "uncommon"
                      ? 0.25
                      : iValue == "rare"
                        ? 0.5
                        : iValue == "epic"
                          ? 1.25
                          : iValue == "legendary"
                            ? 2.5
                            : "null"}
                    {/if}
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
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
                    </Button>
                    <Button
                        class="w-full bg-white text-black font-body rounded-lg hover:bg-white/80"
                        >Generate Your NFT</Button
                    >
                </div>
            </div>
        </div>
    </div>
</div>

