<script>

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let count = 0;
  export let image = true
  export let imageWidth = "220px"

  let animate = false; // flag per animazione

  function triggerAnimation() {
    animate = false;
    // piccolo delay per riattivare la classe e ri-far partire l’animazione
    requestAnimationFrame(() => {
      animate = true;
      setTimeout(() => (animate = false), 300); // durata animazione
    });
  }

  function increment() {
      count++;
      triggerAnimation();
      dispatch("valueischanged", { value: count });
  }

  function decrement() {
    if (count > 0) {
      count--;
      triggerAnimation();
      dispatch("valueischanged", { value: count });
    }
  }
</script>

<style>
  .counter {
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: sans-serif;
    user-select: none;
  }

  .btn {
    font-size: 2.5rem;
    width: 100px;
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
    font-size: 10rem;
    min-width: 50px;
    text-align: center;
    transition: transform 0.2s ease;
  }

  img {
    width: 80%;
    margin-bottom: 20px;
  }

  /* ANIMAZIONE */
  .animate {
    animation: bounce 0.5s ease;
  }

  @keyframes bounce {
    0%   { transform: translateY(0); }
    30%  { transform: translateY(-20px); }
    50%  { transform: translateY(0); }
    70%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
</style>

{#if image}
  <img style={`max-width: ${imageWidth};`} src="/icons/sushi.png" alt="" class={(animate?"animate":"")} />
{/if}
<div class="counter">
  <!-- <button class="btn" on:click={decrement}>-</button> -->
  <div on:click={increment}>
    <div class="count-display special_font">{count}</div>
  </div>
  <!-- <button class="btn" on:click={increment}>+</button> -->
</div>
