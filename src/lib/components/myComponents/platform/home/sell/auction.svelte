<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { cn } from "$lib/utils.js";
    import { Calendar } from "$lib/components/ui/calendar";
    import * as Popover from "$lib/components/ui/popover";
    import {
        DateFormatter,
        type DateValue,
        getLocalTimeZone,
    } from "@internationalized/date";

    let pricevalue: number | undefined = undefined;

    const df = new DateFormatter("en-US", {
        dateStyle: "long",
    });

    let value: DateValue | undefined = undefined;
</script>

<div class="border-2 p-2 flex flex-col gap-4">
    <div class="flex flex-col">
        <div class="">Starting price</div>
        <Input
            type="number"
            bind:value={pricevalue}
            placeholder="Price limit: Min 0.01 - Max 5000"
            class="rounded-none border-2 hover:bg-zinc-800 transition-all outline-none"
            min="0.01"
            max="5000"
            step="0.01"
        />
    </div>
    <div class="flex flex-col">
        <div class="">Ending date</div>

        <Popover.Root>
            <Popover.Trigger>
                {#snippet child({ props })}
                    <Button
                        variant="outline"
                        class={cn(
                            "w-full rounded-none border-2 bg-zinc-800/50 justify-start text-left font-normal",
                            !value && "text-muted-foreground",
                        )}
                        {...props}
                    >
                        {value
                            ? df.format(value.toDate(getLocalTimeZone()))
                            : "Pick a date"}
                    </Button>
                {/snippet}
            </Popover.Trigger>
            <Popover.Content class="w-auto p-0" align="start">
                <Calendar type="single" bind:value />
            </Popover.Content>
        </Popover.Root>
    </div>
    <div class="bg-zinc-800/50 w-full p-4 backdrop-blur-sm flex flex-col gap-8">
        <div class="grid grid-cols-2 gap-2">
            <div class="text-sm text-zinc-400">Starting price</div>
            <div class="flex justify-end text-sm text-zinc-400">
                {pricevalue ?? "--"}
            </div>

            <div class="text-sm text-zinc-400">Ending date</div>
            <div class="flex justify-end text-sm text-zinc-400">
                {value ?? "--"}
            </div>

            <div class="text-sm text-zinc-400">Marketplace fee (-5%)</div>
            <div class="flex justify-end text-sm text-zinc-400">
                -{pricevalue ? (pricevalue * 0.05).toFixed(3) : "--"}
            </div>

            <hr class="col-span-2" />

            <div class="text-sm">Order total</div>
            <div class="flex justify-end text-sm text-zinc-400 items-center">
                {#if pricevalue}
                    <div class="flex gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            ><path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
                            /></svg
                        >
                        {(pricevalue * 0.95).toFixed(2)}
                    </div>
                {:else}
                    --
                {/if}
            </div>

            <div class="text-sm">Order total ($)</div>
            <div class="flex justify-end text-sm text-zinc-400 items-center">
                {#if pricevalue}
                    ${(pricevalue * 160 * 0.95).toFixed(2)}
                {:else}
                    --
                {/if}
            </div>
        </div>

        <Button
            class="w-full rounded-none bg-[#ab9ff2] hover:bg-[#8e84c9] transition-all"
            disabled={!value || !pricevalue}
        >
            Place sale order
        </Button>
    </div>
</div>
