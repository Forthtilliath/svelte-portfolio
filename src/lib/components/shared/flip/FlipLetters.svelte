<!-- https://codepen.io/pawelmalak/pen/KRKxdJ?editors=0110 -->
<script lang="ts">
	export let nth: number;
	export let letters: string[];
	export let size: string;
	export let delay: string;
	export let delayFn: (i: number) => string = () => '0s';
	export let translateY: string = '0px';
	export let colors: string[] = [];

	$: [front, top, back, bottom] = letters;
	$: delay = delay ?? delayFn(nth);
</script>

<div class="dice-wrapper" style="--size: {size}">
	<div class="dice" style="--delay: {delay}">
		<div class="face front" style="--translateY: {translateY}; --bgColor: {colors[0]}">
			<p>{front}</p>
		</div>
		<div class="face top" style="--translateY: {translateY}; --bgColor: {colors[1]}">
			<p>{top}</p>
		</div>
		<div class="face back" style="--translateY: {translateY}; --bgColor: {colors[2]}">
			<p>{back}</p>
		</div>
		<div class="face bottom" style="--translateY: {translateY}; --bgColor: {colors[3]}">
			<p>{bottom}</p>
		</div>
		<div class="face left"></div>
		<div class="face right"></div>
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

	.face {
		position: absolute;
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		line-height: var(--size);
		opacity: 0.9;
		border-radius: 0.25rem;

		p {
			text-transform: uppercase;
			font-size: 100px;
			font-size: calc(var(--size) * 0.8);
			color: #fff;
			text-align: center;
			transform: translateY(var(--translateY));
		}
	}

	.front {
		background-color: var(--bgColor, #2962ff);
		transform: translateZ(calc(var(--size) / 2));
	}

	.back {
		background-color: var(--bgColor, #00796b);
		transform: translateZ(calc(var(--size) / -2)) rotateY(180deg) rotateZ(180deg);
	}

	.left {
		background-color: #c62828;
		transform: translateX(calc(var(--size) / 2)) rotateY(90deg);
	}

	.right {
		background-color: #00e676;
		transform: translateX(calc(var(--size) / -2)) rotateY(-90deg);
	}

	.top {
		background-color: var(--bgColor, #f57c00);
		transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
	}

	.bottom {
		background-color: var(--bgColor, #283593);
		transform: translateY(calc(var(--size) / -2)) rotateX(90deg);
	}
</style>
