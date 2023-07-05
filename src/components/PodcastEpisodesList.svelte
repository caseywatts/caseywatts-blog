<script>
  import PodcastEpisodePreview from "./PodcastEpisodePreview.svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import PodcastEpisodesIndex from "./PodcastEpisodesIndex.svelte";
  export let episodes = [];
  export let limit = episodes.length;

  $: filteredEpisodes = episodes.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, limit);
</script>

<ul class="block my-10 space-y-10 mb-10">
  {#each filteredEpisodes as episode (episode.data.title)}
    <div animate:flip={{ duration: 1000 }} transition:fly={{ y: 200, duration: 400 }}>
      <PodcastEpisodePreview {episode} />
    </div>
  {/each}
</ul>
