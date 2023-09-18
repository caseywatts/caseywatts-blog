<script>
  export let songs;
  export let starredSongs;

  import SongsGroup from "./SongsGroup.svelte";
  import SongCard from "./SongCard.svelte";
  import { Doc } from "sveltefire";

  $: myStarredSongs = starredSongs[0]?.starredSongs || [];

  $: fiveStarSongs = songs.filter((song) => song.Tier == 5);
  $: fourStarSongs = songs.filter((song) => song.Tier == 4);
  $: threeStarSongs = songs.filter((song) => song.Tier == 3);

  function songLookup(songId) {
    return songs.find((song) => song.id == songId);
  }
</script>

<!-- <div class="panel panel-main">
  <div class="text-2xl text-center">Starred</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {#each myStarredSongs as starredSong}
    <SongCard song={songLookup(starredSong)} />
  {/each}
</div> -->

<div class="panel panel-main text-2xl text-center mt-24">Five Star Songs</div>
<SongsGroup songs={fiveStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">Four Star Songs</div>
<SongsGroup songs={fourStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">Three Star Songs</div>
<SongsGroup songs={threeStarSongs} />
