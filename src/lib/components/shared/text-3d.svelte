<script lang="ts" context="module">
	import tinycolor from 'tinycolor2';
	import { cn } from '$lib/utils';

	// https://codepen.io/ryandsouza13/pen/yEBJQV

	export function ajustColor(
		baseColor: string,
		/** Between 1 and 10 */
		depth: number,
		primaryShadowColor: string,
		/** Between 0 and 1 */
		shadowOpacity: number
	) {
		if (typeof depth !== 'number' || depth < 1 || depth > 10) {
			throw new Error('depth must be a number between 1 and 10');
		}
		if (typeof shadowOpacity !== 'number' || shadowOpacity < 0 || shadowOpacity > 1) {
			throw new Error('shadowOpacity must be a number between 0 and 1');
		}
		if (!tinycolor(baseColor).isValid()) {
			throw new Error('color must be a valid color');
		}
		if (!tinycolor(primaryShadowColor).isValid()) {
			throw new Error('shadowColor must be a valid color');
		}

		function shadowRule(y: number, blur: number, color: string) {
			return `0 ${y}px ${blur}px ${color}`;
		}

		function format(color: tinycolor.Instance): string {
			return color.toHex8String();
		}

		const textShadow: string[] = [];

		for (let i = 1; i <= depth; i++) {
			const shadowColor = format(tinycolor(baseColor).darken(2 * (i - 1)));
			textShadow.push(shadowRule(i, 0, shadowColor));
		}

		textShadow.push(shadowRule(0, 0, format(tinycolor(primaryShadowColor).setAlpha(0.05))));
		textShadow.push(shadowRule(-1, 3, format(tinycolor(primaryShadowColor).setAlpha(0.2))));

		const shadowColor = format(tinycolor(primaryShadowColor).setAlpha(shadowOpacity));
		for (let i = 0; i < 3; i++) {
			const range = (3 + i) * Math.ceil(depth / 3);
			textShadow.push(shadowRule(range, 9 + i * 3, shadowColor));
		}

		return textShadow.join(', ');
	}
</script>

<script lang="ts">
	export let className: string = '';
	export let tag: string = 'p';
	export let color: string = 'currentColor';
	export let shadowOptions: {
		color?: string;
		opacity?: number;
		depth?: number;
		from?: {
			luminosity?: number;
			saturate?: number;
		};
		to?: {
			luminosity?: number;
			saturate?: number;
		};
	};

	$: from_luminosity = shadowOptions?.from?.luminosity ?? -8;
	$: from_saturate = shadowOptions?.from?.saturate ?? 0;
	$: to_luminosity = shadowOptions?.to?.luminosity ?? -10;
	$: to_saturate = shadowOptions?.to?.saturate ?? 20;

	$: textShadow = ajustColor(
		tinycolor(shadowOptions.color).lighten(from_luminosity).saturate(from_saturate).toHslString(),
		shadowOptions.depth || 8,
		tinycolor(shadowOptions.color).lighten(to_luminosity).saturate(to_saturate).toHslString(),
		shadowOptions.opacity || 0.2
	);
</script>

<svelte:element
	this={tag}
	style="--text-shadow: {textShadow}; --color: {color}"
	class={cn('text-3d', className)}
>
	<slot />
</svelte:element>

<style lang="scss">
	.text-3d {
		color: var(--color);
		text-shadow: var(--text-shadow);
	}
</style>
