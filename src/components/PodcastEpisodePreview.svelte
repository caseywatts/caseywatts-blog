<script>
  export let episode = {};
  import FormattedDateB from "./FormattedDateB.svelte";
  import Tag from "./Tag.svelte";

  // let url = episode.data.draft ? `/podcast/drafts/${episode.slug}/` : `/podcast/${episode.slug}/`;
  let url = `/podcast/${episode.slug}/`;
</script>

<div class="panel relative group">
  <a href={url} class="link-card">
    <div class="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-4 md:space-y-0 align-middle">
      <div class="text-6xl flex items-center align-middle justify-center">
        <span>🎙️</span>
      </div>
      <div class="flex-1 flex flex-col align-middle justify-center items-center md:items-start">
        <div class="text-2xl">{episode.title}</div>
        <div class="text-sm text-slate-600">{@html episode.description}</div>
      </div>
      <div class="text-right italic text-slate-600 text-sm flex items-center justify-center">
        <span>
          <FormattedDateB date={episode.pubDate} />
        </span>
      </div>
    </div>
  </a>
  {#if episode.tags}
    <Tag>{episode.tags}</Tag>
  {/if}
</div>
