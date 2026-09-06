import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Footer from './footer.svelte';

afterEach(() => {
	vi.useRealTimers();
});

describe('footer', () => {
	it('renders the current year as a range starting at 2024', () => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2027-03-01T12:00:00Z'));

		render(Footer);

		expect(screen.getByText(/©\s*2024–2027/)).toBeInTheDocument();
	});

	it('shows a single year while still in 2024', () => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2024-06-01T12:00:00Z'));

		render(Footer);

		expect(screen.getByText(/©\s*2024\s*—/)).toBeInTheDocument();
		expect(screen.queryByText(/2024–2024/)).not.toBeInTheDocument();
	});

	it('links out to the CV, GitHub and LinkedIn profiles', () => {
		render(Footer);

		expect(screen.getByRole('link', { name: 'Curriculum Vitae' })).toHaveAttribute('href', '/cv');
		expect(screen.getByRole('link', { name: 'Github' })).toHaveAttribute(
			'href',
			'https://github.com/Forthtilliath'
		);
		expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/vincent-lisita/'
		);
	});

	it('opens every external link safely in a new tab', () => {
		render(Footer);

		for (const link of screen.getAllByRole('link')) {
			if (link.getAttribute('href')?.startsWith('http')) {
				expect(link).toHaveAttribute('target', '_blank');
				expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
			}
		}
	});
});
