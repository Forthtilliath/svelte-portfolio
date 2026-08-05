<script lang="ts">
	interface Props {
		template: 'dev' | 'resto';
	}

	let { template }: Props = $props();
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
			<span>Déc. 2025</span>
			<span>(en cours)</span>
		</div>
		<div class="content-infos">
			<h3 class="infos-title">Employé Polyvalent de Restauration</h3>
			<h4 class="infos-location">Sodexo Clinique de l'Anjou, Angers</h4>
			<ul class="infos-description">
				<li>Effectuer la plonge vaisselle et batterie pendant le service.</li>
				<li>
					Assurer la préparation et le montage des plateaux repas des patients selon les régimes
					alimentaires prescrits, pour la distribution en chambre.
				</li>
				<li>Préparer et approvisionner les dotations alimentaires des services et des chambres.</li>
				<li>Assurer la production des préparations froides.</li>
				<li>Assurer le service en self-service pour le personnel.</li>
				<li>Veiller à la traçabilité des produits et au respect des normes d'hygiène alimentaire (HACCP).</li>
				<li>Effectuer l'entretien et le nettoyage des locaux.</li>
			</ul>
		</div>

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
			<span>2013 et 2007</span>
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
				<li>Accueillir les clients et assurer le service en salle (prise de commande, service, encaissement).</li>
				<li>Participer à la mise en place et au rangement de la salle.</li>
				<li>Assurer le nettoyage des matériels et des locaux.</li>
			</ul>
		</div>
	{/if}
</div>
