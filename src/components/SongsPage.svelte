<script>
  import SupabaseApp from "./SupabaseApp.svelte";
  import { supabase } from "../supabaseClient";

  import SongsList from "./SongsList.svelte";
  import SongCard from "./SongCard.svelte";

  const SongsPromise = supabase.from("Songs").select();
  const StarsPromise = supabase.from("Stars").select();
</script>

<!-- <SupabaseApp /> -->

{#await SongsPromise}
  <p>...waiting</p>
{:then songs}
  {#await StarsPromise}
    <p>...waiting</p>
  {:then stars}
    <SongsList songs={songs.data} stars={stars.data} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
