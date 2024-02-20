<!-- https://codepen.io/pawelmalak/pen/KRKxdJ?editors=0110 -->
<script lang="ts">
	export let letters: string[];
	export let size: string;

  $: ([front, bottom, back, top] = letters);
</script>

<div class="container" style="--size: {size}">
	<div class="dice">
		<div class="face front">{front}</div>
		<div class="face back">{back}</div>
		<div class="face left"></div>
		<div class="face right"></div>
		<div class="face top">{top}</div>
		<div class="face bottom">{bottom}</div>
	</div>
</div>

<style lang="scss">
	.container {
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
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}

	.face {
		position: absolute;
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		color: #fff;
		font-size: 100px;
		text-align: center;
		line-height: var(--size);
		opacity: 0.9;
    border-radius: 0.25rem;
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
