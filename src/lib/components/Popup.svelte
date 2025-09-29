<script>
    import { ClosePopup, popup_name } from "$lib/store";

    export let name = ""
    $: local_popup = $popup_name
</script>

<div class={"pop_container "+((local_popup==name&&local_popup!="")?"show":"")}>
    <div class={"popup "+name}>
        <button class="close" onclick={()=>ClosePopup()}><span class="material-icons">close</span></button>
        <slot/>
    </div>
</div>

<style>
    .pop_container.show{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(200, 200, 200, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    .pop_container:not(.show){
        display: none;
    }

    .popup{
        margin: auto;
        margin-top: 50px;
        width: 80%;
        max-width: 700px;
        background: rgba(146, 88, 88, 0.8);
        padding: 10px;
        border-radius: 16px;
    }

    .close{
        float: right;
        background: rgba(146, 88, 88, 0.8);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2000px;
        cursor: pointer;
    }
</style>