<script lang="ts" generics="Multiline extends boolean">
	import * as Form from '$lib/components/ui/form';
	import { Input, type InputEvents } from '$lib/components/ui/input';
	import { Textarea, type TextareaEvents } from '$lib/components/ui/textarea';
	import type { contactFormSchema } from './form.svelte';
	import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';

	type OtherProps = {
		form: SuperForms.Form<typeof contactFormSchema>;
		name: SuperForms.Keys<typeof contactFormSchema>;
		label: string;
		placeholder?: string;
		value: string;
		multiline?: Multiline;
	};
	type FieldInputAttributes = Omit<HTMLInputAttributes, 'form'> & OtherProps;
	type FieldTextareaAttributes = Omit<HTMLTextareaAttributes, 'form'> & OtherProps;
	type $$Props = Multiline extends true ? FieldTextareaAttributes : FieldInputAttributes;
	type $$Events = Multiline extends true ? TextareaEvents : InputEvents;

	export let form: $$Props['form'];
	export let name: $$Props['name'];
	export let label: $$Props['label'];
	export let placeholder: $$Props['placeholder'] = '';
	export let value: $$Props['value'];
	export let multiline: $$Props['multiline'] = false;
</script>

<Form.Field {form} {name} class="space-y-1">
	<Form.FormControl let:attrs>
		<Form.Label class="data-[fs-error]:text-red-500">{label}</Form.Label>
		{#if multiline}
			<Textarea {...attrs} {placeholder} {name} {...$$restProps} bind:value />
		{:else}
			<Input {...attrs} {placeholder} {name} {...$$restProps} bind:value />
		{/if}
	</Form.FormControl>
	<Form.FieldErrors class="text-red-500 italic" />
</Form.Field>
