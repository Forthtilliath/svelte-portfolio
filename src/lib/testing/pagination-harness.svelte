<script lang="ts">
	import Pagination from '$lib/components/shared/pagination.svelte';

	type Item = { id: string; label: string };

	interface Props {
		data: Item[];
		perPage?: number;
		siblingCount?: number;
		onChange?: (page: number) => void;
	}

	let { data, perPage = 6, siblingCount = 1, onChange = () => {} }: Props = $props();
</script>

<Pagination {data} {perPage} {siblingCount} {onChange}>
	{#snippet card({ itemData })}
		<li data-testid="item">{itemData.label}</li>
	{/snippet}
</Pagination>
