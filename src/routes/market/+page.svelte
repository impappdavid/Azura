<script>
  import Navbar from "$lib/components/myComponents/navbar.svelte";
  import background from "$lib/imgs/bg3.png";
  import def1 from "$lib/imgs/s1-0.jpg";
        import def3 from "$lib/imgs/s1-1.jpg";
        import def4 from "$lib/imgs/s1-2.jpg";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
    import Card from "$lib/components/myComponents/market/card.svelte";

  const rarity = [
    { value: "lowtohigh", label: "Price: low to high" },
    { value: "hightolow", label: "Price: high to low" },
    { value: "recentlylisted", label: "Recently listed" },
  ];

  const data = [
    {
      character: "Lena",
      url: def1,
      tokenId: 3070,
      ownedBy: "0xab...xl2s",
      price: 2.49,
      rarity: "common",
      isInvesment: false,
      prompt:[
        {
          background: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air"
        }
      ]
    },
    {
      character: "Kai",
      url: def3,
      tokenId: 17,
      ownedBy: "0xab...xl2s",
      price: 1.28,
      rarity: "rare",
      isInvesment: false,
      prompt:[
        {
          background: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air"
        },
        {
          outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air"
        },
      ]
    },
    {
      character: "Noah",
      url: def4,
      tokenId: 231,
      ownedBy: "0xab...xl2s",
      price: 0.05,
      rarity: "uncommon",
      isInvesment: false,
      prompt:[
        {
          background: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air"
        },
        {
          outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air"
        },
      ]
    },
    {
      character: "Kai",
      url: def3,
      tokenId: 3251,
      ownedBy: "0xab...xl2s",
      price: 12.14,
      rarity: "legendary",
      isInvesment: false,
      prompt:[
        {
          background: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air"
        },
        {
          outfit: "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air"
        },
      ]
    },
  ]

  let value = $state("");

  const triggerContent = $derived(
    rarity.find((f) => f.value === value)?.label ?? "Sort by",
  );
</script>

<div class="bg-zinc-900 h-screen w-full flex justify-center items-center">
  <Navbar />
  <section class="w-full h-screen absolute">
    <img src={background} alt="Background" class="w-full h-full object-cover" />
  </section>

  <div class="absolute inset-0 flex items-center justify-center p-2 pt-16">
    <div
      class="bg-zinc-900/90 backdrop-blur-md h-full rounded-2xl shadow-lg text-center w-full flex flex-col gap-4"
    >
      <div class="w-full p-2 px-4 rounded-t-2xl flex gap-2 bg-zinc-900">
        <Button
          size="icon"
          class="border border-zinc-800 hover:bg-zinc-800 w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            ><defs
              ><mask id="ipTFilter0"
                ><path
                  fill="#555555"
                  stroke="#fff"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="m6 9l14.4 16.818v12.626L27.6 42V25.818L42 9z"
                /></mask
              ></defs
            ><path
              fill="#df2623cc"
              d="M0 0h48v48H0z"
              mask="url(#ipTFilter0)"
            /></svg
          >
        </Button>

        <ToggleGroup.Root type="single">
          <ToggleGroup.Item
            value="bold"
            aria-label="Toggle bold"
            class="hover:bg-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 14 14"
              ><g
                fill="none"
                stroke="#df2623cc"
                stroke-linecap="round"
                stroke-width="1"
                ><path
                  stroke-linejoin="round"
                  d="M6.338 3.7a1 1 0 0 0-.943-.668H4.62a.893.893 0 0 0-.19 1.765l1.178.258a1 1 0 0 1-.214 1.977h-.667a1 1 0 0 1-.943-.666m1.278-3.334v-1m0 6v-1m1.907 6.467v-5.25a1.25 1.25 0 0 1 1.25-1.25v0a1.25 1.25 0 0 1 1.25 1.25v2.75h2a2 2 0 0 1 2 2v.5"
                /><path d="M5.063 9.564a4.531 4.531 0 1 1 4.489-3.911" /></g
              ></svg
            >
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <Input type="text" placeholder="Search for a NFT" class="text-xs" />

        <Select.Root type="single" name="favoriteFruit" bind:value>
          <Select.Trigger
            class="w-[220px] hover:bg-zinc-800 transition-all text-white text-xs"
          >
            {triggerContent}
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              {#each rarity as rare}
                <Select.Item value={rare.value} label={rare.label} />
              {/each}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
      <div class="w-full h-full rounded-b-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 px-4 justify-start items-start">
        <Card data={data}/>
      </div>
    </div>
  </div>
</div>
