<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import { t } from '$lib/translations';
</script>

<Section className="flex items-center justify-center flex-col gap-6" id="about">
	<SectionTitle className="mb-4">
		{$t('about.title')}
	</SectionTitle>

	<p class="leading-7 text-xl indent-8">
		{$t('about.p1')}
	</p>

	<p class="leading-7 text-xl indent-8">
		{$t('about.p2')}
	</p>
</Section>