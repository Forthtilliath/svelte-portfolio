<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/flowbite/card.svelte';
	import type { Project } from './projects';

	export let image: Project['image'] = undefined;
	export let name: Project['name'];
	export let description: Project['description'];
	export let repo: Project['repo'];
	export let tags: Project['tags'];
	export let url: Project['url'] = undefined;
</script>

<!-- Front -->
<!-- - Image du projet -->
<!-- - Titre du projet -->
<!-- - Courte Description du projet -->
<!-- - Tags du projet -->
<!-- - React/Next/Solid/Svelte -->

<!-- Back -->
<!-- - Description du projet -->
<!-- - Bouton pour voir le projet -->

<!-- Set same height for each card -->
<!-- Max 2 lines of descriptions -->

<!-- TODO: Add skeleton while loading -->

<Card img={image} size="xs" href={url} color="app-blue" padding="sm">
	<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{name}
	</h5>
	<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
		{description}
	</p>
	<div class="flex flex-wrap gap-2">
		{#each tags as tag}
			<span class="text-white">
				#{tag}
			</span>
		{/each}
	</div>
	<Button href={repo}>Show repository</Button>
</Card>
