<script lang="ts" generics="T extends Record<string, unknown>">
	import type { CustomEventHandler } from 'bits-ui';

	import * as Pagination from '$lib/components/ui/pagination';
	import ChevronLeft from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import { t } from '$lib/translations';

	type $$Props = {
		perPage: number;
		siblingCount: number;
		data: T[];
		onChange?: (event: CustomEventHandler<MouseEvent, HTMLDivElement>, page: number) => void;
	};

	type $$Slots = {
		card: {
			itemData: T;
		};
	};

	export let perPage: $$Props['perPage'];
	export let siblingCount: $$Props['siblingCount'];
	export let data: $$Props['data'] = [];
	export let onChange: Exclude<$$Props['onChange'], undefined> = () => {};
</script>

<Pagination.Root count={data.length} {perPage} {siblingCount} let:pages let:currentPage>
	{#if currentPage}
		{@const pageData = currentPage
			? data.slice((currentPage - 1) * perPage, currentPage * perPage)
			: data}
		<main class="mb-4 grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-projects">
			{#each pageData as itemData}
				<slot name="card" {itemData} />
			{/each}
		</main>
		{#if pages.length > 1}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton on:click={(e) => onChange(e, currentPage - 1)}>
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
							<Pagination.Link
								{page}
								isActive={currentPage === page.value}
								on:click={(e) => onChange(e, page.value)}
							>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.NextButton on:click={(e) => onChange(e, currentPage + 1)}>
						<span class="hidden sm:block">{$t('ui.next')}</span>
						<ChevronRight class="h-4 w-4" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		{/if}
	{/if}
</Pagination.Root>
