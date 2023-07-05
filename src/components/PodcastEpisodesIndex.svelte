<script>
  import PodcastEpisodesList from "./PodcastEpisodesList.svelte";
  export let episodes;

  import { onMount } from "svelte";
  onMount(() => {
    const searchParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    categoryFilter = searchParams.category || "";
  });
</script>

<section>
  <div class="panel panel-main space-y-6">
    <h2 class="text-3xl text-center">Casey Watts! The Podcast</h2>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around text-lg">
      <!-- <div class="text-center space-y-0">
        <div>Subscribe by Email</div>
        <div><a class="link text-lg" href="/newsletter">Newsletter</a></div>
      </div> -->
      <div class="text-center space-y-0">
        <div class="text-lg">Subscribe by RSS</div>
        <code class="inline-block text-sm md:text-md text-center p-2">https://caseywatts.com/podcast.xml</code>
      </div>
    </div>
  </div>
  <PodcastEpisodesList {episodes} />
</section>
