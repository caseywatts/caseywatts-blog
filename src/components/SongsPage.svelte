<script>
  import { SignedIn, SignedOut, Doc, Collection } from "sveltefire";
  import { signInAnonymously } from "firebase/auth";
  import FireBaseApp from "./FireBaseApp.svelte";
  import Tag from "./Tag.svelte";
</script>

<FireBaseApp>
  <!-- <Doc ref="Songs/id" let:data>
    <h2>{data.title}</h2>
    <p>{data.content}</p>
  </Doc> -->

  <h2 class="panel panel-main text-2xl text-center">Songs</h2>

  <Collection ref="Songs" let:data={songs}>
    <div class="columns-4 break-inside-avoid">
      <div class=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {#each songs as song}
          {#if song.Genre == "90s"}
            <div class="p-1 m-0">
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
                  {#if song.Typeset_ChordsLyrics}
                    <a href={song.Typeset_ChordsLyrics} class="inline-block m-2 link">Typeset Chords + Lyrics</a>
                  {/if}
                </div>
                <Tag>{song.Genre}</Tag>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </Collection>
</FireBaseApp>
