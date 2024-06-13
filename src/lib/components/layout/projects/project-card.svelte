<script lang="ts">
	import WithLoader from '$lib/components/shared/with-loader/with-loader.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/flowbite/card.svelte';
	import type { Project } from './projects';
	import Shine from '$lib/components/shared/shine.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { cn } from '$lib/utils';

	export let image: Project['image'] = undefined;
	export let name: Project['name'];
	export let description: Project['description'];
	export let repo: Project['repo'];
	export let tags: Project['tags'];
	export let url: Project['url'] = undefined;

	let aSkeletonWidths = [
		'w-5/12',
		'w-6/12',
		'w-7/12',
		'w-8/12',
		'w-9/12',
		'w-10/12',
		'w-11/12',
		'w-12/12'
	];
	function getSkeletonWidth() {
		return aSkeletonWidths[Math.floor(Math.random() * aSkeletonWidths.length)];
	}
	function hasLine() {
		return Math.random() > 0.5;
	}
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

<WithLoader>
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
			<p class="line-clamp-3 h-[60px] font-normal leading-tight text-gray-700 dark:text-gray-400">
				{description}
			</p>
			<div class="line-clamp-2 flex h-12 flex-wrap gap-x-2">
				{#each tags as tag}
					<span class="text-white group font-serif text-sm">
						<strong class="group-hover:text-sky-500">#</strong>{tag}
					</span>
				{/each}
			</div>
			<Button href={repo} class="w-full" variant="card-link" external>Show repository</Button>
		</Card>
	</Shine>
	<Card img={image} size="xs" href={url} color="app-blue" padding="sm" skeleton slot="loading">
		<!-- Title-->
		<Skeleton class={cn('h-8', getSkeletonWidth())} />
		<!-- Content -->
		{#if hasLine()}
			<Skeleton class={cn('h-5')} />
		{/if}
		{#if hasLine()}
			<Skeleton class={cn('h-5')} />
		{/if}
		<Skeleton class={cn('h-5', getSkeletonWidth())} />
		<!-- Tags -->
		{#if hasLine()}
			<Skeleton class={cn('h-6')} />
		{/if}
		<Skeleton class={cn('h-6', getSkeletonWidth())} />
		<!-- Button -->
		<Skeleton class={cn('h-10')} />
	</Card>
</WithLoader>
