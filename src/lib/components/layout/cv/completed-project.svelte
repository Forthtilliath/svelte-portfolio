<script lang="ts">
	import TrainingSection from './training-section.svelte';
	import { completedProjects } from './cv-training';
</script>

<!-- Ancienne piste de présentation par badges de techs, gardée pour référence :
<div class="infos-badges">
	<div class="badge">React</div>
	<div class="badge">TypeScript</div>
	<div class="badge">Sanity</div>
	<div class="badge">Tailwind</div>
</div>
-->
<TrainingSection heading="Projets réalisés" entries={completedProjects} />
