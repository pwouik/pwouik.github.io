<script lang=ts>
    import { resolve } from '$app/paths';
    let { data } = $props();
</script>
<h1>Projects</h1>

{#each data.project_info as { route, title }}
    <li><a href={resolve(`/projects/${route}`)}>{title}</a></li>
{/each}

<style>
    a{
        font:bold 2rem 'Courier New', Courier, monospace;
		color: rgb(234, 147, 237);
    }
</style>