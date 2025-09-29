

<button class="glass" onclick={goBack}>
    <span class="material-icons">reply</span> Indietro
</button>

<div class="title">
    <h2>Quanti partecipanti <br> combatteranno?</h2>
</div>

<div class="center">
    <Counter bind:count={count} />
</div>


<button class={"fight "+(count>0?"":"unselectable")} onclick={startFight}>
    <img src="/icons/sushi.png" alt="">
    Inizia il combattimento
</button>

<script>
    import { goto } from "$app/navigation";
    import Counter from "$lib/components/Counter.svelte";

    let count = 0

    function goBack(){
        goto("/")
    }

    function startFight(){
        if(count){
            let fight = []
            while(count!=0){
                fight.push({
                    start_time: Date.now(),
                    pieces:0,
                    username:""
                })
                count--
            }
            localStorage.setItem("fight", JSON.stringify(fight))
            goto("/name_fighter")
        }
    }

</script>

<style>
    .fight{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        margin: auto;
        margin-top: 40px;
        font-size: 200%;
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.3s ease;
    }
    .fight img{
        width: 150px;
        margin: 20px;
    }

    .unselectable{
        opacity: 0.5;
    }
</style>