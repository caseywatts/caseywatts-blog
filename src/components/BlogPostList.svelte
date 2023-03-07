<script>
  import BlogPostPreview from "./BlogPostPreview.svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  export let posts = [];
  export let limit = posts.length;
  export let categoryFilter = "";

  $: filteredPosts = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, limit)
    .filter((post) => {
      if (categoryFilter == "") {
        return true;
      } else {
        return post.data.tags?.includes(categoryFilter);
      }
    });
</script>

<ul class="block my-10 space-y-10 mb-10">
  {#each filteredPosts as post (post.data.title)}
    <div animate:flip={{ duration: 1000 }} transition:fly={{ y: 200, duration: 400 }}>
      <BlogPostPreview {post} {categoryFilter} />
    </div>
  {/each}
</ul>
