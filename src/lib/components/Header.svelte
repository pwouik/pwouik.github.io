<!-- Header.svelte -->
 <script>
    import pdfUrl from '$lib/assets/CV.pdf?url';
 </script>
<header>
	<a href="/">Home</a>

	<nav>
		<ul>
			<li>
				<a href={pdfUrl}>Resumé</a>
			</li>
		</ul>
	</nav>
</header>
<style>
	header {
		padding: 1rem;
		background: rgb(253, 239, 255);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
        border-radius: 1rem;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:bold;
		font-size: 3em;
        margin-right: 1rem;
		color: black;
	}
</style>