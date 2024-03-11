<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import Form, { contactFormSchema } from './form.svelte';

	export let data: SuperForms.Data<typeof contactFormSchema>;
</script>

<Section className="flex items-center justify-center flex-col" id="contact">
	<SectionTitle>Contact</SectionTitle>

	<Form {data} />
</Section>
