<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import Text3d from '$lib/components/shared/text-3d.svelte';
	import FlipWords from '$lib/components/shared/flip-words/flip-words.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	let clientWidth: number;

	let diceWidth: number;
	$: diceWidth = Math.min(100, (clientWidth - 100) / 7);
	let depthMax: number;
	$: depthMax = getDepth(clientWidth);
	let loaded: boolean;
	$: loaded = false;

	onMount(() => {
		loaded = true;
	});

	function getDepth(width: number): number {
		if (width < 640) return 4;
		if (width < 768) return 6;
		return 8;
	}
</script>

<Section className="flex items-center justify-center flex-col" id="hero">
	<SectionTitle className="text-white text-center">
		<span class="text-4xl md:text-5xl">{$t('hero.name')}</span>
		<Text3d
			tag="span"
			className="text-3xl md:text-7xl block md:inline-block"
			color="#fff"
			shadowOptions={{ color: '#149eca', depth: depthMax }}
		>
			Vincent LISITA !
		</Text3d>
	</SectionTitle>

	<Text3d
		tag="h2"
		className="text-center font-extrabold tracking-tight text-[clamp(3rem,5vw,5rem)] md:text-6xl lg:text-7xl text-balance"
		color="#149eca"
		shadowOptions={{ color: '#fff', depth: depthMax, to: { luminosity: 30, saturate: 0 } }}
	>
		{$t('hero.job')}
	</Text3d>

	{#if loaded}
		<div class="relative mt-8 w-full" bind:clientWidth>
			<FlipWords
				words={['react', 'next.js', 'solidjs', 'sveltekit']}
				size={diceWidth + 'px'}
				options={{
					translateY: '-4px',
					delayFn: (i) => `${(i * 0.2).toFixed(1)}s`,
					colors: ['#149eca', '#000000', '#3a5577', '#f96743'],
					duration: '12s',
					classNames: {
						face: 'border-2 border-white',
						wrapper: 'absolute left-1/2 -translate-x-1/2'
						// TODO: font-size to fix
					}
				}}
			/>
		</div>
	{/if}
</Section>
