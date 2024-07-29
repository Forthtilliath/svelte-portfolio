<script>
	import '../app.pcss';
	import '../global.pcss';
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
	<meta name="creator" content={$t('meta.author')} />

	<meta name="darkreader-lock" />

	<meta property="og:title" content={$t('meta.title')} />
	<meta property="og:description" content={$t('meta.description')} />
	<meta property="og:image" content="https://vincent-lisita.vercel.app/me.jpg" />
	<meta property="og:url" content="https://vincent-lisita.vercel.app/" />
	<meta property="og:type" content="website">
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:locale:alternate" content="en_GB" />

	<meta property="twitter:card" content="summary" />
	<meta property="twitter:domain" content="vincent-lisita.vercel.app">
	<meta property="twitter:title" content={$t('meta.title')} />
	<meta property="twitter:description" content={$t('meta.description')} />
	<meta property="twitter:image" content="https://vincent-lisita.vercel.app/me.jpg" />
	<meta property="twitter:url" content="https://vincent-lisita.vercel.app/" />
</svelte:head>

<slot />
