<script>
  import Navbar from "$lib/components/myComponents/navbar.svelte";
  import def1 from "$lib/imgs/s1-0.jpg";
  import def3 from "$lib/imgs/s1-1.jpg";
  import def4 from "$lib/imgs/s1-2.jpg";
  import AuctionCard from "$lib/components/myComponents/market/auctionCard.svelte";
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
      timerData : { hours: 22, minutes: 28, seconds: 14 }
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
      timerData : { hours: 5, minutes: 56, seconds: 30 }
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
      timerData : { hours: 1, minutes: 5, seconds: 10 }
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
      timerData : { hours: 0, minutes: 59, seconds: 30 }
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
      timerData : { hours: 0, minutes: 10, seconds: 30 }
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
      timerData : { hours: 14, minutes: 12, seconds: 30 }
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
      timerData : { hours: 47, minutes: 32, seconds: 30 }
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
      timerData : { hours: 32, minutes: 26, seconds: 30 }
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
      timerData : { hours: 0, minutes: 45, seconds: 50 }
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
      timerData : { hours: 20, minutes: 32, seconds: 53 }
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
      timerData : { hours: 120, minutes: 20, seconds: 30 }
    },
  ];

  let value = $state("");

  const triggerContent = $derived(
    rarity.find((f) => f.value === value)?.label ?? "Sort by",
  );
</script>

<div class="bg-zinc-900 h-screen w-full flex justify-center items-center">
  <Navbar />

  <div class="absolute inset-0 flex items-center justify-center p-2 pt-16">
    <div
      class="bg-zinc-900/90 backdrop-blur-md h-full rounded-2xl shadow-lg text-center w-full flex flex-col gap-4"
    >
      <Toolbar />
      <div
        class="w-full h-fit py-2 overflow-y-scroll rounded-b-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-3 px-4 justify-start items-start"
      >
        <AuctionCard {data} />
      </div>
    </div>
  </div>
</div>
