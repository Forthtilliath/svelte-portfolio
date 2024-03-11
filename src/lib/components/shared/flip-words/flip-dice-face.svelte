<script lang="ts">
	import { cn } from "$lib/utils";

	export let face: 'front' | 'top' | 'back' | 'bottom' | 'left' | 'right';
	export let className = '';
	export let bgColor = '';
	export let translateY: string;
</script>

<div class={cn(`face ${face}`, className)} style="--translateY: {translateY}; --bgColor: {bgColor}">
	<p><slot /></p>
</div>

<style lang="scss">
	.face {
		position: absolute;
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		line-height: var(--size);
		// opacity: 0.9;
		border-radius: 0.25rem;

		&.front {
			background-color: var(--bgColor, #2962ff);
			transform: translateZ(calc(var(--size) / 2));
		}

		&.back {
			background-color: var(--bgColor, #00796b);
			transform: translateZ(calc(var(--size) / -2)) rotateY(180deg) rotateZ(180deg);
		}

		&.left {
			background-color: #c62828;
			transform: translateX(calc(var(--size) / 2)) rotateY(90deg);
		}

		&.right {
			background-color: #00e676;
			transform: translateX(calc(var(--size) / -2)) rotateY(-90deg);
		}

		&.top {
			background-color: var(--bgColor, #f57c00);
			transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
		}

		&.bottom {
			background-color: var(--bgColor, #283593);
			transform: translateY(calc(var(--size) / -2)) rotateX(90deg);
		}

		p {
			text-transform: uppercase;
			font-size: 100px;
			font-size: calc(var(--size) * 0.8);
			color: #fff;
			text-align: center;
			transform: translateY(var(--translateY));
			font-family:
				'Overpass',
				-apple-system,
				BlinkMacSystemFont,
				'Segoe UI',
				Roboto,
				Oxygen,
				Ubuntu,
				Cantarell,
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				sans-serif;
		}
	}
</style>
