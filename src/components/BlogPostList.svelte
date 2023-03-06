<script>
  import BlogPostPreview from "./BlogPostPreview.svelte";
  export let posts = [];
  export let limit = posts.length;
  let filter = "";

  $: filteredPosts = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, limit)
    .filter((post) => {
      if (filter) {
        if (post.data.tags && filter !== "") {
          return post.data.tags.includes(filter);
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

  import { onMount } from "svelte";
  onMount(() => {
    const searchParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    filter = searchParams.category;
  });
</script>

<ul class="block my-10 space-y-10 mb-10">
  {#each filteredPosts as post}
    <BlogPostPreview {post} />
  {/each}
</ul>
