<script lang="ts">
	import { uniqueId } from '$lib/methods/uniqueId';
	import type { SvelteComponent } from 'svelte';
	import type { HTMLInputAttributes, HTMLLabelAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		name: string;
		label: string | SvelteComponent;
		labelProps?: HTMLLabelAttributes;
	}

	export let name: $$Props['name'];
	export let label: $$Props['label'];
	export let labelProps: $$Props['labelProps'] = {};

	const id = uniqueId('form-');
</script>

<label {...labelProps} for={id}>{label}</label>
<!-- <input type="text" name="name" bind:value={$form.name} /> -->
<input type="text" {...$$restProps} {name} {id} />

<style lang="scss">
</style>
