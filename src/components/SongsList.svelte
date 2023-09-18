<script>
  export let songs;

  import SongsGroup from "./SongsGroup.svelte";

  $: fiveStarSongs = songs.filter((song) => song.Tier == 5);
  $: fourStarSongs = songs.filter((song) => song.Tier == 4);
  $: threeStarSongs = songs.filter((song) => song.Tier == 3);
</script>

<div class="panel panel-main text-2xl text-center mt-24">Five Star Songs</div>
<SongsGroup songs={fiveStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">Four Star Songs</div>
<SongsGroup songs={fourStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">Three Star Songs</div>
<SongsGroup songs={threeStarSongs} />
