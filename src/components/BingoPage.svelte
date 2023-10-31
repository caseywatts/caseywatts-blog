<script>
  let length25 = ["initiation", "emotion", "backstory", "object work", "yes, and", "two peas in a pod", "a desire", "beat", "denial", "callback", "time travel", "game of the scene", "FREE", "heightening", "raising the stakes", "status", "walk on", "sound effects", "improv", "improv", "improv", "improv", "improv", "improv", "improv"];
  import BingoTile from "./BingoTile.svelte";
</script>

<div class="mx-64">
  <div class="bingo-sheet">
    {#each length25 as word}
      <BingoTile {word} />
    {/each}
  </div>
</div>

<style>
  .bingo-sheet {
    @apply grid grid-cols-5 gap-2;
    max-height: 80vh;
  }
</style>
