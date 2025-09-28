<script>
	import favicon from '$lib/assets/favicon.png';
	import "../app.css"
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<title>SushiFight</title>
</svelte:head>

<header class="special_font">
	<h1>SushiFight</h1>
</header>

<main>
	<slot/>
</main>


<footer>
	Lorenzo Rizzolo & Eleonora Campus Product 2025
</footer>
