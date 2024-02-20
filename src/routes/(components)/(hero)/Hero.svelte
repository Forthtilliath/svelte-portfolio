<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import FlipArray from '$lib/components/shared/flip/FlipArray.svelte';
</script>

<Section>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<FlipArray
		words={['react', 'nextjs', 'solidjs', 'svelte']}
		size="100px"
		options={{
			translateY: '-4px',
      delayFn: (i) => `${(i * 0.2).toFixed(1)}s`,
			colors: ['#149eca', '#000000', '#3a5577', '#f96743']
		}}
	/>
</Section>

<style>
	* {
		margin-top: 1rem;
	}
</style>
