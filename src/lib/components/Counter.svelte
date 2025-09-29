<script>
  export let count = 0;

  export let limit = null

  function increment() {
    if(limit!=null && count>=limit){
        return
    }
    count +=1
  }

  function decrement() {
    count -= count>=1? 1:0;
  }
</script>

<style>
  .counter {
    display: flex;
    align-items: center;
    gap: 20px; /* spazio tra pulsanti e numero */
    font-family: sans-serif;
    user-select: none;
  }

  .btn {
    font-size: 1.5rem;
    padding: 10px 20px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.1s ease, box-shadow 0.1s ease;
  }

  .btn:active {
    transform: scale(0.95);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .count-display {
    font-size: 2rem;
    min-width: 50px;
    text-align: center;
    transition: transform 0.2s ease;
  }

  .count-display:active {
    transform: scale(1.2);
  }
</style>

<div class="counter">
  <button class="btn" on:click={decrement}>-</button>
  <div class="count-display special_font">{count}</div>
  <button class="btn" on:click={increment}>+</button>
</div>
