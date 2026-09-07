import '@testing-library/jest-dom/vitest';
import { beforeAll, vi } from 'vitest';
import { loadTranslations } from '$lib/translations';

// `$app/environment` is resolved by the SvelteKit plugin, but its `browser`
// flag is `false` under Vitest. Component code guards DOM-only work behind it
// (cookies, `document.documentElement`), so force it on for the jsdom suite.
vi.mock('$app/environment', () => ({
	browser: true,
	building: false,
	dev: true,
	version: 'test'
}));

// jsdom ships none of these; bits-ui / Svelte transitions reach for them.
if (typeof window.matchMedia !== 'function') {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: (query: string) => ({
			matches: false,
			media: query,
			onchange: null,
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			addListener: vi.fn(),
			removeListener: vi.fn(),
			dispatchEvent: vi.fn()
		})
	});
}

class ObserverStub {
	observe = vi.fn();
	unobserve = vi.fn();
	disconnect = vi.fn();
	takeRecords = vi.fn(() => []);
}
window.ResizeObserver ??= ObserverStub as unknown as typeof ResizeObserver;
window.IntersectionObserver ??= ObserverStub as unknown as typeof IntersectionObserver;

if (!Element.prototype.animate) {
	Element.prototype.animate = vi.fn(
		() => ({ cancel: vi.fn(), finished: Promise.resolve(), onfinish: null }) as unknown as Animation
	);
}
Element.prototype.scrollIntoView ??= vi.fn();
// jsdom's `window.scrollTo` only logs a "Not implemented" error; stub it out.
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
window.HTMLElement.prototype.hasPointerCapture ??= vi.fn(() => false);
window.HTMLElement.prototype.setPointerCapture ??= vi.fn();
window.HTMLElement.prototype.releasePointerCapture ??= vi.fn();

// Real translation dictionaries so components render human text, not i18n keys.
beforeAll(async () => {
	await loadTranslations('fr');
});
