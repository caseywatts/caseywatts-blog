<script>
  export let song;
  import Tag from "./Tag.svelte";
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
  </div>
  <Tag>{song.Genre}</Tag>
</div>
