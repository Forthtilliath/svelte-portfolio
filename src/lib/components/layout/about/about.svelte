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

	<article class="flex items-center gap-6 max-md:flex-col">
		<main class="flex-1 space-y-6">
			<p class="indent-8 text-xl leading-10">
				{$t('about.p1')}
			</p>

			<p class="indent-8 text-xl leading-10">
				{$t('about.p2')}
			</p>
		</main>
		<div class="flex-1 md:max-w-[min(500px,50%)]">
			<img
				src={me}
				alt={$t('about.image-alt')}
				class="h-fit w-full rounded-xl object-scale-down"
			/>
		</div>
	</article>
</Section>
