<script lang="ts">
	import AboutMe from '$lib/components/layout/cv/about-me.svelte';
	import BtnPrint from '$lib/components/layout/cv/btn-print.svelte';
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

<section class="a4 restauration" class:dark={IS_BLACK_AND_WHITE_THEME}>
	<header class="header" aria-label="Poste recherché + À propos de moi">
		<div class="header__left">
			<Photo />
			<h2 class="header-title">Serveur Plongeur</h2>
		</div>
		<div class="header-right">
			<AboutMe template="resto" />
		</div>
	</header>
	<div class="content">
		<aside class="sidebar" aria-label="Informations personnelles">
			<Informations />
			<Interests />
			<Skills template="resto" />
			<Knowhows />
			<Languages />
		</aside>
		<main class="main" aria-label="Formations et Expériences Professionnelles">
			<h1 class="name"><span>Vincent</span> LISITA</h1>
			<div class="main__content">
				<ProfessionalTraining template="resto" />
			</div>
		</main>
	</div>
</section>
<BtnPrint filename="restauration" />

<!-- Add button with link to pdf version -->
<style lang="scss">
	.restauration {
		--color-1: oklch(84% 0.08904 19);
		--color-2: oklch(74% 0.14498 21);
		--color-3: oklch(64% 0.24039 27);

		--name-color-1: var(--color-3);
		--name-color-2: var(--color-black);

		--header-bg-color: var(--color-3);
		--header-text-color: var(--color-white);
		--header-height: 200px;
		--header-top: 130px;

		--sidebar-bg: var(--color-2);
		--sidebar-width: 230px;
		--sidebar-left: 50px;

		--sidebar-line-color: var(--color-3);
		--sidebar-spacing: 1rem;
		--sidebar-content-spacing: 0.25rem;
		--sidebar-title-fontsize: 1.8em;

		--photo-width: 190px;
		--socials-ratio: 1/1;

		--contentbar-bg: var(--color-1);
		--contentbar-width: 110px;

		--li-style-color: var(--color-3);

		--training-spacing: 1rem;
		--training-title-fontsize: 0.75rem;
		--formation-title-color: var(--color-3);
		--formation-subtitle-color: var(--color-2);
		--formation-content-color: var(--color-black);
		--experience-title-color: var(--color-2);

		&.dark {
			--color-1: oklch(100% 0 270);
			--color-2: oklch(94% 0 270);
			--color-3: oklch(90% 0 270);
			--name-color-1: var(--color-gray);
			--header-text-color: var(--color-black);
			--formation-title-color: var(--color-black);
		}
	}

	.a4 {
		width: 210mm;
		height: 297mm;
		background: white;

		position: relative;
	}

	@media print {
		:global(body) {
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
			page-break-after: always;
		}
	}

	.header {
		position: absolute;
		width: 100%;
		height: var(--header-height);
		background: var(--header-bg-color);
		color: var(--header-text-color);
		top: var(--header-top);

		display: flex;

		z-index: 10;
	}

	.header__left {
		width: var(--sidebar-width);
		height: 100%;
		margin-left: var(--sidebar-left);
	}

	.header-title {
		margin-top: -1rem;

		font-family: var(--font-header);
		font-size: 3.2em;
		text-align: center;

		color: var(--header-text-color);
		text-shadow: 0 0 3px #ffffff;
	}

	.header-right {
		width: calc(100% - var(--sidebar-width) - var(--sidebar-left));
		margin-block: auto;
		padding-inline: 2rem;
	}

	.sidebar {
		background: var(--sidebar-bg);
		height: 100%;
		width: var(--sidebar-width);
		margin-left: var(--sidebar-left);
		/* Jump under header */
		padding-top: calc(var(--header-top) + var(--header-height));
	}

	.content {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.main {
		width: calc(100% - var(--sidebar-width) - var(--sidebar-left));
		z-index: 1; // Pour mettre le background gris derrière
	}

	.name {
		--height: 90px;
		height: var(--height);
		margin-top: calc(var(--header-top) - var(--height));
		font-size: 6.4em;
		text-align: center;
		color: var(--name-color-2);

		span {
			color: var(--name-color-1);
		}
	}

	.main__content {
		/* Jump under header */
		margin-top: var(--header-height);
		height: calc(100% - var(--header-top) - var(--header-height));

		position: relative;
		font-size: var(--training-title-fontsize);

		&::after {
			content: '';
			width: var(--contentbar-width);
			height: 100%;
			background-color: var(--contentbar-bg);

			position: absolute;
			z-index: -1;
			top: 0;
		}
	}
</style>
