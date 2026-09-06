import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/svelte';
import { tick } from 'svelte';
import userEvent from '@testing-library/user-event';
import { get } from 'svelte/store';
import { loadTranslations, locale, setLocale } from '$lib/translations';
import Header from './header.svelte';

beforeEach(async () => {
	await loadTranslations('fr');
	setLocale('fr');
	await tick();
});

afterEach(() => {
	setLocale('fr');
});

describe('header - menu mobile', () => {
	it('is collapsed on first render', () => {
		render(Header);
		const toggle = screen.getByRole('button', { name: 'Navigation principale' });
		expect(toggle).toHaveAttribute('aria-expanded', 'false');
		expect(toggle).toHaveAttribute('aria-controls', 'primary-menu');
	});

	it('opens when the hamburger button is clicked', async () => {
		const user = userEvent.setup();
		render(Header);
		const toggle = screen.getByRole('button', { name: 'Navigation principale' });

		await user.click(toggle);

		expect(toggle).toHaveAttribute('aria-expanded', 'true');
	});

	it('closes again on a second click', async () => {
		const user = userEvent.setup();
		render(Header);
		const toggle = screen.getByRole('button', { name: 'Navigation principale' });

		await user.click(toggle);
		await user.click(toggle);

		expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	it('closes when Escape is pressed', async () => {
		const user = userEvent.setup();
		render(Header);
		const toggle = screen.getByRole('button', { name: 'Navigation principale' });

		await user.click(toggle);
		expect(toggle).toHaveAttribute('aria-expanded', 'true');

		await user.keyboard('{Escape}');

		expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	it('closes when a navigation link is clicked', async () => {
		const user = userEvent.setup();
		render(Header);
		const toggle = screen.getByRole('button', { name: 'Navigation principale' });

		await user.click(toggle);
		await user.click(screen.getByRole('link', { name: 'Projets' }));

		expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	it('exposes every section anchor', () => {
		render(Header);
		for (const [label, hash] of [
			['À Propos', '#about'],
			['Compétences', '#skills'],
			['Projets', '#projects'],
			['Me Contacter', '#contact']
		]) {
			expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', hash);
		}
	});

	it('keeps a skip-to-content link as the first focusable element', () => {
		render(Header);
		expect(screen.getByRole('link', { name: 'Aller au contenu' })).toHaveAttribute(
			'href',
			'#main-content'
		);
	});
});

describe('header - bascule de langue', () => {
	it('offers to switch to English while the site is in French', () => {
		render(Header);
		expect(screen.getByRole('button', { name: 'Change la langue en anglais' })).toBeInTheDocument();
	});

	it('switches the active locale to English on click', async () => {
		const user = userEvent.setup();
		render(Header);

		await user.click(screen.getByRole('button', { name: 'Change la langue en anglais' }));

		await waitFor(() => expect(get(locale)).toBe('en'));
	});

	it('persists the choice in a cookie', async () => {
		const user = userEvent.setup();
		render(Header);

		await user.click(screen.getByRole('button', { name: 'Change la langue en anglais' }));

		await waitFor(() => expect(document.cookie).toContain('locale=en'));
	});
});
