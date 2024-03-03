<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import Text3d from '$lib/components/shared/Text3d.svelte';
	import FlipWords from '$lib/components/shared/flip-words/FlipWords.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	let width: number;

	$: diceWidth = Math.min(100, (width - 100) / 7);
	$: loaded = false;

	onMount(() => {
		loaded = true;
	});

	const shadowOptions = {
		// depth:
	};
</script>

<Section className="flex items-center justify-center flex-col" id="hero">
	<SectionTitle className="text-white text-center">
		<span class="text-5xl">{$t('hero.name')}</span>
		<Text3d tag="span" className="text-7xl" color="#fff" shadowOptions={{ color: '#149eca' }}>
			Vincent LISITA !
		</Text3d>
	</SectionTitle>
	<h2 class="text-7xl font-extrabold tracking-tight text-app-blue lg:text-5xl">
		<Text3d tag="span" className="text-7xl" color="#149eca" shadowOptions={{ color: '#fff' }}>
			{$t('hero.job')}
		</Text3d>
	</h2>

	{#if loaded}
		<div class="relative mt-8 w-full" bind:clientWidth={width}>
			<FlipWords
				words={['react', 'nextjs', 'solidjs', 'svelte']}
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
