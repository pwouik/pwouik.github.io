<script lang=ts>
    import { resolve } from '$app/paths';
    let { data } = $props();
    import reportUrl from '$lib/assets/internship-report.pdf?url';
    import pdfUrl from '$lib/assets/CV.pdf?url';
</script>
<h1>Martin de Gastines website</h1> 

<p>Software engineer, graphic programmer</p>

<p>Linkedin: <a href="https://www.linkedin.com/in/martin-mace-de-gastines-2a370a233/">https://www.linkedin.com/in/martin-mace-de-gastines-2a370a233/</a></p>

<p>Github: <a href="https://github.com/pwouik">https://github.com/pwouik</a></p>

<a href={pdfUrl}>Resumé</a>

<h2>Projects:</h2>
<ul>
{#each data.project_info as { route, title }}
    <li><a href={resolve(`/${route}`)}>{title}</a></li>
{/each}
</ul>
<h2>Misc:</h2>
<p>Research Internship at KAISt, Korea: <a href={reportUrl}>Report</a> </p>

<h3>Gallery:</h3>
<div class="gallery">
<enhanced:img src="$lib/images/f1.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/f2.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/f3.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/f4.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/f5.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/f6.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/voxel1.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/voxel2.png" alt=""></enhanced:img>
<enhanced:img src="$lib/images/voxel3.png" alt=""></enhanced:img>
</div>


<style>
    a{
        font:bold 1rem 'Courier New', Courier, monospace;
		color: rgb(234, 147, 237);
    }
    p,h1,h2,h3{
        font-family: 'Courier New', Courier, monospace;
        color: white;
    }
    ul{
        list-style: none;
        padding-left: 0em;
    }
    img{
        width: 35em;
        height: 100%;
        box-shadow: 5px 5px 5px black;
        border-radius: 5px;
        margin: 1em;
    }
</style>