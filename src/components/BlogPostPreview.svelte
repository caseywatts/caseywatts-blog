<script>
  export let post = {};
  export let categoryFilter = "";
  import FormattedDate from "./FormattedDate.svelte";
  import Tag from "./Tag.svelte";

  let url = post.data.draft ? `/blog/drafts/${post.slug}/` : `/blog/${post.slug}/`;
</script>

<div class="panel relative group">
  <a href={url} class="link-card">
    <div class="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-4 md:space-y-0 align-middle">
      <div class="text-6xl flex items-center align-middle justify-center">
        <span>{post.data.emoji}</span>
      </div>
      <div class="flex-1 flex flex-col align-middle justify-center items-center md:items-start">
        <div class="text-2xl">{post.data.title}</div>
        <div class="text-sm text-slate-600">{post.data.tagline}</div>
      </div>
      <div class="text-right italic text-slate-400 text-sm flex items-center justify-center">
        <span>
          <FormattedDate date={post.data.pubDate} />
        </span>
      </div>
    </div>
  </a>
  {#if post.data.tags}
    <Tag>{post.data.tags}</Tag>
  {/if}
</div>
