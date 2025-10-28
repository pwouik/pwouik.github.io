<script lang=ts>
	import style from '$lib/styles/content.css?url'
	let { data } = $props();
</script>


<svelte:head>
  <link rel="stylesheet" href={style} />
</svelte:head>
<h1>{data.article.metadata.title}</h1>
<data.article.default></data.article.default>