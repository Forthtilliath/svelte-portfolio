<!-- https://codepen.io/pawelmalak/pen/KRKxdJ?editors=0110 -->
<script lang="ts">
	import { run } from 'svelte/legacy';

	import type { Flip } from 'forth-flip-words';
	import FlipDiceFace from './flip-dice-face.svelte';

	interface Props {
		nth?: number;
		letters: string[];
		size: string;
		delay?: string;
		delayFn?: (i: number) => string;
		translateY?: string;
		colors?: string[];
		duration?: string;
		classNames?: Flip.OtherOptions['classNames'];
	}

	let {
		nth = 1,
		letters,
		size,
		delay = $bindable(''),
		delayFn = () => '0s',
		translateY = '0px',
		colors = [],
		duration = '16s',
		classNames = {}
	}: Props = $props();

	let classNameFace = $derived(classNames?.face ?? '');
	let classNameFaces = $derived(
		Array.isArray(classNameFace) ? classNameFace : Array(4).fill(classNameFace)
	);

	let [front, top, back, bottom] = $derived(letters);
	run(() => {
		delay = delay || delayFn(nth);
	});
</script>

<div class="dice-wrapper" style="--size: {size}">
	<div class="dice" style="--delay: {delay}; --duration: {duration}">
		<FlipDiceFace face="front" bgColor={colors[0]} {translateY} className={classNameFaces[0]}>
			{front}
		</FlipDiceFace>
		<FlipDiceFace face="top" bgColor={colors[1]} {translateY} className={classNameFaces[1]}>
			{top}
		</FlipDiceFace>
		<FlipDiceFace face="back" bgColor={colors[2]} {translateY} className={classNameFaces[2]}>
			{back}
		</FlipDiceFace>
		<FlipDiceFace face="bottom" bgColor={colors[3]} {translateY} className={classNameFaces[3]}>
			{bottom}
		</FlipDiceFace>
		<FlipDiceFace face="left" {translateY} />
		<FlipDiceFace face="right" {translateY} />
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

		animation: flip var(--duration) ease-in-out var(--delay, 0) infinite;
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
