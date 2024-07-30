<script context="module" lang="ts">
	import { z } from 'zod';

	export const contactFormSchema = z.object({
		name: z
			.string()
			.min(3, 'Name must be at least 3 characters.')
			.max(50, 'Name must not be longer than 50 characters'),
		email: z.string({ required_error: 'Please select an email to contact you' }).email(),
		message: z.string({ required_error: 'Please enter a message' }).min(10)
	});
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Field from './field.svelte';
	import { t } from '$lib/translations';

	export let data: SuperForms.Data<typeof contactFormSchema>;

	const form = superForm(data, {
		validators: zodClient(contactFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" action="?/sendMessage" use:enhance class="w-[400px] max-w-full">
	<Field
		{form}
		name="name"
		label={$t('contact.name')}
		bind:value={$formData.name}
		autocomplete="name"
	/>
	<Field
		{form}
		name="email"
		label={$t('contact.email')}
		bind:value={$formData.email}
		autocomplete="email"
	/>
	<Field
		{form}
		name="message"
		label={$t('contact.message')}
		bind:value={$formData.message}
		multiline
		class="max-h-[200px]"
	/>

	<Form.Button class="mt-4">{$t('contact.submit')}</Form.Button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
	}
</style>
