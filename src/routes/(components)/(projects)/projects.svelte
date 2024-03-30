<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
	import FrameworksGroup from './frameworks-group.svelte';
</script>

<Section className="flex items-center justify-center flex-col" id="projects">
	<SectionTitle>Projects</SectionTitle>

	<div class="pb-4">
		<FrameworksGroup />
	</div>

	<main class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</main>
</Section>
