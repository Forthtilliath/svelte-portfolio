<script lang="ts">
	export let template: 'react' | 'sveltekit' | 'fullstack' | 'resto';
</script>

<h3 class="aboutme-title">À propos de moi</h3>

{#if template === 'fullstack'}
	<p class="aboutme-content" aria-label="à propos de moi">
		Après plusieurs années en tant qu'aidant familial, j'ai découvert ma véritable passion pour le
		développement web. Autodidacte, j'ai consacré les trois dernières années à maîtriser React et à
		explorer divers frameworks et méta-frameworks, tel que Sveltekit. Mon désir incessant
		d'apprendre et de m'améliorer m'a conduit à développer des compétences solides en développement
		front-end.
	</p>
{:else if template === 'react'}
	<p class="aboutme-content react" aria-label="à propos de moi">
		Après plusieurs années en tant qu'aidant familial, j'ai découvert ma véritable passion pour le
		développement web. Autodidacte, j'ai consacré les trois dernières années à maîtriser React et à
		explorer divers frameworks, tout en développant des compétences en TypeScript, SASS, et Tailwind
		CSS. Mon désir incessant d'apprendre et de m'améliorer m'a conduit à acquérir des compétences
		solides en développement front-end.
	</p>
{:else if template === 'sveltekit'}
	<p class="aboutme-content sveltekit" aria-label="à propos de moi">
		Après plusieurs années en tant qu'aidant familial, j'ai découvert ma véritable passion pour le
		développement web. Autodidacte, j'ai consacré les deux dernières années à maîtriser Svelte et
		SvelteKit, tout en explorant d'autres frameworks comme React. Mon désir incessant d'apprendre
		m'a permis de développer des compétences solides en CSS avec SASS et Tailwind CSS.
	</p>
{:else if template === 'resto'}
	<p class="aboutme-content resto" aria-label="à propos de moi">
		À la recherche d'un poste saisonnier en tant que plongeur, je suis également ouvert aux
		opportunités de serveur. Mon expérience en tant qu'aidant familial m'a permis de développer des
		compétences en communication et en gestion du temps. Motivé et dynamique, je suis prêt à
		contribuer efficacement à l'équipe.
	</p>
{/if}

<style lang="scss">
	.aboutme-title {
		text-transform: uppercase;
		text-decoration: underline;
		text-align: center;
		font-family: var(--font-header);
		font-size: 2.4em;
	}

	.aboutme-content {
		font-size: 1.6em;
		text-align: center;

		&.react {
			line-height: 1.4em;
		}
		&.sveltekit {
			line-height: 1.4em;
		}
		&.resto {
			margin-top: 0.25rem;
			line-height: 1.6em;
		}
	}
</style>
