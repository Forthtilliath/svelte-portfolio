<!-- https://codepen.io/pawelmalak/pen/KRKxdJ?editors=0110 -->
<script lang="ts">
	export let letters: string[];
	export let size: string;
	export let delay: number = 0;
	export let translateY: string = "0";

	$: [front, bottom, back, top] = letters;
</script>

<div class="dice-wrapper" style="--size: {size}">
	<div class="dice" style="--delay: {delay}">
		<div class="face front" style="--translateY: {translateY}"><p>{front}</p></div>
		<div class="face back" style="--translateY: {translateY}"><p>{back}</p></div>
		<div class="face left"></div>
		<div class="face right"></div>
		<div class="face top" style="--translateY: {translateY}"><p>{top}</p></div>
		<div class="face bottom" style="--translateY: {translateY}"><p>{bottom}</p></div>
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

		animation: flip 8s infinite;
		animation-delay: var(--delay);
	}

	@keyframes flip {
		0%,10% {
			transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
		}
		25%,35% {
			transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg);
		}
		50%,60% {
			transform: rotateX(180deg) rotateY(0deg) rotateZ(0deg);
		}
		75%,85% {
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
		background-color: #2962ff;
		transform: translateZ(calc(var(--size) / 2));
	}

	.back {
		background-color: #00796b;
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
		background-color: #f57c00;
		transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
	}

	.bottom {
		background-color: #283593;
		transform: translateY(calc(var(--size) / -2)) rotateX(90deg);
	}
</style>
