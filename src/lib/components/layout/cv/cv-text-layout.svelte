<script lang="ts">
	import type { TrainingEntryData } from './cv-training';
	import type { InterestItem, LanguageItem, SocialItem } from './cv-content';

	interface Props {
		/** Lien vers la version visuelle du même CV (masqué à l'impression). */
		backHref: string;
		job: string;
		phone: string;
		email: string;
		emailHref: string;
		address: string[];
		aboutMe: string;
		skills: string[];
		professionalTraining: TrainingEntryData[];
		selfTaughtTraining?: TrainingEntryData[];
		completedProjects?: TrainingEntryData[];
		traitsHeading: string;
		traits: string[];
		languages: LanguageItem[];
		interests: InterestItem[];
		socials?: SocialItem[];
	}

	let {
		backHref,
		job,
		phone,
		email,
		emailHref,
		address,
		aboutMe,
		skills,
		professionalTraining,
		selfTaughtTraining,
		completedProjects,
		traitsHeading,
		traits,
		languages,
		interests,
		socials
	}: Props = $props();
</script>

{#snippet entries(list: TrainingEntryData[])}
	{#each list as entry (entry.title)}
		<div class="entry">
			<p class="entry-date">{entry.date}{entry.dateNote ? ` ${entry.dateNote}` : ''}</p>
			<h3>{entry.title}</h3>
			{#if entry.subtitle}
				<p class="entry-subtitle">{entry.subtitle}</p>
			{/if}
			{#if entry.location}
				<p class="entry-location">{entry.location}</p>
			{/if}
			{#if typeof entry.description === 'string'}
				<p>{entry.description}</p>
			{:else if entry.description}
				<ul>
					{#each entry.description as item, i (i)}
						{@const { label, text } =
							typeof item === 'string' ? { label: undefined, text: item } : item}
						<li>
							{#if label}<b>{label} :</b>&nbsp;{/if}{text}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
{/snippet}

<!--
	Volontairement à une seule colonne, sans position:absolute ni z-index nulle
	part : Chromium regroupe le texte d'un PDF imprimé par contexte
	d'empilement CSS, pas par ordre DOM. Le CV "visuel" (superposition
	header/sidebar) reste donc mal lu par un ATS strict même avec un bon ordre
	DOM — cette page sert de version texte, complémentaire, pour ces
	candidatures-là.
-->
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href is already built with resolve() by the caller -->
<a class="back-link" href={backHref} data-sveltekit-preload-data="off">← Voir la version visuelle</a
>
<article class="cv-text">
	<h1>Vincent LISITA</h1>
	<p class="job">{job}</p>
	<p class="contact">
		{phone} ·
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- mailto: link, not a SvelteKit route -->
		<a href={emailHref}>{email}</a>
		· {address.join(', ')}
	</p>

	<section>
		<h2>À propos de moi</h2>
		<p>{aboutMe}</p>
	</section>

	<section>
		<h2>Compétences</h2>
		<ul>
			{#each skills as skill (skill)}
				<li>{skill}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Formations professionnelles</h2>
		{@render entries(professionalTraining)}
	</section>

	{#if selfTaughtTraining}
		<section>
			<h2>Formations autodidactes</h2>
			{@render entries(selfTaughtTraining)}
		</section>
	{/if}

	{#if completedProjects}
		<section>
			<h2>Projets réalisés</h2>
			{@render entries(completedProjects)}
		</section>
	{/if}

	<section>
		<h2>{traitsHeading}</h2>
		<ul>
			{#each traits as trait (trait)}
				<li>{trait}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Langues</h2>
		<ul>
			{#each languages as lang (lang.name)}
				<li>{lang.name} - {lang.level}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Centres d'intérêt</h2>
		<ul>
			{#each interests as item (item.text)}
				<li>{item.emoji} {item.text}</li>
			{/each}
		</ul>
	</section>

	{#if socials}
		<section>
			<h2>Réseaux sociaux</h2>
			<ul>
				{#each socials as social (social.key)}
					<li>
						{social.label} :
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not a SvelteKit route -->
						<a href={social.href}>{social.displayUrl}</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>

<style lang="scss">
	/* Le reset CV partagé fixe `body` à height:297mm + centrage flexbox,
	   correct pour le CV visuel qui tient pile sur une page A4. Cette page
	   peut dépasser une page : sans ce correctif, le centrage pousserait le
	   début du contenu au-dessus de la zone visible/imprimable. */
	:global(body) {
		display: block !important;
		height: auto !important;
		min-height: 100vh;
		place-items: unset !important;
	}

	.cv-text {
		width: 210mm;
		min-height: 297mm;
		margin-inline: auto;
		padding: 15mm;
		box-sizing: border-box;

		background: white;
		color: #1a1a1a;
		font-family: var(--font-body);
		line-height: 1.5;
	}

	.back-link {
		display: block;
		width: 210mm;
		margin-inline: auto;
		margin-top: 8rem; // clears the floating cv nav menu (hidden in print anyway)
		padding: 1rem 15mm 0;
		box-sizing: border-box;
		color: var(--color-white);

		@media print {
			display: none;
		}
	}

	h1 {
		font-size: 2rem;
		margin: 0 0 0.15em;
	}

	.job {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5em;
	}

	.contact {
		margin: 0 0 2em;
		color: #444;
	}

	section {
		margin-bottom: 1.75em;
	}

	h2 {
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		border-bottom: 1px solid #ccc;
		padding-bottom: 0.3em;
		margin: 0 0 0.6em;
	}

	h3 {
		font-size: 1rem;
		margin: 0.8em 0 0.15em;
	}

	.entry {
		margin-bottom: 0.9em;
	}

	.entry-date {
		font-weight: 600;
		margin: 0;
	}

	.entry-subtitle,
	.entry-location {
		margin: 0 0 0.3em;
		color: #333;
	}

	p {
		margin: 0 0 0.5em;
	}

	ul {
		margin: 0;
		padding-left: 1.25em;
	}

	li {
		margin-bottom: 0.2em;
	}

	@media print {
		.cv-text {
			width: auto;
			min-height: 0;
		}
	}
</style>
