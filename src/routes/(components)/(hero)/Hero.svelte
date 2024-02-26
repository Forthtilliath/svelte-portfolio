<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import FlipWords from '$lib/components/shared/flip-words/FlipWords.svelte';
	import { t } from '$lib/translations';

	let width: number;

	$: diceWidth = Math.min(100, (width - 100) / 7);
</script>

<Section className="flex items-center justify-center flex-col" id="hero">
	<SectionTitle className="text-white text-center">
		<span class="text-5xl">{$t('hero.name')}</span>
		<span class="text-3d text-7xl">Vincent LISITA !</span>
	</SectionTitle>
	<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-app-blue lg:text-5xl">
		<span>{$t('hero.job')}</span>
	</h2>

	<div class="relative w-full" bind:clientWidth={width}>
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
					// face: ['', 'border-2 border-white', '', ''],
					wrapper: 'absolute left-1/2 -translate-x-1/2'
					//font-size to fix
				}
			}}
		/>
	</div>
</Section>

<style lang="scss">
	@use '$lib/styles/mixins' as *;
	$primarycolour: #149eca;

	.text-3d {
		@include text3d(
			adjust-color($primarycolour, $lightness: -8%),
			$depth: 8,
			$primaryshadowcolour: adjust-color($primarycolour, $lightness: -10%, $saturation: +20%),
			$shadowopacity: 0.3
		);
	}
</style>
