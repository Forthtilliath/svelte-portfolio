<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
</script>

<SidebarCard aria-label="informations">
	<header class="card-title">
		<span>Informations</span>
	</header>
	<ul class="card-content" role="list">
		<li>06.60.46.91.19</li>
		<li>
			<a href="mailto:vincent.lisita+cv@gmail.com"> vincent.lisita@gmail.com </a>
		</li>
		<li>61 rue d'Orgemont</li>
		<li>49000 Angers</li>
	</ul>
</SidebarCard>

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
