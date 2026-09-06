import type { Handle } from '@sveltejs/kit';
import type { Language } from '$lib/translations';

const SUPPORTED_LOCALES: Language[] = ['fr', 'en'];
const DEFAULT_LOCALE: Language = 'fr';

const isSupported = (value: string | undefined): value is Language =>
	!!value && SUPPORTED_LOCALES.includes(value as Language);

const negotiateLocale = (cookieLocale: string | undefined, acceptLanguage: string | null) => {
	if (isSupported(cookieLocale)) return cookieLocale;

	const fromHeader = (acceptLanguage ?? '')
		.split(',')
		.map((part) => part.trim().split(';')[0].toLowerCase().split('-')[0])
		.find(isSupported);

	return fromHeader ?? DEFAULT_LOCALE;
};

export const handle: Handle = async ({ event, resolve }) => {
	const locale = negotiateLocale(
		event.cookies.get('locale'),
		event.request.headers.get('accept-language')
	);
	event.locals.locale = locale;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
};
