<script>
  import { Collection } from "sveltefire";
  import FireBaseApp from "./FireBaseApp.svelte";
  import SongsList from "./SongsList.svelte";
</script>

<FireBaseApp>
  <h2 class="panel panel-main text-2xl text-center">Songs</h2>

  <Collection ref="Songs" let:data={songs}>
    <SongsList {songs} />
  </Collection>
</FireBaseApp>
