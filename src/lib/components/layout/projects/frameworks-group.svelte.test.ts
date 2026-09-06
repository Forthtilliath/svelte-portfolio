import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import skills from '$lib/components/layout/skills/skills';
import FrameworksGroup from './frameworks-group.svelte';

const frameworkNames = skills.frameworks.map((f) => f.name);

describe('frameworks-group', () => {
	it('renders one toggle per framework', () => {
		render(FrameworksGroup);

		for (const name of frameworkNames) {
			expect(screen.getByRole('radio', { name: `Toggle ${name}` })).toBeInTheDocument();
		}
	});

	it('starts with no framework selected', () => {
		render(FrameworksGroup);

		for (const name of frameworkNames) {
			expect(screen.getByRole('radio', { name: `Toggle ${name}` })).toHaveAttribute(
				'aria-checked',
				'false'
			);
		}
	});

	it('selects a framework on click', async () => {
		const user = userEvent.setup();
		render(FrameworksGroup);

		await user.click(screen.getByRole('radio', { name: 'Toggle React' }));

		expect(screen.getByRole('radio', { name: 'Toggle React' })).toHaveAttribute(
			'aria-checked',
			'true'
		);
	});

	it('is single-select: choosing another framework clears the previous one', async () => {
		const user = userEvent.setup();
		render(FrameworksGroup);

		await user.click(screen.getByRole('radio', { name: 'Toggle React' }));
		await user.click(screen.getByRole('radio', { name: 'Toggle Sveltekit' }));

		expect(screen.getByRole('radio', { name: 'Toggle React' })).toHaveAttribute(
			'aria-checked',
			'false'
		);
		expect(screen.getByRole('radio', { name: 'Toggle Sveltekit' })).toHaveAttribute(
			'aria-checked',
			'true'
		);
	});

	it('toggles off when the active framework is clicked again', async () => {
		const user = userEvent.setup();
		render(FrameworksGroup);

		const react = screen.getByRole('radio', { name: 'Toggle React' });
		await user.click(react);
		await user.click(react);

		expect(react).toHaveAttribute('aria-checked', 'false');
	});
});
