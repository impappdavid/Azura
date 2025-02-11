<script>
  import Navbar from "$lib/components/myComponents/navbar.svelte";
  import def1 from "$lib/imgs/s1-0.jpg";
  import def3 from "$lib/imgs/s1-1.jpg";
  import def4 from "$lib/imgs/s1-2.jpg";
  import FixBuyCard from "$lib/components/myComponents/market/fixBuyCard.svelte";
  import Toolbar from "$lib/components/myComponents/market/toolbar.svelte";

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
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Kai",
      url: def3,
      tokenId: 17,
      ownedBy: "0xab...xl2s",
      price: 1.28,
      rarity: "rare",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
        {
          outfit:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Noah",
      url: def4,
      tokenId: 231,
      ownedBy: "0xab...xl2s",
      price: 0.05,
      rarity: "uncommon",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
        {
          outfit:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Kai",
      url: def3,
      tokenId: 3251,
      ownedBy: "0xab...xl2s",
      price: 12.14,
      rarity: "legendary",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
        {
          outfit:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Lena",
      url: def1,
      tokenId: 3070,
      ownedBy: "0xab...xl2s",
      price: 2.49,
      rarity: "epic",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Noah",
      url: def4,
      tokenId: 231,
      ownedBy: "0xab...xl2s",
      price: 0.12,
      rarity: "rare",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
        {
          outfit:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Noah",
      url: def4,
      tokenId: 231,
      ownedBy: "0xab...xl2s",
      price: 0.005,
      rarity: "common",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
        {
          outfit:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Lena",
      url: def1,
      tokenId: 3070,
      ownedBy: "0xab...xl2s",
      price: 5,
      rarity: "legendary",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Kai",
      url: def3,
      tokenId: 3251,
      ownedBy: "0xab...xl2s",
      price: 12.14,
      rarity: "legendary",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
        {
          outfit:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Lena",
      url: def1,
      tokenId: 3070,
      ownedBy: "0xab...xl2s",
      price: 5,
      rarity: "uncommon",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
    {
      character: "Kai",
      url: def3,
      tokenId: 17,
      ownedBy: "0xab...xl2s",
      price: 1.28,
      rarity: "uncommon",
      isInvesment: false,
      prompt: [
        {
          background:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
        {
          outfit:
            "A sprawling futuristic metropolis at dusk, illuminated by neon lights and towering skyscrapers made of glass and steel. The streets are alive with a mix of people, autonomous vehicles, and digital billboards flashing advertisements in multiple languages. Elevated highways crisscross above, while a high-speed monorail glides between the buildings. The city skyline is a blend of cutting-edge architecture and lush rooftop gardens, with drones hovering in the sky delivering packages. A soft glow from street lamps reflects off the wet pavement, hinting at a recent rain shower, as the hum of technology and distant chatter fills the air",
        },
      ],
    },
  ];

  let value = $state("");

  const triggerContent = $derived(
    rarity.find((f) => f.value === value)?.label ?? "Sort by",
  );
</script>

<div
  class="bg-zinc-900 overflow-y-scroll w-full flex justify-center items-center"
>
  <Navbar />

  <div
    class="absolute inset-0 flex items-center justify-center p-2 pt-16 bg-zinc-900"
  >
    <div
      class="h-full rounded-2xl shadow-lg text-center w-full flex flex-col gap-4"
    >
      <Toolbar />
      <div
        class="w-full h-fit py-1 rounded-b-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3 px-4 justify-start items-start"
      >
        <FixBuyCard {data} />
      </div>
    </div>
  </div>
</div>
