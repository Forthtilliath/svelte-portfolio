<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
	import { socials } from './cv-content';
</script>

<SidebarCard aria-label="réseaux sociaux">
	<header class="card-title">
		<span>Réseaux Sociaux</span>
	</header>
	<ul class="card-content card-socials" role="list">
		{#each socials as social (social.key)}
			<li class="card-social" class:social-linkedin={social.key === 'linkedin'}>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not a SvelteKit route -->
				<a href={social.href} target="_blank" rel="noopener noreferrer">
					<img src={social.qrSrc} alt={social.qrAlt} />
					<span>{social.label}</span>
				</a>
			</li>
		{/each}
	</ul>
	<!-- URLs en clair : les QR codes et le texte des liens (href non extrait)
	     sont invisibles pour un robot de lecture de CV en texte brut. -->
	<ul class="card-content social-urls" role="list">
		{#each socials as social (social.key)}
			<li>{social.displayUrl}</li>
		{/each}
	</ul>
</SidebarCard>

<style lang="scss">
	.card-socials {
		display: flex;
		justify-content: center;
		gap: 1rem;
		padding-inline: 15px;
	}

	li.card-social {
		padding-inline: 0;
		background-color: black;
		color: white;
		padding: 3px;
		margin-inline: 0;
		border-radius: 5px;

		&.social-linkedin {
			background-color: #0077b5;
		}

		img {
			width: 50px;
			aspect-ratio: var(--socials-ratio);
			border-radius: 3px;
		}
		span {
			text-align: center;
			width: 100%;
			display: block;
		}
	}

	.social-urls {
		padding-top: 0.05rem;
		li {
			font-size: 0.55em;
			line-height: 1em;
			word-break: break-all;
			/* Présent pour les robots de lecture de CV (texte brut), invisible
			   pour un humain : même couleur que le fond, non sélectionnable. */
			color: var(--sidebar-bg);
			user-select: none;
		}
	}
</style>
