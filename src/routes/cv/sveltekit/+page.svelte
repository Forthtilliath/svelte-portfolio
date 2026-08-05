<script lang="ts">
	import AboutMe from '$lib/components/layout/cv/about-me.svelte';
	import BtnPrint from '$lib/components/layout/cv/btn-print.svelte';
	import CompletedProject from '$lib/components/layout/cv/completed-project.svelte';
	import CvLayout from '$lib/components/layout/cv/cv-layout.svelte';
	import Informations from '$lib/components/layout/cv/informations.svelte';
	import Interests from '$lib/components/layout/cv/interests.svelte';
	import Languages from '$lib/components/layout/cv/languages.svelte';
	import Personality from '$lib/components/layout/cv/personality.svelte';
	import Photo from '$lib/components/layout/cv/photo.svelte';
	import ProfessionalTraining from '$lib/components/layout/cv/professional-training.svelte';
	import SelfTaughtTraining from '$lib/components/layout/cv/self-taught-training.svelte';
	import Skills from '$lib/components/layout/cv/skills.svelte';
	import Socials from '$lib/components/layout/cv/socials.svelte';
	import { IS_BLACK_AND_WHITE_THEME } from '$lib/constants';

	const JOB = 'Développeur Sveltekit';
</script>

<svelte:head>
	<title>CV de Vincent LISITA - {JOB}</title>
	<meta name="description" content="CV de Vincent LISITA - {JOB}" />
	<meta
		name="keywords"
		content="cv, développeur, full-stack, front, back, javascript, typescript, svelte, sveltekit, méta-framework"
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "Person",
			"name": "Vincent LISITA",
			"jobTitle": "Développeur Sveltekit",
			"email": "vincent.lisita@gmail.com",
			"telephone": "+33660469119",
			"sameAs": ["https://linkedin.com/in/vincent-lisita", "https://github.com/Forthtilliath"]
		}
	</script>
</svelte:head>

<CvLayout template="sveltekit" dark={IS_BLACK_AND_WHITE_THEME} job={JOB}>
	{#snippet header()}
		<div class="header__left">
			<Photo />
			<h2 class="header-title">{JOB}</h2>
		</div>
		<div class="header-right">
			<AboutMe template="sveltekit" />
		</div>
	{/snippet}
	{#snippet main()}
		<ProfessionalTraining template="dev" />
		<SelfTaughtTraining />
		<CompletedProject />
	{/snippet}
	{#snippet sidebar()}
		<Informations />
		<Interests />
		<Skills template="dev" />
		<Personality />
		<Languages />
		<Socials />
	{/snippet}
</CvLayout>
<BtnPrint filename="sveltekit" />

<style lang="scss">
	:global(.sveltekit) {
		--color-1: oklch(78% 0.12 35);
		--color-2: oklch(68% 0.19 35);
		--color-3: oklch(58% 0.2 35);

		--name-color-1: var(--color-3);
		--name-color-2: var(--color-black);

		--header-bg-color: var(--color-3);
		--header-text-color: var(--color-white);
		--header-top: 100px;

		--sidebar-bg: var(--color-2);
		--sidebar-line-color: var(--color-3);
		--sidebar-spacing: 0.85rem;
		--sidebar-title-fontsize: 1.6em;

		--contentbar-bg: var(--color-1);
		--li-style-color: var(--color-3);

		--training-spacing: 0.75rem;
		--training-title-fontsize: 0.625rem;
		--formation-title-color: var(--color-3);
		--formation-subtitle-color: var(--color-2);
		--formation-content-color: var(--color-black);
		--experience-title-color: var(--color-2);
	}

	:global(.sveltekit.dark) {
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
