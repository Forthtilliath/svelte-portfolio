<script lang="ts">
	import Header from './(components)/header.svelte';
	import Hero from './(components)/(hero)/Hero.svelte';
	import About from './(components)/(about)/About.svelte';
	import Skills from './(components)/(skills)/Skills.svelte';
	import Projects from './(components)/(projects)/Projects.svelte';
	import Contact from './(components)/(contact)/Contact.svelte';

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
