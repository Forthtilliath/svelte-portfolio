<script lang="ts">
	import SidebarCard from './sidebar-card.svelte';
</script>

<SidebarCard aria-label="réseaux sociaux">
	<!-- Socials links -->
	<header class="card-title">
		<span>Réseaux Sociaux</span>
	</header>
	<ul class="card-content card-socials" role="list">
		<li class="card-social">
			<a href="https://vincent-lisita.vercel.app" target="_blank" rel="noopener noreferrer">
				<img src="/qrcode_pf.png" alt="qrcode portfolio" />
				<span>Portfolio</span>
			</a>
		</li>
		<li class="card-social social-linkedin">
			<a
				href="https://www.linkedin.com/in/vincent-lisita/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/qrcode_ln.png" alt="qrcode linkedin" />
				<span>Linkedin</span>
			</a>
		</li>
		<li class="card-social">
			<a href="https://github.com/Forthtilliath" target="_blank" rel="noopener noreferrer">
				<img src="/qrcode_gh.png" alt="qrcode github" />
				<span>Github</span>
			</a>
		</li>
	</ul>
	<!-- URLs en clair : les QR codes et le texte des liens (href non extrait)
	     sont invisibles pour un robot de lecture de CV en texte brut. -->
	<ul class="card-content social-urls" role="list">
		<li>vincent-lisita.vercel.app</li>
		<li>linkedin.com/in/vincent-lisita</li>
		<li>github.com/Forthtilliath</li>
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
