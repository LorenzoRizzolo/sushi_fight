{#if fight.players.length==1}
    <div class="special_font">
        <b class="big">Congratulazioni</b> <br>
        {fight.players[0].username} hai ottenuto
    </div>

    <div class="flex">
        <div class="punti special_font firework">
            {fight.players[0].pieces}
        </div>
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
            <div class="punti special_font firework">
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
            <div class="punti special_font firework">
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

    let fight = { players:[{}, {}] }

    onMount(()=>{
        fight = JSON.parse(localStorage.getItem("fight"))
    })

    function goBack(){
        localStorage.removeItem("fight")
        goto("/")
    }
</script>

<style>
    /* Punteggio con animazione e fuochi d'artificio */
    .punti.firework {
        font-size: 4rem;
        margin: 20px;
        display: inline-block;
        position: relative;
        animation: pulse 1s ease-in-out infinite;
    }

    /* Zoom in dell'elemento */
    @keyframes pop {
        0% { transform: scale(0); opacity: 0; }
        60% { transform: scale(1.5); opacity: 1; }
        100% { transform: scale(1); }
    }

    /* Pulsazione dei punti */
    @keyframes pulse {
        0% { transform: scale(1); }
        25% { transform: scale(1.08); }
        50% { transform: scale(1.2); }
        75% { transform: scale(1.08); }
        100% { transform: scale(1); }
    }

    /* Fuochi d'artificio con box-shadow (moltiplicati) */
    .punti.firework::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        opacity: 0;
        background: #ff0;
        box-shadow:
            100px -50px #f0f,
            -80px 70px #0ff,
            120px 90px #f00,
            -100px -100px #0f0,
            60px 120px #ff8000,
            -50px 150px #00f,
            90px -120px #ff0,
            -120px 60px #f0f,
            70px 130px #0ff,
            150px 0 #ff0,
            -150px 0 #f0f,
            0 150px #0ff,
            0 -150px #f00,
            130px -130px #0f0,
            -130px 130px #ff8000,
            110px 140px #00f,
            -140px -110px #ff0;
        animation: sparks 1.5s ease-out forwards;
    }

    /* Animazione fuochi multipli */
    @keyframes sparks {
        0% { transform: translate(-50%, -50%) scale(0); opacity:1; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity:1; }
        100% { transform: translate(-50%, -50%) scale(0); opacity:0; }
    }

    /* Pulsazione pulsante */
    button.big {
        font-size: 250%;
        margin-top: 30px;
        background: rgba(255, 196, 0, 0.342);
    }

    /* Flex per due giocatori */
    .flex {
        display: flex;
        gap: 50px;
        justify-content: center;
        align-items: center;
    }
    .flex > * {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>

