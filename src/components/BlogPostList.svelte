<script>
  import BlogPostPreview from "./BlogPostPreview.svelte";
  export let posts = [];
  export let limit = posts.length;

  const filteredPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, limit);
</script>

<!-- <script> 
  const searchParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  console.log(searchParams.category);
  </script> -->

<ul>
  {#each filteredPosts as post}
    <BlogPostPreview {post} />
  {/each}
</ul>
