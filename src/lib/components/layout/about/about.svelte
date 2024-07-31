<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import { t } from '$lib/translations';
	import me from '$lib/assets/me.webp';
</script>

<Section className="flex items-center justify-center flex-col gap-6" id="about">
	<SectionTitle>
		{$t('about.title')}
	</SectionTitle>

	<article class="flex max-md:flex-col gap-6 items-center">
		<main class="space-y-6 flex-shrink">
			<p class="indent-8 text-xl leading-10">
				{$t('about.p1')}
			</p>

			<p class="indent-8 text-xl leading-10">
				{$t('about.p2')}
			</p>
		</main>
		<!-- <div class="aspect-[500/450] w-[500px]"> -->
		<img src={me} alt={$t('about.imageAlt')} class="h-fit w-[500px] rounded-xl object-scale-down" />
		<!-- </div> -->
	</article>
</Section>
