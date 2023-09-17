<script>
  import { Collection } from "sveltefire";
  import FireBaseApp from "./FireBaseApp.svelte";
  import SongsList from "./SongsList.svelte";
  import { SignedIn } from "sveltefire";
</script>

<FireBaseApp>
  <div class="panel panel-main text-center">
    <h2 class="text-2xl mb-4">Songs</h2>
    <div>Star Rating = <b>popularity</b> * how much Casey <b>enjoys</b> it * Casey's <b>skill</b> at it</div>
  </div>

  <SignedIn let:user>
    <Collection ref="Songs" let:data={songs}>
      <Collection ref="Stars" let:data={stars}>
        <SongsList {songs} {user} {stars} />
      </Collection>
    </Collection>
  </SignedIn>
</FireBaseApp>
