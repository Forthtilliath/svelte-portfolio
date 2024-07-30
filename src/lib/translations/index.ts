import i18n, { type Parser } from 'sveltekit-i18n';
import kleur from 'kleur';
import lang from './lang.json';

type TradArguments = {
	lang: string;
};

// https://github.com/sveltekit-i18n/lib/tree/master/examples/one-page/src
export const config: import('sveltekit-i18n').Config<TradArguments> = {
	translations: {
		en: { lang },
		fr: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: '',
			loader: async () => (await import('./en/content.json')).default
		},
		{
			locale: 'fr',
			key: '',
			loader: async () => (await import('./fr/content.json')).default
		}
	]
};

type Params = {
	name: string;
};

export const { t, loading, locales, locale, loadTranslations } = new i18n<Parser.Params<Params>>(
	config
);

export type Language = 'en' | 'fr';

loading.subscribe(
	($loading) =>
		$loading &&
		console.log(kleur.yellow().bold('[i18n] ') + 'Loading translations for the main instance...')
);
