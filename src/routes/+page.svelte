<script lang="ts">
	import Header from './(components)/header.svelte';
	import Hero from './(components)/(hero)/hero.svelte';
	import About from './(components)/(about)/about.svelte';
	import Skills from './(components)/(skills)/skills.svelte';
	import Projects from './(components)/(projects)/projects.svelte';
	import Contact from './(components)/(contact)/contact.svelte';

	import SectionSeparator from '$lib/components/shared/section-separator.svelte';

	import img1 from '$lib/assets/separators/1.jpg';
	import img2 from '$lib/assets/separators/2.jpg';
	import img3 from '$lib/assets/separators/3.jpg';
	import img4 from '$lib/assets/separators/4.jpg';

	export let data;
</script>

<Header />
<main class="mt-20">
	<Hero />
	<SectionSeparator img={img1} filter={50} />
	<About />
	<SectionSeparator img={img2} filter={50} />
	<Skills />
	<SectionSeparator img={img3} filter={50} />
	<Projects />
	<SectionSeparator img={img4} filter={70} />
	<Contact data={data.form} />
</main>
