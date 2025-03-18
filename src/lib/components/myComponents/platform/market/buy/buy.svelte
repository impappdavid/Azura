<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  export let value;
</script>

<div class="border-2 p-2 flex flex-col gap-4">
  
  <div class="bg-zinc-800/50 w-full p-4 backdrop-blur-sm flex flex-col gap-8">
    <div class="grid grid-cols-2 gap-2">
      
      <div class="text-sm">Order total</div>
      <div class="flex justify-end text-sm text-zinc-400 items-center">
        {#if value}
          <div class="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"/></svg>
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
          {(value * 0.95 * 160).toFixed(2)}
        {:else}
          --
        {/if}
      </div>
    </div>
    <Button
      class="w-full rounded-none bg-[#ab9ff2]  hover:bg-[#8e84c9]  transition-all"
      disabled={!value}>BUY NFT</Button
    >
  </div>
</div>
