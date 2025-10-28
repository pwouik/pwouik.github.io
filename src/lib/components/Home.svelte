<script lang=ts>
    import { resolve } from '$app/paths';
    let { data } = $props();
</script>
<h1>Pwouik's website</h1> 

<p>Software engineer, graphic programmer</p>

<h2>Projects:</h2>

{#each data.project_info as { route, title }}
    <li><a href={resolve(`/${route}`)}>{title}</a></li>
{/each}

<style>
    a{
        font:bold 2rem 'Courier New', Courier, monospace;
		color: rgb(234, 147, 237);
    }
    p,h1,h2,h3{
        font-family: 'Courier New', Courier, monospace;
        color: white;
    }
    h2{
        color: rgb(234, 147, 237);
    }
</style>