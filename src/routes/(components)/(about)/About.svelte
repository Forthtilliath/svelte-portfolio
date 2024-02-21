<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import { t } from '$lib/translations';
</script>

<Section className="flex items-center justify-center flex-col" id="about">
	<SectionTitle className="text-app-blue">
		{$t('about.title')}
	</SectionTitle>

	
</Section>
