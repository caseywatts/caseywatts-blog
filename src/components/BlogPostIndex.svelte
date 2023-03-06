<script>
  import BlogPostList from "./BlogPostList.svelte";
  export let posts;
  function updateCategory(category) {
    return function () {
      const path = `/blog?category=${category}`;
      window.location = path;
      // window.history.pushState({}, {}, path);
    };
  }
</script>

<button on:click={updateCategory("lol")}>lol</button>
<button on:click={updateCategory("ha")}>ha</button>

<section>
  <div class="panel panel-main space-y-6">
    <h2 class="text-3xl text-center">Blog Posts</h2>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around text-lg">
      <div class="text-center space-y-0">
        <div>Subscribe by Email</div>
        <div><a class="link text-lg" href="/newsletter">Newsletter</a></div>
      </div>
      <div class="text-center space-y-0">
        <div class="text-lg">Subscribe by RSS</div>
        <code class="inline-block text-sm md:text-md text-center p-2">https://caseywatts.com/rss.xml</code>
      </div>
    </div>
  </div>
  <div class="panel panel-main space-y-4">
    <h2 class="text-center text-2xl">Categories</h2>
    <div>
      <a class="button-link block whitespace-nowrap" href="/blog">All</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <button class="button-link whitespace-nowrap" on:click={updateCategory("💻 Programming")}>💻 Programming</button>
      <button class="button-link whitespace-nowrap" on:click={updateCategory("🧠 Psychology")}>🧠 Psychology</button>
      <button class="button-link whitespace-nowrap" on:click={updateCategory("👔 Workplace")}>👔 Workplace</button>
      <button class="button-link whitespace-nowrap" on:click={updateCategory("🌎 Community")}>🌎 Community</button>
      <button class="button-link whitespace-nowrap" on:click={updateCategory("🙋🏻 Personal")}>🙋🏻 Personal</button>
      <button class="button-link whitespace-nowrap" on:click={updateCategory("💡 Tips")}>💡 Tips</button>
    </div>
  </div>
  <BlogPostList {posts} />
</section>
