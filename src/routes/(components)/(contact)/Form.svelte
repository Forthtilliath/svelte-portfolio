<script lang="ts">
	// import { superForm } from 'sveltekit-superforms';
	import Input from './Input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';

	// export let data;

	// Client API:
	// const { form } = superForm(data.form);
</script>

<form method="POST" action="?/sendEmail">
	<Input name="name" label="Name" />
	<Input name="email" label="Votre E-mail" type="email" />
	<Input name="title" label="Titre" />

  <Textarea name="message" />

	<div><button type="submit">Submit</button></div>
	<!-- <p class="success">{$form?.success ||""}</p> -->
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
	}
</style>
