import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import BackToTop from './back-to-top.svelte';

const realMatchMedia = window.matchMedia;

function setScrollY(value: number) {
	Object.defineProperty(window, 'scrollY', { configurable: true, value });
	window.dispatchEvent(new Event('scroll'));
}

afterEach(() => {
	window.matchMedia = realMatchMedia;
	setScrollY(0);
});

describe('shared/back-to-top', () => {
	it('stays out of the DOM while the page is at the top', () => {
		render(BackToTop);

		expect(screen.queryByRole('button', { name: /retour en haut/i })).not.toBeInTheDocument();
	});

	it('reveals the rocket once the page is scrolled past the threshold', async () => {
		render(BackToTop, { props: { showAfter: 300 } });

		setScrollY(400);

		expect(await screen.findByRole('button', { name: /retour en haut/i })).toBeInTheDocument();
	});

	it('flies the page back to the top when clicked', async () => {
		const user = userEvent.setup();
		render(BackToTop, { props: { showAfter: 300 } });

		setScrollY(400);
		await user.click(await screen.findByRole('button', { name: /retour en haut/i }));

		expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
	});

	it('skips the launch animation when the user prefers reduced motion', async () => {
		window.matchMedia = vi
			.fn()
			.mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia;

		const user = userEvent.setup();
		render(BackToTop, { props: { showAfter: 300 } });

		setScrollY(400);
		await user.click(await screen.findByRole('button', { name: /retour en haut/i }));

		expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
	});
});
