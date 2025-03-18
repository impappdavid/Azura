<script>
  import * as Tabs from "$lib/components/ui/tabs";
  import Sidebar from "../../sidebar.svelte";
  import auro from "$lib/imgs/goldenretriver.jpg";
  import Buy from "./buy.svelte";
    import PriceHistoryChart from "./priceHistoryChart.svelte";

  
</script>

<div
  class="relative w-full font-body h-fit bg-zinc-950 pt-20 flex flex-col gap-16 transition-all ease-in-out duration-300 pb-24"
>
  <!-- SVG Noise Overlay -->
  <div class="absolute inset-0 pointer-events-none opacity-10">
    <svg class="w-full h-full">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" fill="white"></rect>
    </svg>
  </div>
  <div class="flex justify-between h-full px-8">
    <div
      class="hidden sm:flex flex-col w-full max-w-[50px] justify-between items-start animate-[slideinLeft_1s_ease-in-out] relative"
    >
      <Sidebar />
    </div>

    <div
      class="w-full flex flex-col font-body gap-4 py-4 sm:px-8 animate-[reveal_3s_ease-in-out]"
    >
      <div class="flex justify-between w-full">
        <div class="flex gap-4 font-body">
          <div
            class="text-xs border-2 p-1 px-2 border-[#9487e0b2] text-[#ab9ff2] transition-all ease-in-out duration-300 backdrop-blur-md flex items-center h-fit"
          >
            BUY
          </div>
        </div>

        <div class="flex gap-4 font-body items-center">
          <div class="text-[10px] sm:text-xs text-zinc-600">LIVE DATA/</div>
          <div class="text-[10px] sm:text-xs text-zinc-400">
            SOL &#149; $160.23
          </div>
          <div class="text-[10px] sm:text-xs text-zinc-600">/</div>
          <div class="text-[10px] sm:text-xs text-zinc-400">
            FLOOR PRICE &#149; $160.29
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col sm:grid grid-cols-2 sm:px-8 gap-16">
        <div class="w-full">
          <img
            src={auro}
            alt="auro"
            class="aspect-square w-fit max-h-[700px] border-2"
          />
        </div>
        <div class=" w-full flex flex-col gap-8">
          <div class="border-2 p-2 flex flex-col gap-4">
            <div class="flex justify-between items-center">
              <div class="text-2xl flex gap-1 items-center">
                Auro
                <div class="text-sm text-zinc-400">#3120</div>
              </div>
              <div
                class="border-2 border-green-500/30 text-green-500 py-0.5 px-1.5 text-sm"
              >
                S1
              </div>
            </div>
            <div class="flex justify-between items-end">
              <div class="flex flex-col gap-1">
                <div class="text-zinc-400 text-xs">Price</div>
                <div class="text-md flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    ><path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
                    /></svg
                  >
                  <div class="">0.39</div>
                </div>
              </div>
              <div
                class={` backdrop-blur-lg  h-7 px-3 flex gap-1 items-center bg-purple-500/30`}
              >
                <div class="text-xs text-zinc-200">Epic</div>
              </div>
            </div>
          </div>

          
              <Buy value={0.39}/>

          <div class="border-2 p-2 flex flex-col gap-2">
            <div class="flex flex-col">
              <div class="">NFT details</div>
            </div>
            <div
              class="bg-zinc-800/50 w-full p-2 backdrop-blur-sm flex justify-between items-center"
            >
              <div class="text-sm text-zinc-400">Last sold at</div>
              <div class="text-sm flex gap-1 items-center">
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
                <div class="text-sm text-white">1.42</div>
              </div>
            </div>

            <div
              class="bg-zinc-800/50 w-full p-2 backdrop-blur-sm flex justify-between items-center"
            >
              <div class="text-sm text-zinc-400">Sale orders</div>
              <div class="text-sm flex gap-1 items-center">
                <div class="text-sm text-white">253</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <Tabs.Root value="pricehistory" class="w-full">
            <Tabs.List class="bg-transparent">
              <Tabs.Trigger value="pricehistory" class="bg-transparent"
                >Price history</Tabs.Trigger
              >
              <Tabs.Trigger value="prompts" class="bg-transparent"
                >Prompts</Tabs.Trigger
              >
            </Tabs.List>
            <Tabs.Content value="pricehistory" class="h-96 border-2">
              <PriceHistoryChart />
            </Tabs.Content>
            <Tabs.Content value="prompts" class="border-2  gap-4">
              <div class="grid sm:grid-cols-2 gap-4 p-4">
                <div class="">
                  <div class="">Background</div>
                  <div class="bg-zinc-800/50 p-2 text-sm text-zinc-400">
                    Create a hilarious image of a lion with a majestic, fluffy
                    mane—but instead of looking fierce, it has a totally goofy
                    expression with crossed eyes and its tongue hanging out. The
                    lion should be wearing oversized sunglasses and a tiny party
                    hat, looking like it just crashed a birthday party. To make
                    it even funnier, have a group of confused zebras in the
                    background watching as the lion proudly attempts to blow out
                    candles on a cake!
                  </div>
                </div>
                <div class="">
                  <div class="">Outfit</div>
                  <div class="bg-zinc-800/50 p-2 text-sm text-zinc-400">
                    Create a hilarious image of a lion with a majestic, fluffy
                    mane—but instead of looking fierce, it has a totally goofy
                    expression with crossed eyes and its tongue hanging out. The
                    lion should be wearing oversized sunglasses and a tiny party
                    hat, looking like it just crashed a birthday party. To make
                    it even funnier, have a group of confused zebras in the
                    background watching as the lion proudly attempts to blow out
                    candles on a cake!
                  </div>
                </div>
                <div class="">
                  <div class="">Accesories</div>
                  <div class="bg-zinc-800/50 p-2 text-sm text-zinc-400">
                    Create a hilarious image of a lion with a majestic, fluffy
                    mane—but instead of looking fierce, it has a totally goofy
                    expression with crossed eyes and its tongue hanging out. The
                    lion should be wearing oversized sunglasses and a tiny party
                    hat, looking like it just crashed a birthday party. To make
                    it even funnier, have a group of confused zebras in the
                    background watching as the lion proudly attempts to blow out
                    candles on a cake!
                  </div>
                </div>
                <div class="">
                  <div class="">Face expression</div>
                  <div class="bg-zinc-800/50 p-2 text-sm text-zinc-400">
                    Create a hilarious image of a lion with a majestic, fluffy
                    mane—but instead of looking fierce, it has a totally goofy
                    expression with crossed eyes and its tongue hanging out. The
                    lion should be wearing oversized sunglasses and a tiny party
                    hat, looking like it just crashed a birthday party. To make
                    it even funnier, have a group of confused zebras in the
                    background watching as the lion proudly attempts to blow out
                    candles on a cake!
                  </div>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  </div>
</div>
