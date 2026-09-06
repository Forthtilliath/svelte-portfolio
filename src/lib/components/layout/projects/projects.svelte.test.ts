import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import projectList from './projects';
import { filterProjectsByFrameworks } from './filter-projects';
import Projects from './projects.svelte';

const PER_PAGE = 6;

const visibleHeadings = () =>
	screen
		.getAllByRole('heading', { level: 5 })
		.map((h) => h.textContent?.trim())
		.filter(Boolean);

describe('projects section', () => {
	it('paginates the full project list, six cards per page', () => {
		render(Projects);

		expect(visibleHeadings()).toHaveLength(Math.min(PER_PAGE, projectList.length));
	});

	it('narrows the list when a framework filter is toggled', async () => {
		const user = userEvent.setup();
		render(Projects);

		await user.click(screen.getByRole('radio', { name: 'Toggle React' }));

		const expected = filterProjectsByFrameworks(projectList, ['React'])
			.slice(0, PER_PAGE)
			.map((p) => p.name.fr);

		expect(visibleHeadings()).toEqual(expect.arrayContaining(expected));
		expect(visibleHeadings().length).toBeLessThanOrEqual(expected.length);
	});

	it('restores the full list when the filter is cleared', async () => {
		const user = userEvent.setup();
		render(Projects);

		const react = screen.getByRole('radio', { name: 'Toggle React' });
		await user.click(react);
		await user.click(react);

		expect(visibleHeadings()).toHaveLength(Math.min(PER_PAGE, projectList.length));
	});

	it('goes back to page 1 after changing the filter', async () => {
		const user = userEvent.setup();
		render(Projects);

		const nav = screen.queryByRole('navigation', { name: 'pagination' });
		if (nav) {
			await user.click(within(nav).getByRole('button', { name: /go to next page/i }));
		}

		await user.click(screen.getByRole('radio', { name: 'Toggle Sveltekit' }));

		const firstExpected = filterProjectsByFrameworks(projectList, ['Sveltekit'])[0]?.name.fr;
		expect(visibleHeadings()).toContain(firstExpected);
	});
});
