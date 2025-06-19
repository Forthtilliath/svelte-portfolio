<script lang="ts">
	export let template: 'dev' | 'resto';
</script>

<div class="training">
	<h2 class="content-title">Formations professionnelles</h2>

	{#if template === 'dev'}
		<div class="content-date">2012 - 2013</div>
		<div class="content-infos">
			<h3 class="infos-title">Licence professionnelle</h3>
			<h4 class="infos-subtitle">Logiciels libres et propriétaires</h4>
			<p class="infos-location">Université d'Angers, Angers</p>
		</div>

		<div class="content-date">2005 - 2007</div>
		<div class="content-infos">
			<h3 class="infos-title">Brevet Technicien Supérieur</h3>
			<h4 class="infos-subtitle">Informatique de Gestion</h4>
			<p class="infos-location">Lycée Douanier Rousseau, Laval</p>
		</div>

		<!-- <div class="content-date">2005</div>
	<div class="content-infos">
		<h3 class="infos-title">Baccalauréat, Sciences et Technologie Tertiaire</h3>
		<h4 class="infos-subtitle">Informatique et Gestion</h4>
		<h5 class="infos-location">Lycée Douanier Rousseau, Laval</h5>
	</div> -->
	{:else if template === 'resto'}
		<div class="content-date">
			<span>2019</span>
			<span>(3 mois)</span>
		</div>
		<div class="content-infos">
			<h3 class="infos-title">Plongeur en Restauration</h3>
			<h4 class="infos-location">Groupe Barrière, La Baule</h4>
			<ul class="infos-description">
				<li>Assurer le nettoyage des matériels et locaux.</li>
				<li>
					Assurer le stockage et l'approvisionnement en vaisselle des différents points de vente.
				</li>
			</ul>
		</div>

		<div class="content-date">
			<span>2013</span>
			<span>(10 jours)</span>
		</div>
		<div class="content-infos">
			<h3 class="infos-title">Service Restauration</h3>
			<h4 class="infos-location">Les Choralies, Vaison-la-Romaine</h4>
			<ul class="infos-description">
				<li>Assurer la distribution du plat du jour.</li>
				<li>
					Assurer le stockage et l'approvisionnement en aliments des différents points de
					distribution.
				</li>
			</ul>
		</div>

		<div class="content-date">
			<span>2012</span>
			<span>(2 mois)</span>
		</div>
		<div class="content-infos">
			<h3 class="infos-title">Equipier Polyvalent de Restauration</h3>
			<h4 class="infos-location">Crèperie La Côte d'Amour, Le Croisic</h4>
			<ul class="infos-description">
				<li>Participer à la bonne mise en place de la salle.</li>
				<li>Accueillir et accompagner les clients à leur table.</li>
				<li>
					Ranger les différents éléments et/ou marchandises selon les principes d'organisation en
					vigueur.
				</li>
				<li>Prendre les commandes de plats et de boissons</li>
				<li>Servir les commandes de plats et de boissons</li>
				<li>Emporter les assiettes, verres et couverts sales en cuisine pour la plonge</li>
				<li>Présenter les additions et récupérer les paiements</li>
				<li>Assurer le nettoyage des matériels et locaux.</li>
			</ul>
		</div>

		<div class="content-date">
			<span>2007</span>
			<span>(10 jours)</span>
		</div>
		<div class="content-infos">
			<h3 class="infos-title">Service Restauration</h3>
			<h4 class="infos-location">Les Choralies, Vaison-la-Romaine</h4>
			<ul class="infos-description">
				<li>Assurer la distribution du plat du jour.</li>
				<li>
					Assurer le stockage et l'approvisionnement en aliments des différents points de
					distribution.
				</li>
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	.training {
		display: grid;
		grid-template-columns: var(--contentbar-width) 1fr;
		grid-template-rows: auto;
		gap: var(--training-spacing) 0;
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

		&:has(span) {
			display: flex;
			flex-direction: column;

			span:nth-child(2) {
				font-size: 0.8em;
			}
		}
	}

	.infos-title {
		font-size: 1.6em;
		color: var(--formation-title-color);
		padding-inline: 1rem;
		line-height: 1.2em;
	}

	.infos-subtitle {
		font-size: 1.4em;
		// color: color-mix(in hsl, var(--header-bg-color) 80%, transparent);
		color: var(--formation-subtitle-color);
		padding-inline: 1rem;
		line-height: 1.3rem;
	}

	.infos-location,
	.infos-description {
		font-size: 1.2em;
		padding-inline: 1rem;
		color: var(--formation-content-color);
		// margin-top: -0.2rem;
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
