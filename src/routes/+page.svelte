<script lang="ts">
	import Header from './(components)/header.svelte';
	import Hero from './(components)/(hero)/hero.svelte';
	import About from './(components)/(about)/about.svelte';
	import Skills from './(components)/(skills)/skills.svelte';
	import Projects from './(components)/(projects)/projects.svelte';
	import Contact from './(components)/(contact)/contact.svelte';

	export let data;
</script>

<Header />
<main>
	<Hero />
	<About />
	<Skills />
	<Projects />
	<Contact data={data.form} />
</main>
