<div class="flex">
    <button class="glass" onclick={()=>OpenPopup("annulla")}>
        <img src="/icons/sushi.png" alt=""> Annulla Combattimento
    </button>
    <button class="glass" onclick={()=>OpenPopup("annulla")}>
        <img src="/icons/sushi.png" alt=""> Concludi Combattimento
    </button>
</div>
<div class="flex">
    <div class="glass center">
        Turno iniziato il &nbsp;<b>{date.data}</b>&nbsp;alle&nbsp;<b>{date.ora}</b>
    </div>
</div>

{#if fight.players.length==1}
    <div class="center flex_1">
        <BigCounter bind:count={fight.players[0].pieces} on:valueischanged={(e)=>localStorage.setItem("fight", JSON.stringify(fight))} />
        <br>
        <div class="special_font">{fight.players[0].username}</div>
    </div>
{/if}

{#if fight.players.length==2}
    <div class="flex_2 center">
        <div class="center flex_1">
            <BigCounter imageWidth="150px" bind:count={fight.players[0].pieces} on:valueischanged={(e)=>localStorage.setItem("fight", JSON.stringify(fight))} />
            <br>
            <div class="special_font">{fight.players[0].username}</div>
        </div>
        <div class="center flex_1">
            <BigCounter imageWidth="150px" bind:count={fight.players[1].pieces} on:valueischanged={(e)=>localStorage.setItem("fight", JSON.stringify(fight))} />
            <br>
            <div class="special_font">{fight.players[1].username}</div>
        </div>
    </div>
{/if}

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

<Popup name="annulla">
    <h2>Concludi combattimento</h2>
    Sei sicuro di voler concludere il combattimento?
    <br><br>
    <div class="flex">
        <button class="glass" onclick={goHome}>
            <SushiIcon n={3}/> Si concludi
        </button>
        <button class="glass" onclick={ClosePopup}>
            <SushiIcon n={5}/> No continua
        </button>
    </div>
</Popup>

<script>
    import { goto } from "$app/navigation";
    import { parseMillisToDate } from "$lib/index"
    import { ClosePopup, OpenPopup } from "$lib/store";
    import { onMount } from 'svelte';

    import BigCounter from "$lib/components/BigCounter.svelte";
    import Popup from "$lib/components/Popup.svelte";
    import SushiIcon from "$lib/components/SushiIcon.svelte";

    let fight = { players:[] };
    let date = { data:"--/--/--", ora:"00:00" }

    onMount(() => {
        if(!localStorage.getItem("fight")){
            goto("/")
        }else{
            const fightRaw = localStorage.getItem("fight");
            fight = fightRaw ? JSON.parse(fightRaw) : null;
            date = parseMillisToDate(fight.start_time)
            if(!fight.players.every(item=>item.username!="") || !fight.players.length){
                goto("/")
            }
        }
    });
    
    function goHome(){
        ClosePopup()
        localStorage.removeItem("fight")
        goto("/")
    }

</script>

<style>
    .glass.center{
        padding: 10px;
    }

    .flex_1{
        flex-direction: column;
        margin-top: 40px;
    }

    .flex_2{
        flex-direction: row;
    }
    .flex_2 > *{
        flex: 1;
    }

</style>