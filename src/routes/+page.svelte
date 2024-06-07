<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import Hero from '$lib/components/layout/hero/hero.svelte';
	import About from '$lib/components/layout/about/about.svelte';
	import Skills from '$lib/components/layout/skills/skills.svelte';
	import Projects from '$lib/components/layout/projects/projects.svelte';
	import Contact from '$lib/components/layout/contact/contact.svelte';

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
