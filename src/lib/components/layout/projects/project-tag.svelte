<script lang="ts">
	interface Props {
		tag: string;
	}

	let { tag }: Props = $props();
</script>

<span
	class="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-sky-300 transition-colors hover:border-sky-500/60 hover:bg-sky-500/20"
>
	{tag}
</span>
