<script>
  import BlogPostPreview from "./BlogPostPreview.svelte";
  export let posts = [];
  export let limit = posts.length;
  export let categoryFilter = "";

  $: filteredPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, limit);
</script>

<ul class="block my-10 space-y-10 mb-10">
  {#each filteredPosts as post}
    <BlogPostPreview {post} {categoryFilter} />
  {/each}
</ul>
