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
	import Field from './Field.svelte';

	export let data: SuperForms.Data<typeof contactFormSchema>;

	const form = superForm(data, {
		validators: zodClient(contactFormSchema)
	});

	const { form: formData, enhance } = form;

	// TODO: Remove this in the future
	$formData = {
		name: 'Forth',
		email: 'forth@live.fr',
		message: 'A simple test to validate the form'
	};
</script>

<form method="POST" action="?/sendMessage" use:enhance class="w-[400px] max-w-full">
	<Field {form} name="name" label="Your name" value={$formData.name} />
	<Field {form} name="email" label="Your e-mail" value={$formData.email} />
	<Field
		{form}
		name="message"
		label="Your message"
		value={$formData.message}
		multiline
		class="text-green-500"
	/>

	<Form.Button class="mt-4">Send message</Form.Button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
	}
</style>
