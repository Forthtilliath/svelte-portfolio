<!-- https://codepen.io/pawelmalak/pen/KRKxdJ?editors=0110 -->
<script lang="ts">
	import FlipFace from './FlipFace.svelte';

	export let nth: number = 1;
	export let letters: string[];
	export let size: string;
	export let delay = '';
	export let delayFn: (i: number) => string = () => '0s';
	export let translateY: string = '0px';
	export let colors: string[] = [];

	$: [front, top, back, bottom] = letters;
	$: delay = delay || delayFn(nth);
</script>

<div class="dice-wrapper" style="--size: {size}">
	<div class="dice" style="--delay: {delay}">
		<FlipFace face="front" bgColor={colors[0]} {translateY}>
			{front}
		</FlipFace>
		<FlipFace face="top" bgColor={colors[1]} {translateY}>
			{top}
		</FlipFace>
		<FlipFace face="back" bgColor={colors[2]} {translateY}>
			{back}
		</FlipFace>
		<FlipFace face="bottom" bgColor={colors[3]} {translateY}>
			{bottom}
		</FlipFace>
		<FlipFace face="left" {translateY} />
		<FlipFace face="right" {translateY} />
	</div>
</div>

<style lang="scss">
	.dice-wrapper {
		margin-block: 1rem;
		width: var(--size);
		height: var(--size);
		perspective: 2000px;
		position: relative;
	}

	.dice {
		position: absolute;
		transform-style: preserve-3d;
		width: 100%;
		height: 100%;
		will-change: transform;
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);

		animation: flip 16s ease-in-out var(--delay, 0) infinite;
	}

	@keyframes flip {
		0%,
		20% {
			transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
		}
		25%,
		45% {
			transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg);
		}
		50%,
		70% {
			transform: rotateX(180deg) rotateY(0deg) rotateZ(0deg);
		}
		75%,
		95% {
			transform: rotateX(270deg) rotateY(0deg) rotateZ(0deg);
		}
		100% {
			transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg);
		}
	}
</style>
