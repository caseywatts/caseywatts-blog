<script>
  import { onMount } from "svelte";
  export let word;
  export let tileNumber;
  import { localStorageGet, localStorageSet } from "../lib/localStorageBingo.js";
  let isMarked;

  function toggleMarked() {
    isMarked = !isMarked;
    localStorageSet(tileNumber, isMarked);
  }

  onMount(() => {
    isMarked = localStorageGet(tileNumber);
    if (word == "FREE") {
      isMarked = true;
    }
  });
</script>

<div class="bingo-tile flex-center" on:click={toggleMarked} on:keyup={toggleMarked} role="button" tabindex="auto">
  <div class="bingo-content">{word}</div>
  <div class:bingo-marker={isMarked} />
</div>

<style lang="postcss">
  .bingo-tile {
    @apply bg-blue-100 md:p-3;
    aspect-ratio: 1 / 1;
    text-align: center;
    width: 100%;
    height: 100%;
    hyphens: auto;
  }
  .bingo-content {
    z-index: 2;
  }
  .bingo-marker {
    @apply absolute flex h-10 rounded-full bg-red-300/60 xs:h-14 xs:bg-green-300/60 sm:h-24 sm:bg-orange-300/60 md:h-28 md:bg-purple-300/60 lg:h-32 lg:bg-blue-300/60;
    aspect-ratio: 1 / 1;
    z-index: 1;
  }
</style>
