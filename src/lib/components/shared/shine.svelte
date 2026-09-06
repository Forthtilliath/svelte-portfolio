<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { pointer, viewport, subscribeShine } from './shine-pointer.svelte';

	interface Props {
		/** Color of light */
		lightColor?: string;
		/** Size of light */
		lightRadius?: number;
		/** Depth of effect */
		depth?: number;
		/** Represents the height of the surface for a light filter primitive */
		surfaceScale?: number;
		/** The bigger the value the bigger the reflection */
		specularConstant?: number;
		/** controls the focus for the light source. The bigger the value the brighter the light */
		specularExponent?: number;
		classes?: { root?: string; svg?: string };
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		lightColor = '#666666',
		lightRadius = 300,
		depth = 1,
		surfaceScale = 2,
		specularConstant = 0.75,
		specularExponent = 120,
		classes = {},
		class: className = undefined,
		children,
		...rest
	}: Props = $props();

	// Per-instance id that stays identical between SSR and hydration — a module-level
	// counter would drift on a long-lived server and mismatch the client.
	const instanceId = $props.id();
	const filterId = `shine-filter-${instanceId}`;

	let wrapperEl: HTMLDivElement | null = $state(null);

	// Wrapper position in the page. Measured once on mount and only re-measured on
	// resize; scrolling is tracked by arithmetic on the shared scroll offset, so
	// there is no per-frame getBoundingClientRect().
	let base = $state({ left: 0, top: 0 });

	$effect(() => subscribeShine());

	$effect(() => {
		const _epoch = viewport.epoch; // depend on resize → re-measure
		if (!wrapperEl) return;
		const rect = wrapperEl.getBoundingClientRect();
		base = { left: rect.left + window.scrollX, top: rect.top + window.scrollY };
	});

	const lightX = $derived(pointer.x + pointer.scrollX - base.left);
	const lightY = $derived(pointer.y + pointer.scrollY - base.top);
</script>

<svg class={cn('pointer-events-none fixed inset-0', classes?.svg)}>
	<filter id={filterId} color-interpolation-filters="sRGB">
		<feGaussianBlur in="SourceAlpha" stdDeviation={depth} />

		<feSpecularLighting
			result="light-source"
			{surfaceScale}
			{specularConstant}
			{specularExponent}
			lighting-color={lightColor}
		>
			<fePointLight x={lightX} y={lightY} z={lightRadius} />
		</feSpecularLighting>

		<feComposite result="reflections" in="light-source" in2="SourceAlpha" operator="in" />

		<feComposite
			in="SourceGraphic"
			in2="reflections"
			operator="arithmetic"
			k1="0"
			k2="1"
			k3="1"
			k4="0"
		/>
	</filter>
</svg>

<div
	style:filter="url(#{filterId})"
	{...rest}
	class={cn('', classes?.root, className)}
	bind:this={wrapperEl}
>
	{@render children?.()}
</div>
