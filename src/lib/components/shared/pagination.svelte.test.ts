import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Harness from '$lib/testing/pagination-harness.svelte';

type Item = { id: string; label: string };

const makeData = (count: number): Item[] =>
	Array.from({ length: count }, (_, i) => ({ id: `id-${i}`, label: `Item ${i + 1}` }));

function renderPagination(props: {
	data: Item[];
	perPage?: number;
	siblingCount?: number;
	onChange?: (page: number) => void;
}) {
	return render(Harness, { props: { perPage: 6, siblingCount: 1, ...props } });
}

const itemLabels = () => screen.getAllByTestId('item').map((el) => el.textContent);
const nextButton = () => screen.getByRole('button', { name: /go to next page/i });
const prevButton = () => screen.getByRole('button', { name: /go to previous page/i });

describe('shared/pagination', () => {
	it('renders only the first page worth of items', () => {
		renderPagination({ data: makeData(14), perPage: 6 });

		expect(itemLabels()).toEqual(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);
	});

	it('hides the page navigation when everything fits on one page', () => {
		renderPagination({ data: makeData(5), perPage: 6 });

		expect(screen.queryByRole('button', { name: /go to next page/i })).not.toBeInTheDocument();
		expect(itemLabels()).toHaveLength(5);
	});

	it('shows the page navigation when there is more than one page', () => {
		renderPagination({ data: makeData(14), perPage: 6 });

		expect(nextButton()).toBeInTheDocument();
		expect(prevButton()).toBeInTheDocument();
	});

	it('moves to the next slice of items when "next" is clicked', async () => {
		const user = userEvent.setup();
		renderPagination({ data: makeData(14), perPage: 6 });

		await user.click(nextButton());

		expect(itemLabels()).toEqual(['Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12']);
	});

	it('shows the trailing remainder on the last page', async () => {
		const user = userEvent.setup();
		renderPagination({ data: makeData(14), perPage: 6 });

		const nav = screen.getByRole('navigation', { name: 'pagination' });
		await user.click(within(nav).getByRole('button', { name: 'Page 3' }));

		expect(itemLabels()).toEqual(['Item 13', 'Item 14']);
	});

	it('notifies the parent of page changes through onChange', async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		renderPagination({ data: makeData(14), perPage: 6, onChange });

		await user.click(nextButton());

		expect(onChange).toHaveBeenCalledWith(2);
	});

	it('resets to page 1 when the data set changes', async () => {
		const user = userEvent.setup();
		const { rerender } = renderPagination({ data: makeData(14), perPage: 6 });

		await user.click(nextButton());
		expect(itemLabels()).toContain('Item 7');

		await rerender({ perPage: 6, siblingCount: 1, data: makeData(20) });

		expect(itemLabels()[0]).toBe('Item 1');
	});

	it('renders nothing and does not crash on an empty data set', () => {
		renderPagination({ data: [], perPage: 6 });

		expect(screen.queryAllByTestId('item')).toHaveLength(0);
		expect(screen.queryByRole('button', { name: /go to next page/i })).not.toBeInTheDocument();
	});
});
