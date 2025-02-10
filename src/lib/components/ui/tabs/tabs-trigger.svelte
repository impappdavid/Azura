<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		value,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	class={cn(
		"outline-none data-[state=active]:border-b data-[state=active]:text-white inline-flex items-center justify-center whitespace-nowrap px-2 py-1 text-md  transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",
		className
	)}
	{value}
	{...restProps}
/>
