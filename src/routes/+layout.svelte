<script>
	import favicon from '$lib/assets/favicon.png';
    import { onMount } from 'svelte';
	import "../app.css"
    import { goto } from '$app/navigation';

	onMount(()=>{
		let fight = localStorage.getItem("fight")
		console.log(fight)
		if(fight){
			fight = JSON.parse(fight)
			if(fight.players.some(item=>item.username=="")){
				goto("/name_fighter")
			}else( goto("/fight") )
		}
	})
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

