<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import type { Framework } from '$lib/components/layout/skills';
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
	import FrameworksGroup from './frameworks-group.svelte';

	let filterFrameworks: Framework[] = [];

	let filteredProjects: typeof projects;
	$: filteredProjects = projects.filter(
		(project) =>
			filterFrameworks.length === 0 || filterFrameworks.some((f) => project.tags.includes(f))
	);
</script>

<Section className="flex items-center justify-start flex-col" id="projects">
	<SectionTitle>Projects</SectionTitle>

	<div class="pb-4">
		<FrameworksGroup bind:value={filterFrameworks} />
	</div>

	<main
		class="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]"
	>
		{#each filteredProjects as project}
			<ProjectCard {...project} />
		{/each}
	</main>
</Section>
