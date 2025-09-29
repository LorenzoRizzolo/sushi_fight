{#if fight.players.length==1}
    <div class="special_font">
        <b class="big">Congratulazioni</b> <br> 
        {fight.players[0].username} hai ottenuto
    </div>


    <div class="punti special_font">
        {fight.players[0].pieces}
    </div>

    <div class="special_font">
        punti
    </div>
{/if}

{#if fight.players.length==2}
    <div class="special_font">
        <b class="big">Congratulazioni</b>
    </div>

    <div class="flex">
        <div>
            <div class="special_font">
                {fight.players[0].username} hai ottenuto
            </div>
            <div class="punti special_font">
                {fight.players[0].pieces}
            </div>
            <div class="special_font">
                punti
            </div>
        </div>
        <div>
            <div class="special_font">
                {fight.players[1].username} hai ottenuto
            </div>
            <div class="punti special_font">
                {fight.players[1].pieces}
            </div>

            <div class="special_font">
                punti
            </div>
        </div>

    </div>

{/if}

<div class="center">
    <button class="glass big special_font" onclick={goBack}>
        <img src="/icons/sushi.png" alt=""> Esci dal combattimento
    </button>
</div>

<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let fight = { players:[{}] }

    onMount(()=>{
        fight = JSON.parse(localStorage.getItem("fight"))
    })

    function goBack(){
        goto("/")
    }
</script>

<style>
    .punti{
        font-size: 4rem;
        margin: 20px;
    }

    button.big{
        font-size: 250%;
        margin-top: 30px;
        background: rgba(255, 196, 0, 0.342);
    }
</style>