<script context="module" lang="ts">
	import { z } from 'zod';
	import { type Infer, type SuperValidated } from 'sveltekit-superforms';

	export const contactFormSchema = z.object({
		name: z
			.string()
			.min(3, 'Name must be at least 3 characters.')
			.max(50, 'Name must not be longer than 50 characters'),
		email: z.string({ required_error: 'Please select an email to contact you' }).email(),
		message: z.string({ required_error: 'Please enter a message' }).min(10)
	});
	export type ContactFormSchema = typeof contactFormSchema;
	export type SuperValidatedContactFormSchema = SuperValidated<Infer<ContactFormSchema>>;
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import SuperDebug from 'sveltekit-superforms';
	import { browser } from '$app/environment';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';

	export let data: SuperValidatedContactFormSchema;

	const form = superForm(data, {
		validators: zodClient(contactFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" action="?/sendEmail" use:enhance class="w-[400px] max-w-full">
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input placeholder="Your name" {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>E-mail</Form.Label>
			<Input placeholder="Your e-mail" {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="message">
		<Form.Control let:attrs>
			<Form.Label>Message</Form.Label>
			<Textarea {...attrs} bind:value={$formData.message} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button>Send message</Form.Button>
</form>

{#if browser}
	<SuperDebug data={$formData} label="My form data" />
{/if}

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
	}
</style>
