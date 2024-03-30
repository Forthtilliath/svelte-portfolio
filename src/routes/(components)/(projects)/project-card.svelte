<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/flowbite/card.svelte';
	import type { Project } from './projects';
	import Shine from '$lib/components/shared/shine.svelte';
	import { onMount } from 'svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';

	export let image: Project['image'] = undefined;
	export let name: Project['name'];
	export let description: Project['description'];
	export let repo: Project['repo'];
	export let tags: Project['tags'];
	export let url: Project['url'] = undefined;

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
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

{#if loaded}
	<!-- <div class="w-full"> -->
		<Shine
			depth={2}
			lightRadius={300}
			lightColor="#149eca"
			specularConstant={0.3}
			specularExponent={200}
		>
			<Card img={image} size="xs" href={url} color="app-blue" padding="sm" tilted>
				<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{name}
				</h5>
				<p class="line-clamp-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
					{description}
				</p>
				<div class="line-clamp-2 flex flex-wrap gap-x-2">
					{#each tags as tag}
						<span class="text-white">
							#{tag}
						</span>
					{/each}
				</div>
				<Button href={repo}>Show repository</Button>
			</Card>
		</Shine>
	<!-- </div> -->
{:else}
	<Card img={image} size="xs" href={url} color="app-blue" padding="sm" skeleton>
		<!-- bind card width and get value between 0.5 and 1 -->
		<Skeleton class="h-8" />
		<Skeleton class="h-16" />
		<Skeleton class="h-12" />
		<Skeleton class="h-10" />
	</Card>
{/if}
