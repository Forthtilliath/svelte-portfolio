<script lang="ts">
	import { resolve } from '$app/paths';
	import CvTextLayout from '$lib/components/layout/cv/cv-text-layout.svelte';
	import {
		phone,
		email,
		emailHref,
		addressLines,
		aboutMe,
		skillsResto,
		knowhows,
		languages,
		interests
	} from '$lib/components/layout/cv/cv-content';
	import { professionalTrainingResto } from '$lib/components/layout/cv/cv-training';

	import '$lib/styles/cv/index.scss';
	const JOB = 'Serveur - Plongeur';
</script>

<svelte:head>
	<title>CV de Vincent LISITA - {JOB} (version texte)</title>
	<meta
		name="description"
		content="CV de Vincent LISITA - {JOB}, version texte pour candidature via ATS"
	/>
</svelte:head>

<CvTextLayout
	backHref={resolve('/cv/restauration')}
	job={JOB}
	{phone}
	{email}
	{emailHref}
	address={addressLines}
	aboutMe={aboutMe.resto}
	skills={skillsResto}
	professionalTraining={professionalTrainingResto}
	traitsHeading="Savoir-Faire"
	traits={knowhows}
	{languages}
	{interests}
/>
