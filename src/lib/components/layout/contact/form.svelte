<script module lang="ts">
	import { z } from 'zod';

	export const contactFormSchema = z.object({
		name: z
			.string()
			.min(3, 'Name must be at least 3 characters.')
			.max(50, 'Name must not be longer than 50 characters'),
		email: z.string({ error: 'Please select an email to contact you' }).email(),
		message: z.string({ error: 'Please enter a message' }).min(10)
	});
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import Field from './field.svelte';
	import { t } from '$lib/translations';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: SuperForms.Data<typeof contactFormSchema>;
	}

	let { data }: Props = $props();

	// superForm ne consomme `data` qu'à l'initialisation (valeur du load), pas de réactivité attendue
	// svelte-ignore state_referenced_locally
	const form = superForm(data, {
		validators: zod4Client(contactFormSchema),
		resetForm: true,
		onResult({ result }) {
			if (result.type === 'success') {
				toast.success($t('contact.success'));
			} else if (result.type === 'failure' && result.status !== 400) {
				toast.error(result.status === 429 ? $t('contact.rateLimited') : $t('contact.error'));
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" action="?/sendMessage" use:enhance class="w-100 max-w-full space-y-4">
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
		class="max-h-50"
	/>

	<Form.Button class="mt-4">{$t('contact.submit')}</Form.Button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
	}
</style>
