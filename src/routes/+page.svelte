<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import Hero from '$lib/components/layout/hero';
	import About from '$lib/components/layout/about';
	import Skills from '$lib/components/layout/skills';
	import Projects from '$lib/components/layout/projects';
	import Contact from '$lib/components/layout/contact';
	import Footer from '$lib/components/layout/footer.svelte';

	import Stars from '$lib/components/shared/stars';
	import SectionSeparator from '$lib/components/shared/section-separator.svelte';

	import img1 from '$lib/assets/separators/1.webp';
	import img2 from '$lib/assets/separators/2.webp';
	import img3 from '$lib/assets/separators/3.webp';
	import img4 from '$lib/assets/separators/4.webp';
	import img5 from '$lib/assets/separators/5.avif';

	export let data;
</script>

<Header />

<main class="relative mt-20">
	<Hero />
	<SectionSeparator img={img1} filter={50} />
	<About />
	<SectionSeparator img={img2} filter={50} />
	<Skills />
	<SectionSeparator img={img3} filter={50} />
	<Projects />
	<SectionSeparator img={img4} filter={70} />
	<Contact data={data.form} />
	<SectionSeparator img={img5} filter={60} height="50px" />
	<Footer />
</main>

<Stars />
