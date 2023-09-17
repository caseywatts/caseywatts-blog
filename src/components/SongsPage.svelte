<script>
  import { Collection } from "sveltefire";
  import FireBaseApp from "./FireBaseApp.svelte";
  import SongsList from "./SongsList.svelte";
</script>

<FireBaseApp>
  <div class="panel panel-main text-center">
    <h2 class="text-2xl mb-4">Songs</h2>
    <div>Star Rating = <b>popularity</b> * how much Casey <b>enjoys</b> it * Casey's <b>skill</b> at it</div>
  </div>

  <Collection ref="Songs" let:data={songs}>
    <SongsList {songs} />
  </Collection>
</FireBaseApp>
