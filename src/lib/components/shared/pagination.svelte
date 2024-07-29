<script lang="ts" generics="T extends Record<string, unknown>">
	import * as Pagination from '$lib/components/ui/pagination';
	import ChevronLeft from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import { t } from '$lib/translations';

	export let perPage: number;
	export let siblingCount: number;
	export let data: T[] = [];

	function getCurrentPageData(page: number = 1) {
		return data.slice((page - 1) * perPage, page * perPage);
	}
</script>

<Pagination.Root count={data.length} {perPage} {siblingCount} let:pages let:currentPage>
	<main
		class="mb-4 grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-projects"
	>
		{#each getCurrentPageData(currentPage) as pageData}
			<slot name="card" {pageData} />
		{/each}
	</main>
	{#if pages.length > 1}
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.PrevButton>
					<ChevronLeft class="h-4 w-4" />
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
					<ChevronRight class="h-4 w-4" />
				</Pagination.NextButton>
			</Pagination.Item>
		</Pagination.Content>
	{/if}
</Pagination.Root>
