import i18n from 'sveltekit-i18n';
import lang from './lang.json';

// https://github.com/sveltekit-i18n/lib/tree/master/examples/one-page/src
export const config: import('sveltekit-i18n').Config = {
  translations: {
    en: { lang },
    fr: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (await import('./en/content.json')).default,
    },
    {
      locale: 'fr',
      key: '',
      loader: async () => (await import('./fr/content.json')).default,
    },
  ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));