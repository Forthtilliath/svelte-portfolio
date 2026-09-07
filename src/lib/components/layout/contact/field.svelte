<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { cn } from '$lib/utils';
	import type { contactFormSchema } from './form.svelte';

	type Props = {
		form: SuperForms.Form<typeof contactFormSchema>;
		name: SuperForms.Keys<typeof contactFormSchema>;
		label: string;
		placeholder?: string;
		value: string;
		multiline?: boolean;
		class?: string;
		[key: string]: unknown;
	};

	let {
		form,
		name,
		label,
		placeholder = '',
		value = $bindable(),
		multiline = false,
		class: className,
		...rest
	}: Props = $props();

	const fieldClass =
		'border-white/25 bg-app-black/70 dark:bg-app-black/70 shadow-md backdrop-blur-sm ' +
		'placeholder:text-white/40 hover:border-white/40 focus-visible:border-app-blue focus-visible:ring-app-blue/40';
</script>

<Form.Field {form} {name} class="space-y-2">
	<Form.FormControl>
		{#snippet children({ props })}
			<Form.Label class="data-fs-error:text-red-500">{label}</Form.Label>
			{#if multiline}
				<Textarea
					{...props}
					{placeholder}
					{name}
					{...rest}
					class={cn(fieldClass, 'min-h-28', className)}
					bind:value
				/>
			{:else}
				<Input
					{...props}
					{placeholder}
					{name}
					{...rest}
					class={cn(fieldClass, 'h-11', className)}
					bind:value
				/>
			{/if}
		{/snippet}
	</Form.FormControl>
	<Form.FieldErrors class="text-red-500 italic" />
</Form.Field>
