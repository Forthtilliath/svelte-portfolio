<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/flowbite/card.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { Project } from './projects';
	import Shine from '$lib/components/shared/shine.svelte';
	import ProjectTag from './project-tag.svelte';
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
	let dialogOpen = $state(false);

	// Hard cap on the card so a project with an unusually long tag list can
	// never overflow its fixed-height tag row; the dialog ("Voir plus") isn't
	// height-constrained and always shows every tag.
	const MAX_VISIBLE_TAGS = 7;
	let visibleTags = $derived(tags.slice(0, MAX_VISIBLE_TAGS));
	let hiddenTagsCount = $derived(Math.max(0, tags.length - MAX_VISIBLE_TAGS));
</script>

<Shine
	depth={2}
	lightRadius={300}
	lightColor="#149eca"
	specularConstant={0.3}
	specularExponent={200}
>
	<div class="mx-auto flex max-w-xs flex-col">
		<Card
			img={image}
			imgAlt={$t('projects.imageAlt', { name: name[lang] })}
			size="none"
			color="app-blue"
			padding="sm"
			aria-label={$t('projects.display', { name: name[lang] })}
			class="bg-app-black rounded-b-none"
			href={url}
			target="_blank"
			rel="noopener noreferrer"
		>
			<h5 class="line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{name[lang]}
			</h5>
			<p class="line-clamp-3 h-15 leading-tight font-normal text-gray-700 dark:text-gray-400">
				{description[lang]}
			</p>
			<div class="flex h-14 flex-wrap content-start gap-1.5 overflow-hidden">
				{#each visibleTags as tag (tag)}
					<ProjectTag {tag} />
				{/each}
				{#if hiddenTagsCount > 0}
					<ProjectTag tag={`+${hiddenTagsCount}`} />
				{/if}
			</div>
		</Card>
		<!-- Outside the card's own <a> on purpose: these are real buttons/dialog triggers, not
		     navigation to the project's live url, and must never sit inside that anchor. -->
		<div class="bg-app-black ring-app-blue flex gap-2 rounded-b-lg p-4 ring-1">
			<Button
				type="button"
				variant="outline"
				class="shrink-0 cursor-pointer"
				onclick={() => (dialogOpen = true)}
			>
				{$t('projects.readMore')}
			</Button>
			<Button href={repo} class="flex-1" variant="card-link" external>{$t('projects.repo')}</Button>
		</div>
	</div>
</Shine>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content class="sm:max-w-lg">
		{#if image}
			<img
				src={image}
				alt={name[lang]}
				width="1280"
				height="720"
				loading="lazy"
				class="aspect-video w-full rounded-lg object-cover"
			/>
		{/if}
		<Dialog.Header>
			<Dialog.Title>{name[lang]}</Dialog.Title>
		</Dialog.Header>
		<Dialog.Description class="text-foreground">{description[lang]}</Dialog.Description>
		<div class="flex flex-wrap gap-1.5">
			{#each tags as tag (tag)}
				<ProjectTag {tag} />
			{/each}
		</div>
		<Dialog.Footer>
			<Dialog.Close>
				{#snippet child({ props })}
					<Button {...props} variant="outline" class="cursor-pointer">{$t('projects.close')}</Button
					>
				{/snippet}
			</Dialog.Close>
			{#if url}
				<Button href={url} variant="outline" external>{$t('projects.live')}</Button>
			{/if}
			<Button href={repo} variant="card-link" external>{$t('projects.repo')}</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
