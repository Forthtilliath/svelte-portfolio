import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
	const { locale } = await parent();
	await loadTranslations(locale);

	return {};
};
