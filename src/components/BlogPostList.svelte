<script>
  import BlogPostPreview from "./BlogPostPreview.svelte";
  export let allPosts = [];

  const posts = allPosts.filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
</script>

<!-- <script> 
  const searchParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  console.log(searchParams.category);
  </script> -->

<ul>
  {#each posts as post}
    <BlogPostPreview {post} />
  {/each}
</ul>
