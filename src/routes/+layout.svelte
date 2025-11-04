<!-- +layout.svelte -->

<script lang="ts">

  import { type Snippet } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/root.css'

  let { children } = $props();
</script>

<Header />
<div class=main>
	{@render children()}
</div>
