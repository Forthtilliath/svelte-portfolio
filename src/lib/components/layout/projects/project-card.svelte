<script lang="ts">
	import WithLoader from '$lib/components/shared/with-loader/with-loader.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/flowbite/card.svelte';
	import type { Project } from './projects';
	import Shine from '$lib/components/shared/shine.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { cn } from '$lib/utils';
	import { t, locale, type Language } from '$lib/translations';

	interface Props {
		image?: Project['image'];
		name: Project['name'];
		description: Project['description'];
		repo: Project['repo'];
		tags: Project['tags'];
		url?: Project['url'];
	}

	let { image = undefined, name, description, repo, tags, url = undefined }: Props = $props();

	let lang: Language = $derived($locale as Language);

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
		<Card
			img={image}
			size="xs"
			color="app-blue"
			padding="sm"
			aria-label={$t('projects.display', { name: name[lang] })}
			class="bg-app-black mx-auto"
			href={url}
			target="_blank"
			rel="noopener noreferrer"
		>
			<h5 class="line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{name[lang]}
			</h5>
			<p class="line-clamp-3 h-[60px] leading-tight font-normal text-gray-700 dark:text-gray-400">
				{description[lang]}
			</p>
			<div class="line-clamp-2 flex h-12 flex-wrap gap-x-2">
				{#each tags as tag (tag)}
					<span class="group font-serif text-sm text-white">
						<strong class="group-hover:text-sky-500">#</strong>{tag}
					</span>
				{/each}
			</div>
			<Button href={repo} class="w-full" variant="card-link" external>Show repository</Button>
		</Card>
	</Shine>
	{#snippet loading()}
		<Card img={image} size="xs" color="app-blue" padding="sm" skeleton class="bg-app-black mx-auto">
			{@const contentLines = getRandom(3)}
			{@const tagsLines = getRandom(2)}
			<!-- Title-->
			<Skeleton class={cn('h-8', getSkeletonWidth())} />
			<!-- Content -->
			{#each { length: contentLines - 1 } as _, i (i)}
				<Skeleton class={cn('h-4 w-full', getSkeletonWidth())} />
			{/each}
			<Skeleton class={cn('h-4', getSkeletonWidth())} />
			{#each { length: 3 - contentLines } as _, i (i)}
				<div class="h-4 bg-transparent"></div>
			{/each}
			<!-- Tags -->
			{#each { length: tagsLines - 1 } as _, i (i)}
				<Skeleton class={cn('h-4', getSkeletonWidth())} />
			{/each}
			<Skeleton class={cn('h-4', getSkeletonWidth())} />
			{#each { length: 2 - tagsLines } as _, i (i)}
				<div class="h-5 bg-transparent"></div>
			{/each}
			<!-- Button -->
			<Skeleton class={cn('h-9')} />
		</Card>
	{/snippet}
</WithLoader>
