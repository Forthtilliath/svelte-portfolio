<script>
	import '../app.pcss';
	import '../global.pcss';
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
</svelte:head>

<slot />
