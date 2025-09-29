

<div class="photo">
    <img src="/icons/sushi.png" alt="">
</div>

<div class="special_font">
    <b class="big">Sfida</b> <br> 
    i tuoi amici a colpi di 
    <br><b class="big">Sushi !!!</b>
</div>


<button class="glass" on:click={goFight}>
    <b>Inizia</b> la sfida !
</button>

<footer>
	Lorenzo Rizzolo & Eleonora Campus Product 2025
</footer>

<script>
    import { goto } from '$app/navigation';

    function goFight() {
        goto('/number_fighter');
    }
</script>

<style>
    .photo{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .photo img {
        width: 100%;
        max-width: 300px;
        margin: 40px;
        /* Animazione di zoom proporzionale */
        animation: zoomScale 1s infinite alternate;
        transition: transform 0.2s;
    }

    /* Animazione che scala l'immagine da 1 a 1.1 */
    @keyframes zoomScale {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.07);
        }
    }

    button.glass{
        font-size: 150%;
        padding: 10px 30px;
        margin: auto;
        display: block;
    }
</style>
