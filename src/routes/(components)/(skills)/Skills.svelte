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

	<div class="grid ">
		<SkillBox title="Frameworks" list={frameworks} />
		<SkillBox title="CSS" list={css} />
		<SkillBox title="Libraries" list={libraries} />
		<SkillBox title="Languages" list={languages} />
		<SkillBox title="Tools" list={tools} />
	</div>
</Section>
