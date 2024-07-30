<script lang="ts">
	import WithLoader from '$lib/components/shared/with-loader/with-loader.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/flowbite/card.svelte';
	import type { Project } from './projects';
	import Shine from '$lib/components/shared/shine.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { cn } from '$lib/utils';
	import { locale, type Language } from '$lib/translations';

	export let image: Project['image'] = undefined;
	export let name: Project['name'];
	export let description: Project['description'];
	export let repo: Project['repo'];
	export let tags: Project['tags'];
	export let url: Project['url'] = undefined;

	let lang: Language;
	$: lang = $locale as Language;

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
	function getRandom(n: number) {
		return Math.floor(Math.random() * n) + 1;
	}
</script>

<!-- TODO: Bouton pour afficher plus d'infos -->

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
				{name[lang]}
			</h5>
			<p class="line-clamp-3 h-[60px] font-normal leading-tight text-gray-700 dark:text-gray-400">
				{description[lang]}
			</p>
			<div class="line-clamp-2 flex h-12 flex-wrap gap-x-2">
				{#each tags as tag}
					<span class="group font-serif text-sm text-white">
						<strong class="group-hover:text-sky-500">#</strong>{tag}
					</span>
				{/each}
			</div>
			<Button href={repo} class="w-full" variant="card-link" external>Show repository</Button>
		</Card>
	</Shine>
	<Card img={image} size="xs" href={url} color="app-blue" padding="sm" skeleton slot="loading">
		{@const contentLines = getRandom(3)}
		{@const tagsLines = getRandom(2)}
		<!-- Title-->
		<Skeleton class={cn('h-8', getSkeletonWidth())} />
		<!-- Content -->
		{#each { length: contentLines - 1 } as _}
			<Skeleton class={cn('h-4 w-full', getSkeletonWidth())} />
		{/each}
		<Skeleton class={cn('h-4', getSkeletonWidth())} />
		{#each { length: 3 - contentLines} as _}
			<div class="h-4 bg-transparent" />
		{/each}
		<!-- Tags -->
		{#each { length: tagsLines - 1 } as _}
			<Skeleton class={cn('h-4', getSkeletonWidth())} />
		{/each}
		<Skeleton class={cn('h-4', getSkeletonWidth())} />
		{#each { length: 2 - tagsLines } as _}
			<div class="h-5 bg-transparent" />
		{/each}
		<!-- Button -->
		<Skeleton class={cn('h-9')} />
	</Card>
</WithLoader>
