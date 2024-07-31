<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import type { Framework } from '$lib/components/layout/skills';
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
	import FrameworksGroup from './frameworks-group.svelte';
	import Pagination from '$lib/components/shared/pagination.svelte';
	import { derived, writable } from 'svelte/store';
	import { t } from '$lib/translations';

	let filterFrameworks = writable<Framework[]>([]);

	let filteredProjects = derived([filterFrameworks], ([$filterFrameworks]) => {
		return projects.filter(
			(project) =>
				$filterFrameworks.length === 0 || $filterFrameworks.some((f) => project.tags.includes(f))
		);
	});
</script>

<Section className="flex items-center justify-start flex-col" id="projects">
	<SectionTitle>{$t('projects.title')}</SectionTitle>

	<div class="pb-4">
		<FrameworksGroup bind:value={$filterFrameworks} />
	</div>

	<Pagination data={$filteredProjects} perPage={6} siblingCount={2}>
		<article slot="card" let:itemData class="mx-auto w-full">
			<ProjectCard {...itemData} />
		</article>
	</Pagination>
</Section>
