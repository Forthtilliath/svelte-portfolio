<div class="training">
	<h2 class="content-title">Formations Autodidactes</h2>

	<div class="content-date">2022</div>
	<div class="content-infos">
		<h3 class="infos-title">JavaScript, TypeScript, React, MERN Stack</h3>
		<p class="infos-description">
			Maîtrise de JavaScript, TypeScript, et spécialisation React. Initiation au développement
			full-stack avec MongoDB, Express.js, et Node.js.
		</p>
	</div>

	<div class="content-date">2023</div>
	<div class="content-infos">
		<h3 class="infos-title">SolidJS, Next.js & Tailwind CSS</h3>
		<p class="infos-description">
			Découverte d'un framework lié à React, SolidJS, ainsi que d'un meta-framework lié à React,
			Next.js, enrichie par l'intégration de Tailwind CSS pour faciliter le travail en équipe grâce
			à son système de classes utilitaires.
		</p>
	</div>

	<div class="content-date">2024</div>
	<div class="content-infos">
		<h3 class="infos-title">SvelteKit</h3>
		<p class="infos-description">
			Exploration de SvelteKit pour développer des applications web plus réactives.
		</p>
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
	}
</style>
