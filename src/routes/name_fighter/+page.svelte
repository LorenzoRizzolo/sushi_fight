<div class="flex">
    <button class="glass" onclick={goBack}>
        <SushiIcon n={1}/> Cambia numero partecipanti
    </button>

    <button class="glass" onclick={()=>OpenPopup("annulla")}>
        <SushiIcon n={2}/> Annulla
    </button>
</div>

<div class="title">
    <h2>Inserisci i nomi dei partecipanti</h2>
</div>

{#each fight as fighter, i}
    <div class="flex fighter">
        <div class="glass icon"><SushiIcon n={RandomIcon()}/></div>
        <input type="text" bind:value={fight[i].username}>
    </div>
{/each}

<br>
<div class="center">
    <button class="glass" onclick={inizia_combattimento}>
        <img src="/icons/sushi.png" alt=""> Inizia a Combattere
    </button>
</div>

<Popup name="annulla">
    <h2>Annulla combattimento</h2>
    Sei sicuro di voler annullare il combattimento?
    <br><br>
    <div class="flex">
        <button class="glass" onclick={goHome}>
            <SushiIcon n={3}/> Si Annulla
        </button>
        <button class="glass" onclick={ClosePopup}>
            <SushiIcon n={5}/> No continua
        </button>
    </div>
</Popup>

<script>
    import { goto } from "$app/navigation";
    import { ClosePopup, OpenPopup, RandomIcon } from "$lib/store";
    import { onMount } from 'svelte';

    import Popup from "$lib/components/Popup.svelte";
    import SushiIcon from "$lib/components/SushiIcon.svelte";

    let fight = [];

    onMount(() => {
        const fightRaw = localStorage.getItem("fight");
        fight = fightRaw ? JSON.parse(fightRaw) : null;
    });
    
    function goBack(){
        goto("/number_fighter")
    }
    
    function goHome(){
        ClosePopup()
        goto("/")
    }

    function inizia_combattimento(){
        console.log(fight)
    }

</script>

<style>
    .flex{
        display: flex;
        align-items: center;
    }
    .flex > *{
        margin-right: 10px;
    }

    .flex.fighter{
        margin-bottom: 8px;
        justify-content: center;
    }

    .icon{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>