<script>
    import * as Select from "$lib/components/ui/select/index.js";
    import { Input } from "$lib/components/ui/input";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";

    const rarity = [
        { value: "lowtohigh", label: "Price: low to high" },
        { value: "hightolow", label: "Price: high to low" },
        { value: "recentlylisted", label: "Recently listed" },
    ];

    let value = $state("");

    const triggerContent = $derived(
        rarity.find((f) => f.value === value)?.label ?? "Sort by",
    );
</script>

<div
    class="w-full rounded-lg hidden sm:flex gap-2 h-fit bg-zinc-950/50 border border-zinc-800 p-1"
>
    <div
        class="border-r border-zinc-800 w-10 pr-2 flex items-center justify-center"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-filter text-white"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M20 3h-16a1 1 0 0 0 -1 1v2.227l.008 .223a3 3 0 0 0 .772 1.795l4.22 4.641v8.114a1 1 0 0 0 1.316 .949l6 -2l.108 -.043a1 1 0 0 0 .576 -.906v-6.586l4.121 -4.12a3 3 0 0 0 .879 -2.123v-2.171a1 1 0 0 0 -1 -1z"
            /></svg
        >
    </div>
    <div class="border-r border-zinc-800">
        <ToggleGroup.Root type="multiple" class="pr-1">
            <ToggleGroup.Item
                value="common"
                aria-label="common"
                class="h-7 text-zinc-400 text-xs hover:bg-zinc-900/50  border border-transparent hover:border-zinc-800 hover:text-white transition-all"
            >
                Common
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="uncommon"
                aria-label="uncommon"
                class="h-7 text-zinc-400 text-xs hover:bg-zinc-900/50  border border-transparent hover:border-zinc-800 hover:text-white"
            >
                Uncommon
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="rare"
                aria-label="rare"
                class="h-7 text-zinc-400 text-xs hover:bg-zinc-900/50  border border-transparent hover:border-zinc-800 hover:text-white"
            >
                Rare
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="epic"
                aria-label="epic"
                class="h-7 text-zinc-400 text-xs hover:bg-zinc-900/50  border border-transparent hover:border-zinc-800 hover:text-white"
            >
                Epic
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="legendary"
                aria-label="legendary"
                class="h-7 text-zinc-400 text-xs hover:bg-zinc-900/50  border border-transparent hover:border-zinc-800 hover:text-white"
            >
                Legendary
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    </div>
    <div class=" border-zinc-800 pr-2 flex gap-1 items-center">
        <Input
            type="number"
            placeholder="min price"
            class="max-w-[100px] placeholder:text-xs h-7 text-[10px]"
        />
        <div class="text-zinc-400 font-body">-</div>
        <Input
            type="number"
            placeholder="max price"
            class="max-w-[100px] placeholder:text-xs h-7 text-[10px]"
        />
    </div>
</div>

<div class="flex sm:hidden px-4">
    <Button class="w-full bg-[#9587e0] hover:bg-[#9587e0] text-white flex gap-1 rounded-lg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path
                d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path
                d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
            /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg
        >
        Filter
    </Button>
</div>
