<script>
  import Navbar from "$lib/components/myComponents/navbar.svelte";
  import background from "$lib/imgs/bg3.png";
  import def1 from "$lib/imgs/s1-0.jpg";
  import def3 from "$lib/imgs/s1-1.jpg";
  import def4 from "$lib/imgs/s1-2.jpg";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Button from "$lib/components/ui/button/button.svelte";

  const rarity = [
      { value: "common", label: "Common", left: 5000 },
      { value: "uncommon", label: "Uncommon", left: 2500 },
      { value: "rare", label: "Rare", left: 1000 },
      { value: "epic", label: "Epic", left: 500 },
      { value: "legendary", label: "Legendary", left: 50 },
  ];

  let value = $state("");

  const triggerContent = $derived(
      rarity.find((f) => f.value === value)?.label ?? "Choose rarity",
  );
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

  <div class="absolute inset-0 flex items-center justify-center p-2 pt-16">
      <div
          class="bg-zinc-900/90 backdrop-blur-md h-full rounded-2xl shadow-lg text-center w-full flex flex-col gap-4"
      >
          <div class="w-full bg-white p-4 rounded-t-2xl flex gap-4">

          </div>
      </div>
  </div>
</div>
