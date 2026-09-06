<script lang="ts" module>
	// Star positions used to be ~940 lines of hand-written `box-shadow` lists shipped
	// in the global CSS bundle (every page, CV included). They are now generated here
	// from a seeded PRNG so the server and the client produce the exact same markup
	// (no hydration mismatch), the cost stays scoped to this component, and the field
	// is sized to the real page height instead of a hard-coded 8000px ceiling.

	/** Deterministic PRNG — same seed, same sequence on server and client. */
	function mulberry32(seed: number) {
		return function () {
			seed |= 0;
			seed = (seed + 0x6d2b79f5) | 0;
			let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	function buildShadow(count: number, width: number, height: number, rng: () => number) {
		const parts: string[] = [];
		for (let i = 0; i < count; i++) {
			parts.push(`${Math.round(rng() * width)}px ${Math.round(rng() * height)}px #fff`);
		}
		return parts.join(', ');
	}

	// Stars per 1,000,000 px² — matches the density of the original hand-written field.
	const DENSITY = { small: 42, medium: 12, big: 6 } as const;

	// Server-render / first-paint size; replaced on mount by the measured page size.
	const SSR_WIDTH = 1600;
	const SSR_HEIGHT = 2600;

	// Guard rails so a runaway layout can't ask for a 100k px starfield.
	const MAX_WIDTH = 3840;
	const MAX_HEIGHT = 20000;

	function buildLayers(width: number, height: number) {
		const rng = mulberry32(0x5f3a91);
		const megaPx = (width * height) / 1_000_000;
		return {
			width,
			height,
			small: buildShadow(Math.round(megaPx * DENSITY.small), width, height, rng),
			medium: buildShadow(Math.round(megaPx * DENSITY.medium), width, height, rng),
			big: buildShadow(Math.round(megaPx * DENSITY.big), width, height, rng)
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let layers = $state(buildLayers(SSR_WIDTH, SSR_HEIGHT));

	onMount(() => {
		let scheduled = 0;

		const recompute = () => {
			scheduled = 0;
			const width = Math.min(Math.max(document.documentElement.clientWidth, 360), MAX_WIDTH);
			// Page height plus one viewport, so the upward drift (`translateY(-100dvh)`)
			// never scrolls a bare strip into view before the animation loops.
			const height = Math.min(
				document.documentElement.scrollHeight + window.innerHeight,
				MAX_HEIGHT
			);
			// Ignore the churn of images/fonts settling; only regenerate on a real change.
			if (Math.abs(width - layers.width) < 64 && Math.abs(height - layers.height) < 240) return;
			layers = buildLayers(width, height);
		};

		const schedule = () => {
			if (scheduled === 0) scheduled = requestAnimationFrame(recompute);
		};

		recompute();
		const observer = new ResizeObserver(schedule);
		observer.observe(document.body);
		window.addEventListener('resize', schedule, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', schedule);
			if (scheduled !== 0) cancelAnimationFrame(scheduled);
		};
	});
</script>

<div class="stars-field" aria-hidden="true">
	<div class="star-layer star-layer--small" style:box-shadow={layers.small}></div>
	<div class="star-layer star-layer--medium" style:box-shadow={layers.medium}></div>
	<div class="star-layer star-layer--big" style:box-shadow={layers.big}></div>
</div>

<style>
	.stars-field {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -10;
		pointer-events: none;
	}

	.star-layer {
		border-radius: 100%;
		animation: star-rise linear infinite;
	}

	.star-layer--small {
		width: 1px;
		height: 1px;
		animation-duration: 50s;
	}

	.star-layer--medium {
		width: 2px;
		height: 2px;
		animation-duration: 100s;
	}

	.star-layer--big {
		width: 3px;
		height: 3px;
		animation-duration: 150s;
	}

	@keyframes star-rise {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-100dvh);
		}
	}
</style>
