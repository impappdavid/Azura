<script>
    import { onMount } from "svelte";
    import { Button } from "$lib/components/ui/button";
    import * as Select from "$lib/components/ui/select";
    import { Textarea } from "$lib/components/ui/textarea";
    import * as HoverCard from "$lib/components/ui/hover-card";
    import { page } from "$app/stores";

    const rarity = [
        { value: "common", label: "Common", left: 5000 },
        { value: "uncommon", label: "Uncommon", left: 2500 },
        { value: "rare", label: "Rare", left: 1000 },
        { value: "epic", label: "Epic", left: 500 },
        { value: "legendary", label: "Legendary", left: 50 },
    ];

    const type = [
        { valueType: "normal", label: "Normal" },
        { valueType: "investment", label: "Investment" },
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
        investmentRarity.find((f) => f.iValue === iValue)?.label ??
            "Choose Rarity",
    );

    const pageUrl = $page.params.slug;
    let activeName;

    if (pageUrl == "kai") {
        activeName = "Kai";
    } else if (pageUrl == "lena") {
        activeName = "Lena";
    } else if (pageUrl == "noah") {
        activeName = "Noah";
    } else if (pageUrl == "auro") {
        activeName = "Auro";
    }

    let tokens = $state(10);

    let isDisabled = $state(false);

    let state = $state("default"); // States: 'default', 'loading', 'success'

    const handleClick = async () => {
        state = "loading";

        // Simulating an API call or some asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 2000));

        state = "success";
        tokens += 10;
        console.log(tokens)
        isDisabled = true;
        // Reset to default after showing success
        setTimeout(() => {
            state = "default";
        }, 2000); // Reset after 1 second
    };
</script>

<div
    class="w-full sm:h-full bg-zinc-900 sm:max-w-sm  border border-zinc-800 flex flex-col justify-between gap-4 p-4 z-50"
