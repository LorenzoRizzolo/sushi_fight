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

{#each fight.players as fighter, i}
    <div class="flex fighter">
        <div class="glass icon"><SushiIcon n={RandomIcon()}/></div>
        <input type="text" placeholder="username..." bind:value={fight.players[i].username}>
    </div>
{/each}

<br>
<div class="center">
    <button class="glass big special_font" onclick={inizia_combattimento}>
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

<Popup name="error">
    Completa tutti i nomi prima di iniziare!
    <br><br>
    <div class="flex">
        <button class="glass" onclick={ClosePopup}>
            <SushiIcon n={5}/> OK
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
        if(!localStorage.getItem("fight")){
            goto("/")
        }else{
            const fightRaw = localStorage.getItem("fight");
            fight = fightRaw ? JSON.parse(fightRaw) : null;
        }
    });
    
    function goBack(){
        goto("/number_fighter")
    }
    
    function goHome(){
        ClosePopup()
        goto("/")
    }

    function inizia_combattimento(){
        if(fight.players.every(item=>item.username!="")){
            localStorage.setItem("fight", JSON.stringify(fight))
            goto("/fight")
        }else{
            OpenPopup("error")
        }
    }

</script>

<style>
    .flex.fighter{
        margin-bottom: 8px;
        justify-content: center;
    }
    .flex.fighter > *{
        flex: none;
    }

    button.big{
        font-size: 250%;
        margin-top: 30px;
        background: rgba(255, 196, 0, 0.342);
    }

    .icon{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>