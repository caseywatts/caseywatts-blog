<script>
  export let song;
  export let ref;
  import Tag from "./Tag.svelte";
  import { firestoreObjects } from "../stores.js";
  import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

  const firestore = $firestoreObjects.firestore;
  const starsRef = doc(firestore, "Stars", "iC70DfErrobuYPBH4zrm");

  async function starSong() {
    debugger;
    await updateDoc(starsRef, {
      stars: arrayUnion(`Songs/${ref.id}`),
    });
  }
  async function unStarSong() {
    debugger;
    await updateDoc(starsRef, {
      stars: arrayRemove(`Songs/${ref.id}`),
    });
  }
</script>

<div class="panel panel-main relative group text-center m-3 break-inside-avoid">
  <div class="text-lg">
    <div class="font-semibold">{song.Title}</div>
    <div class="">{song.Artist}</div>
  </div>
  <div class="mt-2">
    <button class="button-link" on:click={starSong}>starSong</button>
    <button class="button-link" on:click={unStarSong}>unStarSong</button>
    {#if song.Lyrics}
      <a href={song.Lyrics} class="inline-block m-2 link">Lyrics</a>
    {/if}
    {#if song.URL}
      <a href={song.URL} class="inline-block m-2 link">Uke Chords</a>
    {/if}
    {#if song.Typeset_ChordsLyrics}
      <a href={song.Typeset_ChordsLyrics} class="inline-block m-2 link">Typeset Chords + Lyrics</a>
    {/if}
  </div>
  <Tag>{song.Genre}</Tag>
</div>
