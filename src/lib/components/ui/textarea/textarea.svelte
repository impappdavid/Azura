<script lang="ts">
	import type { WithElementRef, WithoutChildren } from "bits-ui";
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	bind:value
	class={cn(
		" placeholder:text-muted-foreground outline-none flex h-[80px] resize-none font-body w-full rounded-xl bg-zinc-800/40 hover:bg-zinc-800/70 px-3 py-2 text-base shadow-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all",
		className
	)}
	{...restProps}
></textarea>
