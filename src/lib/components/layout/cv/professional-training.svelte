<script lang="ts">
	import TrainingSection from './training-section.svelte';
	import { professionalTrainingDev, professionalTrainingResto } from './cv-training';

	interface Props {
		template: 'dev' | 'resto';
	}

	let { template }: Props = $props();

	let entries = $derived(template === 'dev' ? professionalTrainingDev : professionalTrainingResto);
</script>

<TrainingSection heading="Formations professionnelles" {entries} />
