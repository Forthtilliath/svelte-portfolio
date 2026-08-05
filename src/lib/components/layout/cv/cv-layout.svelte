<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		/** Nom de thème : classe portant les variables couleur/spacing (définies
		 *  via :global(.{template}) dans le style de chaque page CV). */
		template: string;
		dark?: boolean;
		/** Utilisé pour l'aria-label de la zone principale. */
		job: string;
		header: Snippet;
		sidebar: Snippet;
		main: Snippet;
	}

	let { template, dark = false, job, header, sidebar, main }: Props = $props();
</script>

<section class="a4 {template}" class:dark>
	<div class="content">
		<main class="main" aria-label="Vincent Lisita, {job}">
			<h1 class="name"><span>Vincent</span> LISITA</h1>
			<header class="header" aria-label="Poste recherché + À propos de moi">
				{@render header()}
			</header>
			<div class="main__content">
				{@render main()}
			</div>
		</main>
		<aside class="sidebar" aria-label="Informations personnelles">
			{@render sidebar()}
		</aside>
	</div>
</section>

<style lang="scss">
	.a4 {
		width: 210mm;
		height: 297mm;
		background: white;

		position: relative;

		/* Defaults shared by every theme (fullstack/react/sveltekit/restauration).
		   Each page's :global(.<template>) rule only needs to override colors
		   and the handful of values that actually differ (see restauration). */
		--header-height: 200px;
		--sidebar-width: 230px;
		--sidebar-left: 50px;
		--sidebar-content-spacing: 0.25rem;
		--photo-width: 190px;
		--socials-ratio: 1/1;
		--contentbar-width: 110px;
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
		/* Explicit so it doesn't depend on where the header sits in the DOM
		   (nested inside main, after the name heading, for reading-order reasons). */
		left: 0;

		display: flex;

		z-index: 10;
	}

	.sidebar {
		background: var(--sidebar-bg);
		height: 100%;
		width: var(--sidebar-width);
		margin-left: var(--sidebar-left);
		/* Jump under header */
		padding-top: calc(var(--header-top) + var(--header-height));
		/* Visually first (left) even though it comes after <main> in the
		   markup, so robots/lecteurs d'écran lisent nom + expérience avant
		   la colonne secondaire (contact, compétences, etc.). */
		order: 1;
	}

	.content {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.main {
		width: calc(100% - var(--sidebar-width) - var(--sidebar-left));
		z-index: 1; // Pour mettre le background gris derrière
		order: 2;
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
