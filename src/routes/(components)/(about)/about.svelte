<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import { t } from '$lib/translations';
</script>

<Section className="flex items-center justify-center flex-col gap-6" id="about">
	<SectionTitle>
		{$t('about.title')}
	</SectionTitle>

	<p class="leading-7 text-xl indent-8">
		{$t('about.p1')}
	</p>

	<p class="leading-7 text-xl indent-8">
		{$t('about.p2')}
	</p>
</Section>