<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import Form, { contactFormSchema } from './form.svelte';
	import { t } from '$lib/translations';

	export let data: SuperForms.Data<typeof contactFormSchema>;
</script>

<Section className="flex items-center justify-center flex-col" id="contact">
	<SectionTitle>{$t('contact.title')}</SectionTitle>

	<Form {data} />
</Section>
