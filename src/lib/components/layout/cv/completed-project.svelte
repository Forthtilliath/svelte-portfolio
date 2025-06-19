<script lang="ts">
	export let restauration: boolean = false;
</script>

<div class="training" class:restauration>
	<h2 class="content-title">Projets réalisés</h2>

	<div class="content-date">2023</div>
	<div class="content-infos">
		<h3 class="infos-title">Application mobile - 7 Wonders: Assistant</h3>
		<!-- <div class="infos-badges">
                  <div class="badge">React</div>
                  <div class="badge">TypeScript</div>
                  <div class="badge">Sanity</div>
                  <div class="badge">Tailwind</div>
                  <div class="badge">React</div>
                </div> -->
		<ul class="infos-description" role="list">
			<li>
				<b>Technologies principales :</b> React, TypeScript, Tailwind CSS.
			</li>

			<li>
				<b>Gestion de l'état :</b> Utilisation de Zustand pour la gestion de l'état de l'application.
			</li>

			<li>
				<b>Internationalisation :</b> Mise en œuvre de l'internationalisation dans une application à
				l'aide de i18next et react-i18next.
			</li>

			<li>
				<b>Tests :</b> Mise en place d'une suite de tests pour assurer la qualité de l'application à
				l'aide de bibliothèques de tests comme Jest et Testing Library.
			</li>

			<li>
				<b>Formatage du code :</b> Utilisation de Prettier et ESLint pour assurer la cohérence et la
				qualité du code.
			</li>

			<li>
				<b>Travail en équipe et gestion de projet :</b> Expérience de travail en équipe et utilisation
				de bonnes pratiques de gestion de projet, comme illustré par l'utilisation de conventions de
				commit spécifiques.
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.training {
		display: grid;
		grid-template-columns: var(--contentbar-width) 1fr;
		grid-template-rows: auto;
		gap: 0.75rem 0;
	}

	.content-title {
		grid-column: span 2;

		font-family: var(--font-header);
		font-size: 1.6em;
		font-weight: 600;
		text-transform: uppercase;
		margin-top: 0.75rem;
		padding: 0.25rem 2rem;
		background: var(--sidebar-bg);
		background: var(--contentbar-bg);
	}

	.content-date {
		font-family: var(--font-header);
		font-size: 1.2em;
		font-weight: 600;
		text-align: end;
		padding-inline: 0.75rem;
	}

	.infos-title {
		font-size: 1.6em;
		color: var(--formation-title-color);
		padding-inline: 1rem;
		line-height: 1.2em;
	}

	.infos-description {
		font-size: 1.2em;
		padding-inline: 1rem;
		color: var(--formation-content-color);
		// margin-top: -0.2rem;

		:where(.restauration) & > li {
			margin-top: 0.15rem;
		}
	}

	ul.infos-description {
		padding-top: 0.5rem;
		li {
			position: relative;
			line-height: 1.5em;
			margin-left: 1rem;
			// margin-bottom: 0.5rem;
		}
	}
</style>
