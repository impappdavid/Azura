<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  let value: number;
</script>

<div class="border-2 p-2 flex flex-col gap-4">
  <div class="flex flex-col">
    <div class="">Sale order</div>
    <Input
      bind:value
      placeholder="Price limit: Min 0.01 - Max 5000"
      class="rounded-none border-2 hover:bg-zinc-800 transition-all outline-none"
    />
  </div>
  <div class="bg-zinc-800/50 w-full p-4 backdrop-blur-sm flex flex-col gap-8">
    <div class="grid grid-cols-2 gap-2">
      <div class="text-sm text-zinc-400">Set price</div>
      <div class="flex justify-end text-sm text-zinc-400">
        {#if value}
          {value}
        {:else}
          --
        {/if}
      </div>
      <div class="text-sm text-zinc-400">Marketplace fee (-5%)</div>
      <div class="flex justify-end text-sm text-zinc-400">
        {#if value}
          -{(value * 0.05).toFixed(3)}
        {:else}
          --
        {/if}
      </div>
      <hr class="col-span-2" />
      <div class="text-sm">Order total</div>
      <div class="flex justify-end text-sm text-zinc-400 items-center">
        {#if value}
          <div class="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.28"
              height="20"
              viewBox="0 0 256 417"
              ><path
                fill="#343434"
                d="m127.961 0l-2.795 9.5v275.668l2.795 2.79l127.962-75.638z"
              /><path
                fill="#8c8c8c"
                d="M127.962 0L0 212.32l127.962 75.639V154.158z"
              /><path
                fill="#3c3c3b"
                d="m127.961 312.187l-1.575 1.92v98.199l1.575 4.601l128.038-180.32z"
              /><path
                fill="#8c8c8c"
                d="M127.962 416.905v-104.72L0 236.585z"
              /><path
                fill="#141414"
                d="m127.961 287.958l127.96-75.637l-127.96-58.162z"
              /><path
                fill="#393939"
                d="m.001 212.321l127.96 75.637V154.159z"
              /></svg
            >
            {(value * 0.95).toFixed(3)}
          </div>
        {:else}
          --
        {/if}
      </div>
      <div class="text-sm">Order total ($)</div>
      <div class="flex justify-end text-sm text-zinc-400 items-center">
        {#if value}
          $
          {(value * 0.95 * 2573).toFixed(2)}
        {:else}
          --
        {/if}
      </div>
    </div>
    <Button
      class="w-full rounded-none bg-[#ab9ff2]  hover:bg-[#8e84c9]  transition-all"
      disabled={!value}>Place sale order</Button
    >
  </div>
</div>
