<script>
  import PodcastEpisodePreview from "./PodcastEpisodePreview.svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  export let episodes = [];
  // export let limit = episodes.length;

  // $: filteredEpisodes = episodes.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, limit);
  // $: filteredEpisodes = episodes;
</script>

<ul class="block my-10 space-y-10 mb-10">
  {#each episodes as episode (episode.title)}
    <div animate:flip={{ duration: 1000 }} transition:fly={{ y: 200, duration: 400 }}>
      <PodcastEpisodePreview {episode} />
    </div>
  {/each}
</ul>
