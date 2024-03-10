<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import Form, { contactFormSchema } from './Form.svelte';

	export let data: SuperForms.Data<typeof contactFormSchema>;
</script>

<Section className="flex items-center justify-center flex-col" id="contact">
	<SectionTitle>Contact</SectionTitle>

	<Form {data} />
</Section>
