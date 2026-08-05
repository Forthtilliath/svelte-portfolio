<script lang="ts">
	import { resolve } from '$app/paths';
	import AboutMe from '$lib/components/layout/cv/about-me.svelte';
	import BtnPrint from '$lib/components/layout/cv/btn-print.svelte';
	import BtnTextVersion from '$lib/components/layout/cv/btn-text-version.svelte';
	import CvLayout from '$lib/components/layout/cv/cv-layout.svelte';
	import Informations from '$lib/components/layout/cv/informations.svelte';
	import Interests from '$lib/components/layout/cv/interests.svelte';
	import Knowhows from '$lib/components/layout/cv/knowhows.svelte';
	import Languages from '$lib/components/layout/cv/languages.svelte';
	import Photo from '$lib/components/layout/cv/photo.svelte';
	import ProfessionalTraining from '$lib/components/layout/cv/professional-training.svelte';
	import Skills from '$lib/components/layout/cv/skills.svelte';
	import { IS_BLACK_AND_WHITE_THEME } from '$lib/constants';

	import '$lib/styles/cv/index.scss';
	const JOB = 'Serveur - Plongeur';
</script>

<svelte:head>
	<title>CV de Vincent LISITA - {JOB}</title>
	<meta name="description" content="CV de Vincent LISITA - {JOB}" />
	<meta name="keywords" content="cv, restauration, plongeur, serveur, saisonnier" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "Person",
			"name": "Vincent LISITA",
			"jobTitle": "Serveur - Plongeur",
			"email": "vincent.lisita@gmail.com",
			"telephone": "+33660469119",
			"sameAs": ["https://linkedin.com/in/vincent-lisita", "https://github.com/Forthtilliath"]
		}
	</script>
</svelte:head>

<CvLayout template="restauration" dark={IS_BLACK_AND_WHITE_THEME} job={JOB}>
	{#snippet header()}
		<div class="header__left">
			<Photo />
			<h2 class="header-title">Serveur Plongeur</h2>
		</div>
		<div class="header-right">
			<AboutMe template="resto" />
		</div>
	{/snippet}
	{#snippet main()}
		<ProfessionalTraining template="resto" />
	{/snippet}
	{#snippet sidebar()}
		<Informations />
		<Interests />
		<Skills template="resto" />
		<Knowhows />
		<Languages />
	{/snippet}
</CvLayout>
<BtnPrint filename="restauration" />
<BtnTextVersion href={resolve('/cv/restauration/texte')} />

<!-- Add button with link to pdf version -->
<style lang="scss">
	:global(.restauration) {
		--color-1: oklch(84% 0.08904 19);
		--color-2: oklch(74% 0.14498 21);
		--color-3: oklch(64% 0.24039 27);

		--name-color-1: var(--color-3);
		--name-color-2: var(--color-black);

		--header-bg-color: var(--color-3);
		--header-text-color: var(--color-white);
		--header-top: 130px;

		--sidebar-bg: var(--color-2);
		--sidebar-line-color: var(--color-3);
		--sidebar-spacing: 1rem;
		--sidebar-title-fontsize: 1.8em;

		--contentbar-bg: var(--color-1);
		--li-style-color: var(--color-3);

		--training-spacing: 1rem;
		--training-title-fontsize: 0.75rem;
		--formation-title-color: var(--color-3);
		--formation-subtitle-color: var(--color-2);
		--formation-content-color: var(--color-black);
		--experience-title-color: var(--color-2);
	}

	:global(.restauration.dark) {
		--color-1: oklch(100% 0 270);
		--color-2: oklch(94% 0 270);
		--color-3: oklch(90% 0 270);
		--name-color-1: var(--color-gray);
		--header-text-color: var(--color-black);
		--formation-title-color: var(--color-black);
	}

	.header-title {
		margin-top: -1rem;

		font-family: var(--font-header);
		font-size: 3.2em;
		text-align: center;

		color: var(--header-text-color);
		text-shadow: 0 0 3px #ffffff;
	}

	.header__left {
		width: var(--sidebar-width);
		height: 100%;
		margin-left: var(--sidebar-left);
	}

	.header-right {
		width: calc(100% - var(--sidebar-width) - var(--sidebar-left));
		margin-block: auto;
		padding-inline: 2rem;
	}
</style>
