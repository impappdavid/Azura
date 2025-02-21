<script lang="ts">
	import { LinkPreview as HoverCardPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		align = "start",
		sideOffset = 8,
		portalProps,
		...restProps
	}: HoverCardPrimitive.ContentProps & {
		portalProps?: HoverCardPrimitive.PortalProps;
	} = $props();
</script>

<HoverCardPrimitive.Portal {...portalProps}>
	<HoverCardPrimitive.Content
		bind:ref
		{sideOffset}
		{align}
		class={cn(
			"bg-transparent backdrop-blur-lg text-popover-foreground z-50 w-64 border-2 shadow-md outline-none",
			className
		)}
		{...restProps}
	/>
</HoverCardPrimitive.Portal>
