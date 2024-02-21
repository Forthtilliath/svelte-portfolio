<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import FlipWords from '$lib/components/shared/flip-words/FlipWords.svelte';
</script>

<Section className="flex items-center justify-center flex-col" id="hero">
	<SectionTitle>
		Hello, my name is <span class="text-7xl">Vincent LISITA</span>
	</SectionTitle>

	<FlipWords
		words={['react', 'nextjs', 'solidjs', 'svelte']}
		size="100px"
		options={{
			translateY: '-4px',
			delayFn: (i) => `${(i * 0.2).toFixed(1)}s`,
			colors: ['#149eca', '#000000', '#3a5577', '#f96743'],
			duration: '12s'
		}}
	/>
</Section>
