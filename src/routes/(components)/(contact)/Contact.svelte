<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import Form, { type SuperValidatedContactFormSchema } from './Form.svelte';

	export let data: SuperValidatedContactFormSchema;
</script>

<Section className="flex items-center justify-center flex-col" id="contact">
	<SectionTitle>Contact</SectionTitle>

	<Form {data} />
</Section>
