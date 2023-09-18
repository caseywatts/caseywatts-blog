<script>
  export let songs;
  export let stars;

  import SongsGroup from "./SongsGroup.svelte";

  $: fiveStarSongs = songs.filter((song) => song.Tier == 5);
  $: fourStarSongs = songs.filter((song) => song.Tier == 4);
  $: threeStarSongs = songs.filter((song) => song.Tier == 3);

  $: starredSongs = songs.filter((song) => stars.find((star) => star.starred_songs == song.id));
</script>

<div class="panel panel-main text-2xl text-center mt-24">Starred Songs</div>
<SongsGroup songs={starredSongs} />

<div class="panel panel-main text-2xl text-center mt-24">Five Star Songs</div>
<SongsGroup songs={fiveStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">Four Star Songs</div>
<SongsGroup songs={fourStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">Three Star Songs</div>
<SongsGroup songs={threeStarSongs} />
