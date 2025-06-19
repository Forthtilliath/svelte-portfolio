import { loadTranslations } from '$lib/translations';

export const load = async () => {
	const initialLocale = 'fr'; // get from cookie / url / fetch from server...
	await loadTranslations(initialLocale);

	return {};
};
