<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import { t } from '$lib/translations';

	import skills from './skills';
	import SkillBox from './tilt-box.svelte';
	import { sortStringsByKey } from '$lib/methods/sort';
	$: ({ css, frameworks, languages, tools, libraries } = skills);
</script>

<Section className="flex items-center justify-center flex-col gap-2" id="skills">
	<SectionTitle>
		{$t('skills.title')}
	</SectionTitle>

	<div class="mt-4 grid w-full gap-4 md:grid-cols-[repeat(auto-fit,minmax(26rem,1fr))]">
		<SkillBox title={$t('skills.frameworks')} list={frameworks.sort(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.css')} list={css.sort(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.libraries')} list={libraries.sort(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.tools')} list={tools.sort(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.languages')} list={languages.sort(sortStringsByKey('name'))} />
	</div>
</Section>
