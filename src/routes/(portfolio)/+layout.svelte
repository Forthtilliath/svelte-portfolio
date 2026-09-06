<script lang="ts">
	import '../../app.css';
	import { t, locale } from '$lib/translations';
	import { SITE_URL } from '$lib/site';
	import { Toaster } from '$lib/components/ui/sonner';

	const OG_IMAGE = `${SITE_URL}/og-image.png`;
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
	<meta name="creator" content={$t('meta.author')} />

	<meta name="darkreader-lock" />

	<meta property="og:title" content={$t('meta.title')} />
	<meta property="og:description" content={$t('meta.description')} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={$t('meta.title')} />
	<meta property="og:url" content="{SITE_URL}/" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={$locale === 'en' ? 'en_GB' : 'fr_FR'} />
	<meta property="og:locale:alternate" content={$locale === 'en' ? 'fr_FR' : 'en_GB'} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="vincent-lisita.vercel.app" />
	<meta property="twitter:title" content={$t('meta.title')} />
	<meta property="twitter:description" content={$t('meta.description')} />
	<meta property="twitter:image" content={OG_IMAGE} />
	<meta property="twitter:image:alt" content={$t('meta.title')} />
	<meta property="twitter:url" content="{SITE_URL}/" />
</svelte:head>

{@render children?.()}

<Toaster />
