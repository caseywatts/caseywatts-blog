<script>
  export let song;
  import isAdminQuery from "../lib/is-admin.js";
  let isAdmin = isAdminQuery();

  import Tag from "./Tag.svelte";

  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://caseywatts.pockethost.io/')

  async function favoriteSong() {
    await pb.collection('favorite_songs').create({
        songId: song._id,
    });
  }
  async function unfavoriteSong() {
    const record = await pb.collection('favorite_songs').getFirstListItem(`songId="${song._id}"`);
    await pb.collection('favorite_songs').delete(record.id);
  }
</script>

<div class="panel panel-main relative group text-center m-3 break-inside-avoid">
  <div class="text-lg">
    <div class="font-semibold">{song.Title}</div>
    <div class="">{song.Artist}</div>
  </div>
  <div class="mt-2">
    {#if song.Lyrics}
      <a href={song.Lyrics} class="inline-block m-2 link">Lyrics</a>
    {/if}
    {#if song.URL}
      <a href={song.URL} class="inline-block m-2 link">Uke Chords</a>
    {/if}
    {#if song["Typeset Chords + Lyrics"]}
      <a href={song["Typeset Chords + Lyrics"]} class="inline-block m-2 link">Typeset Chords + Lyrics</a>
    {/if}
    {#if isAdmin}
      <div class="space-x-3">
        <button class="button-link" on:click={favoriteSong}>favorite</button>
        <button class="button-link" on:click={unfavoriteSong}>unfavorite</button>
      </div>
    {/if}
  </div>
  <Tag>{song.Genre}</Tag>
</div>
