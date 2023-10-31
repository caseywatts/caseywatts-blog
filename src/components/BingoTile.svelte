<script>
  export let word = "";
  let isMarked = Math.random() > 0.5;
  function toggleMarked() {
    console.log(`toggling ${isMarked} to ${!isMarked}`);
    isMarked = !isMarked;
  }
</script>

<div class="bingo-card flex-center" on:click={toggleMarked} on:keyup={toggleMarked} role="button">
  <div class="bingo-content">{word}</div>
  <div class:bingo-marker={isMarked} />
</div>

<style>
  .xyz {
    /* display: relative; */
  }
  .bingo-card {
    @apply bg-blue-100 p-3;
    aspect-ratio: 1 / 1;
    text-align: center;
  }
  .bingo-content {
    z-index: 2;
  }
  .bingo-marker {
    @apply absolute h-32 w-32 rounded-full bg-red-300;
    z-index: 1;
    /* height: 100%;
    width: 100%; */
  }
</style>
