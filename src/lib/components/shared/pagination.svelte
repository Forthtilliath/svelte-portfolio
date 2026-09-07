<script lang="ts" generics="T extends Record<string, unknown>">
	import * as Pagination from '$lib/components/ui/pagination';
	import ChevronLeft from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import { t } from '$lib/translations';

	interface Props {
		perPage: number;
		siblingCount: number;
		data: T[];
		onChange?: (page: number) => void;
		card?: import('svelte').Snippet<[{ itemData: T }]>;
	}

	let { perPage, siblingCount, data = [], onChange = () => {}, card }: Props = $props();

	let page = $state(1);
	let listEl = $state<HTMLElement | null>(null);

	// Hauteur du header fixe + une petite marge, pour ne pas masquer le contenu ciblé.
	const HEADER_OFFSET = 70;

	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- read `data` only to track it as an $effect dependency
		data;
		page = 1;
	});

	function handlePageChange(nextPage: number) {
		onChange(nextPage);

		// Remonte jusqu'au haut de la section (titre + filtres compris), pas seulement
		// au haut de la grille, sinon les boutons radio restent cachés par le header.
		const target = listEl?.closest('section') ?? listEl;
		if (target) {
			const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
			window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
		}
	}
</script>

<Pagination.Root
	count={data.length}
	{perPage}
	{siblingCount}
	bind:page
	onPageChange={handlePageChange}
>
	{#snippet children({ pages, currentPage })}
		{#if currentPage}
			{@const pageData = currentPage
				? data.slice((currentPage - 1) * perPage, currentPage * perPage)
				: data}
			<main
				bind:this={listEl}
				class="smd:grid-cols-projects max-xs:m-auto mb-4 grid w-full grid-cols-1 justify-center justify-items-center gap-4"
			>
				{#each pageData as itemData, i (i)}
					{@render card?.({ itemData })}
				{/each}
			</main>
			{#if pages.length > 1}
				<Pagination.Content>
					<Pagination.Item>
						<Pagination.PrevButton>
							<ChevronLeft class="size-4" />
							<span class="hidden sm:block">{$t('ui.previous')}</span>
						</Pagination.PrevButton>
					</Pagination.Item>
					{#each pages as page (page.key)}
						{#if page.type === 'ellipsis'}
							<Pagination.Item>
								<Pagination.Ellipsis />
							</Pagination.Item>
						{:else}
							<Pagination.Item>
								<Pagination.Link {page} isActive={currentPage === page.value}>
									{page.value}
								</Pagination.Link>
							</Pagination.Item>
						{/if}
					{/each}
					<Pagination.Item>
						<Pagination.NextButton>
							<span class="hidden sm:block">{$t('ui.next')}</span>
							<ChevronRight class="size-4" />
						</Pagination.NextButton>
					</Pagination.Item>
				</Pagination.Content>
			{/if}
		{/if}
	{/snippet}
</Pagination.Root>
