<article class="sidebar-card" aria-label="savoir-faire">
	<header class="card-title">
		<span>Savoir-Faire</span>
	</header>
	<ul class="card-content" role="list">
		<li>Réaliser la plonge</li>
		<li>Essuyer et ranger la vaisselle</li>
		<li>Entretenir un poste de travail</li>
		<li>Entretenir des équipements</li>
		<li>Dresser les tables</li>
		<li>Réaliser la mise en place</li>
		<li>Accueillir le client et l'installer</li>
		<li>Traiter une commande</li>
		<li>Réaliser un service en salle</li>
		<li>Encaisser le montant d'une vente</li>
		<li>Débarrasser une table</li>
		<li>Nettoyer une salle de réception</li>
	</ul>
</article>

<style lang="scss">
	.card-title {
		// margin-top: 1.5rem;
		margin-left: 1rem;

		text-transform: uppercase;
		text-align: right;
		font-family: var(--font-header);
		font-size: var(--sidebar-title-fontsize);
		font-weight: 600;

		// background
		position: relative;
		z-index: 1;

		&::before {
			position: absolute;
			content: '';
			border-top: 5px solid var(--sidebar-line-color);
			top: 40%;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			z-index: -1;
		}

		span {
			/* to hide the lines from behind the text, you have to set the background color the same as the container */
			background: var(--sidebar-bg);
			padding-inline: 1rem;
		}
	}

	.card-content {
		padding-top: var(--sidebar-content-spacing);
		li {
			text-align: end;
			font-size: 1.2em;
			margin-inline: 1rem;
			line-height: 1.5em;
		}
	}
</style>
