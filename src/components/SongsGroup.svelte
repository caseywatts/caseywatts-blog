<script>
  export let songs;
  import SongCard from "./SongCard.svelte";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {#each songs as song}
    <div class="p-1 m-0">
      <SongCard {song} />
    </div>
  {/each}
</div>
