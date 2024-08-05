<script>
  export let songs;

  import SongsGroup from "./SongsGroup.svelte";

  import PocketBase from 'pocketbase';
  const url = 'https://caseywatts.pockethost.io/'
  const client = new PocketBase(url)

  let favoriteSongFromAPI = [];
  (async function() {
    favoriteSongFromAPI = await client.collection('favorite_songs').getFullList({
        sort: '-created',
    });
  })();

  $: favoriteSongIds = favoriteSongFromAPI.map((song)=> song.songId);
  $: favoriteSongs = songs.filter((song) => favoriteSongIds.includes(song._id))

  $: fiveStarSongs = songs.filter((song) => song.Tier == 5);
  $: fourStarSongs = songs.filter((song) => song.Tier == 4);
  $: threeStarSongs = songs.filter((song) => song.Tier == 3);
</script>

<div class="panel panel-main text-2xl text-center mt-24">
  Favorite Songs
  <div>😍</div>
</div>
<SongsGroup songs={favoriteSongs} />
<div class="panel panel-main text-2xl text-center mt-24">
  Five Star Songs
  <div>⭐️⭐️⭐️⭐️⭐️</div>
</div>
<SongsGroup songs={fiveStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">
  Four Star Songs
  <div>⭐️⭐️⭐️⭐️</div>
</div>
<SongsGroup songs={fourStarSongs} />
<div class="panel panel-main text-2xl text-center mt-24">
  Three Star Songs
  <div>⭐️⭐️⭐️</div>
</div>
<SongsGroup songs={threeStarSongs} />
