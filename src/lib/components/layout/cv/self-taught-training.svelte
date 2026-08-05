<script lang="ts">
	import TrainingSection from './training-section.svelte';
	import { selfTaughtTraining } from './cv-training';
</script>

<TrainingSection heading="Formations Autodidactes" entries={selfTaughtTraining} />
