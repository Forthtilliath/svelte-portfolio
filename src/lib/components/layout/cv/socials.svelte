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
</style>