>
    <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
            <div class="text-3xl font-body">Auro</div>

            <div class="text-sm font-body">#0</div>
        </div>
        <div class="flex w-full gap-2">
            <div class="flex flex-col w-full gap-1">
                <div class="font-body text-xs text-zinc-300 text-start">
                    Type
                </div>
                <Select.Root
                    type="single"
                    name="choosetype"
                    bind:value={valueType}
                >
                    <Select.Trigger
                        class="w-full text-white rounded-none text-xs h-8"
                    >
                        {triggerContentType}
                    </Select.Trigger>
                    <Select.Content class="rounded-none">
                        <Select.Group>
                            {#each type as isInvestment}
                                <Select.Item class="rounded-none"
                                    value={isInvestment.valueType}
                                    label={`${isInvestment.label}`}
                                />
                            {/each}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>
            <div class="flex flex-col w-full">
                <div class="font-body text-sm text-zinc-300 text-start">
                    Rarity
                </div>
                <Select.Root type="single" name="favoriteFruit" bind:value>
                    <Select.Trigger
                        class="w-full text-white rounded-none text-xs h-8"
                    >
                        {triggerContent}
                    </Select.Trigger>
                    <Select.Content class="rounded-none">
                        <Select.Group>
                            {#each rarity as rare}
                                <Select.Item class="rounded-none"
                                    value={rare.value}
                                    label={`${rare.label} (${rare.left})`}
                                />
                            {/each}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
        {#if value}
        <div class="">
            <div class="flex flex-col w-full gap-1">
                <div class="font-body text-xs text-zinc-300 text-start">
                    Background
                </div>
                <Textarea class="rounded-none"
                    placeholder="Sunset over a calm ocean with golden and purple skies."
                />
            </div>
        </div>
        {/if}
        {#if value == "uncommon" || value == "rare" || value == "epic" || value == "legendary"}
        <div class="">
            <div class="flex flex-col gap-1 w-full">
                <div class="font-body text-xs text-zinc-300 text-start">
                    Outfit
                </div>
                <Textarea class="rounded-none"
                    placeholder="Casual streetwear with a hoodie, jeans, and sneakers."
                />
            </div>
        </div>
        {/if}
        {#if  value == "rare" || value == "epic" || value == "legendary"}
        <div class="">
            <div class="flex flex-col gap-1 w-full">
                <div class="font-body text-xs text-zinc-300 text-start">
                    Accessories
                </div>
                <Textarea class="rounded-none"
                    placeholder="Simple silver watch and black sunglasses."
                />
            </div>
        </div>
        {/if}
        {#if value == "epic" || value == "legendary"}
        <div class="">
            <div class="flex flex-col gap-1 w-full">
                <div class="font-body text-xs text-zinc-300 text-start">
                    Face expression
                </div>
                <Textarea class="rounded-none" placeholder="Relaxed with a subtle smile." />
            </div>
        </div>
        {/if}
    </div>
    <div class="flex flex-col gap-2">
        {#if !value}
        <Button
            disabled
            class="w-full bg-[#9587e0] font-body rounded-none hover:bg-[#9487e0b4] flex text-white"
        >
            {#if value && iValue == "normal"}
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
            {:else if iValue == "investment"}
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
            <!--valueType-->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                ><path
                    fill="#f9f8fb"
                    fill-rule="evenodd"
                    d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
                /></svg
            >
        </Button>
        {:else}
            <Button
            class="w-full bg-[#9587e0] font-body rounded-none hover:bg-[#9487e0b4] flex text-white"
        >
            {#if value && valueType == "normal"}
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
            {:else if valueType == "investment"}
                Mint for {value == "common"
                    ? 0.125
                    : value == "uncommon"
                      ? 0.25
                      : value == "rare"
                        ? 0.5
                        : value == "epic"
                          ? 1.25
                          : value == "legendary"
                            ? 2.5
                            : "null"}
            {/if}
            
            

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                ><path
                    fill="#f9f8fb"
                    fill-rule="evenodd"
                    d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
                /></svg
            >
        </Button>
        {/if}
        <Button
            class="w-full bg-white text-black font-body rounded-none hover:bg-white/80 flex gap-1 "
            >Generate Your NFT</Button
        >
        <div
            class="flex justify-between items-center bg-zinc-800/50 border drop-shadow-md p-2 "
        >
            <div class="flex gap-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    ><path
                        fill="#9587e0"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12"
                        opacity="0.5"
                    /><path
                        fill="#9587e0"
                        d="m11.227 8.569l-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804c.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635s1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804c-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636s-1.061.263-2.364 1.3"
                    /></svg
                >
                <div class="flex flex-col gap-0">
                    <div class="text-sm font-body text-zinc-400">Balance</div>
                    <div class="text-lg text-white font-body font-semibold">
                        {tokens}
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                {#if isDisabled}
                    <HoverCard.Root openDelay={0} closeDelay={0}>
                        <HoverCard.Trigger
                            rel="noreferrer noopener"
                            class="group font-medium tracking-wide font-body text-sm px-3  py-1.5 rounded-full transition-all cursor-default flex items-center"
                        >
                            <Button
                                class="text-xs rounded-none bg-[#9587e0] hover:bg-[#9487e0b4] text-white"
                                disabled>Claim 10</Button
                            >
                        </HoverCard.Trigger>
                        <HoverCard.Content
                            class="flex justify-center  gap-1 p-2 bg-[#9587e0] w-fit border-none"
                        >
                            <div class=" flex rounded-md font-body text-xs">
                                Claim in 20:19:23
                            </div>
                        </HoverCard.Content>
                    </HoverCard.Root>
                {:else}
                    <Button
                        class="text-xs rounded-none bg-[#9587e0] hover:bg-[#9487e0b4] text-white py-2 px-4 w-20"
                        onclick={handleClick}
                    >
                        {#if state === "loading"}
                            <div
                                class="w-5 h-5 border-2 border-t-2 border-t-white border-transparent rounded-full animate-spin"
                            ></div>
                        {:else if state === "success"}
                            <span class="font-body">Claimed!</span>
                        {:else}
                            Claim 10
                        {/if}
                    </Button>
                {/if}
            </div>
        </div>
    </div>
</div>
