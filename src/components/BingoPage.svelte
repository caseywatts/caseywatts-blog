<script>
  $: bingoTileTerms = ["initiation", "emotion", "backstory", "object work", "yes, and", "two peas in a pod", "a desire", "beat", "denial", "callback", "time travel", "game of the scene", "FREE", "heightening", "raising the stakes", "status", "walk on", "sound effects", "improv", "improv", "improv", "improv", "improv", "improv", "improv"];
  import BingoTile from "./BingoTile.svelte";
  import shuffle from "../lib/shuffle.js";

  let seed = 12345;

  import { onMount } from "svelte";
  onMount(() => {
    let termsFromURL = new URLSearchParams(window.location.search).get("terms");
    if (termsFromURL) {
      bingoTileTerms = termsFromURL.split(";");
    } else {
      // nothing
    }
  });
</script>

<div class="w-full">
  <div class="bingo-sheet">
    {#each bingoTileTerms as word, tileNumber}
      <BingoTile {word} {tileNumber} />
    {/each}
  </div>
</div>

<style lang="postcss">
  .bingo-sheet {
    @apply m-auto grid select-none grid-cols-5 gap-2 text-xs xs:text-base sm:text-lg;
    line-height: 1;
    hyphens: auto;
    word-break: break-word;
    max-height: 80vh;
    aspect-ratio: 1 / 1;
  }
</style>
