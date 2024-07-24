<script>
  import PodcastEpisodesList from "./PodcastEpisodesList.svelte";
  export let podcastData;

  // import { onMount } from "svelte";
  // onMount(() => {
  //   const searchParams = new Proxy(new URLSearchParams(window.location.search), {
  //     get: (searchParams, prop) => searchParams.get(prop),
  //   });
  //   categoryFilter = searchParams.category || "";
  // });
</script>

<section>
  <div class="panel panel-main space-y-6">
    <h2 class="text-3xl text-center">{podcastData.meta.title}</h2>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around text-lg">
      <!-- <div class="text-center space-y-0">
        <div>Subscribe by Email</div>
        <div><a class="link text-lg" href="/newsletter">Newsletter</a></div>
      </div> -->
      <div class="text-center space-y-0">
        <div class="text-lg">Subscribe by RSS</div>
        {JSON.stringify(podcastData.meta.links.find((x) => x.rel == "self").href)}
        <code class="inline-block text-sm md:text-md text-center p-2">{podcastData.meta["atom:link"]}</code>
      </div>
    </div>
  </div>
  <PodcastEpisodesList episodes={podcastData.episodes} />
</section>
