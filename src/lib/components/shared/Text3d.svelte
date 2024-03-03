<script lang="ts" context="module">
	import tinycolor from 'tinycolor2';
	import { cn } from '$lib/utils';

	export function ajustColor(
		baseColor: string,
		depth: number,
		primaryShadowColor: string,
		shadowOpacity: number
	) {
		if (typeof depth !== 'number' || depth < 1 || depth > 10) {
			throw new Error('depth must be a number between 1 and 10');
		}

		function shadowRule(y: number, blur: number, color: string) {
			return `0 ${y}px ${blur}px ${color}`;
		}

		function format(color: tinycolor.Instance): string {
			return color.toHex8String();
		}

		const textShadow: string[] = [];

		for (let i = 1; i <= depth; i++) {
			const shadowColor = format(tinycolor(primaryShadowColor).darken(2 * (i - 1)));
			textShadow.push(shadowRule(i, 0, shadowColor));
		}

		textShadow.push(shadowRule(0, 0, format(tinycolor(baseColor).setAlpha(0.05))));
		textShadow.push(shadowRule(-1, 3, format(tinycolor(baseColor).setAlpha(0.2))));

		const shadowColor = format(tinycolor(baseColor).setAlpha(shadowOpacity));
		for (let i = 0; i < 3; i++) {
			textShadow.push(shadowRule(9 + i * 3, 9 + i * 3, shadowColor));
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
	};

	$: textShadow = ajustColor(
		tinycolor(shadowOptions.color).darken(8).toHslString(),
		shadowOptions.depth || 8,
		tinycolor(shadowOptions.color).darken(15).saturate(20).toHslString(),
		shadowOptions.opacity	|| 0.2
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
