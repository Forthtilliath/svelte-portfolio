<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import FlipArray from '$lib/components/shared/FlipArray.svelte';
</script>

<Section>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<FlipArray words={['react','nextjs','solidjs','svelte']} />
</Section>

<style>
	* {
		margin-top: 1rem;
	}
</style>
