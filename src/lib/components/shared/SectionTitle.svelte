<script lang="ts">
  import { cn } from "$lib/utils";

  export let className: string = '';
</script>

<h1 class={cn("text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-app-blue", className)}>
	<slot />
</h1>