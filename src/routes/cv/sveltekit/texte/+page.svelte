<script lang="ts">
	import { resolve } from '$app/paths';
	import CvTextLayout from '$lib/components/layout/cv/cv-text-layout.svelte';
	import {
		phone,
		email,
		emailHref,
		addressLines,
		aboutMe,
		skillsDev,
		personality,
		languages,
		interests,
		socials
	} from '$lib/components/layout/cv/cv-content';
	import {
		professionalTrainingDev,
		selfTaughtTraining,
		completedProjects
	} from '$lib/components/layout/cv/cv-training';

	const JOB = 'Développeur Sveltekit';
</script>

<svelte:head>
	<title>CV de Vincent LISITA - {JOB} (version texte)</title>
	<meta
		name="description"
		content="CV de Vincent LISITA - {JOB}, version texte pour candidature via ATS"
	/>
</svelte:head>

<CvTextLayout
	backHref={resolve('/cv/sveltekit')}
	job={JOB}
	{phone}
	{email}
	{emailHref}
	address={addressLines}
	aboutMe={aboutMe.sveltekit}
	skills={skillsDev}
	professionalTraining={professionalTrainingDev}
	{selfTaughtTraining}
	{completedProjects}
	traitsHeading="Personnalité"
	traits={personality}
	{languages}
	{interests}
	{socials}
/>
