<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import type { contactFormSchema } from './form.svelte';

	type Props = {
		form: SuperForms.Form<typeof contactFormSchema>;
		name: SuperForms.Keys<typeof contactFormSchema>;
		label: string;
		placeholder?: string;
		value: string;
		multiline?: boolean;
		[key: string]: any;
	};

	let {
		form,
		name,
		label,
		placeholder = '',
		value = $bindable(),
		multiline = false,
		...rest
	}: Props = $props();
</script>

<Form.Field {form} {name} class="space-y-1">
	<Form.FormControl>
		{#snippet children({ props })}
			<Form.Label class="data-[fs-error]:text-red-500">{label}</Form.Label>
			{#if multiline}
				<Textarea {...props} {placeholder} {name} {...rest} bind:value />
			{:else}
				<Input {...props} {placeholder} {name} {...rest} bind:value />
			{/if}
		{/snippet}
	</Form.FormControl>
	<Form.FieldErrors class="text-red-500 italic" />
</Form.Field>
