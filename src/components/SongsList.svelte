<script lang="ts">

  import SongsGroup from "./SongsGroup.svelte";

  import PocketBase from 'pocketbase';
  let { songs } = $props();
  const url = 'https://caseywatts.pockethost.io/'
  const client = new PocketBase(url)

  let favoriteSongFromAPI = $state([]);
  (async function() {
    favoriteSongFromAPI = await client.collection('favorite_songs').getFullList({
        sort: '-created',
    });
  })();

  let favoriteSongIds = $derived(favoriteSongFromAPI.map((song)=> song.songId));
  let favoriteSongs = $derived(songs.filter((song) => favoriteSongIds.includes(song._id)))

  let fiveStarSongs = $derived(songs.filter((song) => song.Tier == 5));
  let fourStarSongs = $derived(songs.filter((song) => song.Tier == 4));
  let threeStarSongs = $derived(songs.filter((song) => song.Tier == 3));
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
