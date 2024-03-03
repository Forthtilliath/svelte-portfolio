<script lang="ts">
	import Section from '$lib/components/shared/Section.svelte';
	import SectionTitle from '$lib/components/shared/SectionTitle.svelte';
	import { t } from '$lib/translations';

	import skills from './skills';
	import SkillBox from './TiltBox.svelte';
	$: ({ css, frameworks, languages, tools, libraries } = skills);
</script>

<Section className="flex items-center justify-center flex-col gap-2" id="skills">
	<SectionTitle>
		{$t('skills.title')}
	</SectionTitle>

	<div class="mt-4 grid w-full grid-cols-[repeat(auto-fit,minmax(26rem,1fr))] gap-4">
		<SkillBox title="Frameworks" list={frameworks.sort((a, b) => a.name.localeCompare(b.name))} />
		<SkillBox title="CSS" list={css.sort((a, b) => a.name.localeCompare(b.name))} />
		<SkillBox title="Libraries" list={libraries.sort((a, b) => a.name.localeCompare(b.name))} />
		<SkillBox title="Tools" list={tools.sort((a, b) => a.name.localeCompare(b.name))} />
		<SkillBox title="Languages" list={languages.sort((a, b) => a.name.localeCompare(b.name))} />
	</div>
</Section>
