<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import type { Framework } from '$lib/components/layout/skills';
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
	import FrameworksGroup from './frameworks-group.svelte';
	import Pagination from '$lib/components/shared/pagination.svelte';
	import { t } from '$lib/translations';
	import { filterProjectsByFrameworks } from './filter-projects';

	let filterFramework = $state<Framework | ''>('');

	let filteredProjects = $derived(
		filterProjectsByFrameworks(projects, filterFramework ? [filterFramework] : [])
	);
</script>

<Section className="flex items-center justify-start flex-col" id="projects">
	<SectionTitle>{$t('projects.title')}</SectionTitle>

	<div class="pb-4">
		<p class="p-3 text-center text-slate-200">{$t('projects.radio-description')}</p>
		<FrameworksGroup bind:value={filterFramework} />
	</div>

	<Pagination data={filteredProjects} perPage={6} siblingCount={2}>
		{#snippet card({ itemData })}
			<article class="mx-auto w-full">
				<ProjectCard {...itemData} />
			</article>
		{/snippet}
	</Pagination>
</Section>
