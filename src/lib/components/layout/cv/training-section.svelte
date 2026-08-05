<script lang="ts">
	import type { TrainingEntryData } from './cv-training';

	interface Props {
		heading: string;
		entries: TrainingEntryData[];
	}

	let { heading, entries }: Props = $props();
</script>

<div class="training">
	<h2 class="content-title">{heading}</h2>

	{#each entries as entry (entry.title)}
		<div class="content-date">
			{#if entry.dateNote}
				<span>{entry.date}</span>
				<span>{entry.dateNote}</span>
			{:else}
				{entry.date}
			{/if}
		</div>
		<div class="content-infos">
			<h3 class="infos-title">{entry.title}</h3>
			{#if entry.subtitle}
				<h4 class="infos-subtitle">{entry.subtitle}</h4>
			{/if}
			{#if entry.location}
				{#if entry.subtitle}
					<p class="infos-location">{entry.location}</p>
				{:else}
					<h4 class="infos-location">{entry.location}</h4>
				{/if}
			{/if}
			{#if typeof entry.description === 'string'}
				<p class="infos-description">{entry.description}</p>
			{:else if entry.description}
				{@const hasLabels = entry.description.some((item) => typeof item !== 'string')}
				<ul class="infos-description" role={hasLabels ? 'list' : undefined}>
					{#each entry.description as item, i (i)}
						{@const { label, text } =
							typeof item === 'string' ? { label: undefined, text: item } : item}
						<li>
							{#if label}<b>{label} :</b>&nbsp;{/if}{text}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</div>
