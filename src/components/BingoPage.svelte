<script>
  $: bingoTileTerms = ["B", "I", "N", "G", "O", "B", "I", "N", "G", "O", "B", "I", "FREE", "G", "O", "B", "I", "N", "G", "O", "B", "I", "N", "G", "O"];
  $: title = "Bingo";
  import BingoTile from "./BingoTile.svelte";

  import { onMount } from "svelte";
  onMount(() => {
    let termsFromURL = new URLSearchParams(window.location.search).get("terms");
    let titleFromURL = new URLSearchParams(window.location.search).get("title");
    if (termsFromURL) {
      bingoTileTerms = termsFromURL.split(";");
    } else {
      // nothing
    }
    if (titleFromURL) {
      title = titleFromURL;
    }
  });
</script>

<div class="w-full">
  <h1 class="text-2xl bg-blue-200 text-center p-4 m-4">{title}</h1>
  <div class="bingo-sheet">
    {#each bingoTileTerms as word, tileNumber}
      <BingoTile {word} {tileNumber} />
    {/each}
  </div>
  <div class="bg-blue-200 text-center p-4 m-4">Want to make your own BINGO card? Copy the <a class="link" href="https://docs.google.com/spreadsheets/d/1t42gP8CUVmKVNfK4cX7yWbqiNJl2e3jt5fjBf5WE9Ig/edit#gid=0">spreadsheet template</a></div>
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
