<div class="absolute top-0 -z-10">
	<div class="stars stars1" />
	<div class="stars stars2" />
	<div class="stars stars3" />
</div>

<style>
	@import './stars.css';

	.stars {
		width: var(--size);
		height: var(--size);
		box-shadow: var(--shadows);
		animation: animStar var(--duration) linear infinite;
	}

	.stars1 {
		--size: 1px;
		--shadows: var(--shadows-small);
		--duration: 50s;
	}

	.stars2 {
		--size: 2px;
		--shadows: var(--shadows-medium);
		--duration: 100s;
	}

	.stars3 {
		--size: 3px;
		--shadows: var(--shadows-big);
		--duration: 150s;
	}

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-100dvh);
		}
	}
</style>
