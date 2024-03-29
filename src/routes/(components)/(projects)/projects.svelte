<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
</script>

<Section className="flex items-center justify-center flex-col" id="projects">
	<SectionTitle>Projects</SectionTitle>

	<main class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</main>
</Section>
