<script lang="ts">
  import BlogPostList from "./BlogPostList.svelte";
  let categoryFilter = $state("");
  function updateCategory(category) {
    return function () {
      if (category) {
        categoryFilter = category;
        const path = `/blog?category=${category}`;
        window.history.replaceState({}, {}, path);
      } else {
        categoryFilter = "";
        window.history.replaceState({}, {}, "/blog");
      }
    };
  }

  import { onMount } from "svelte";
  let { posts } = $props();
  onMount(() => {
    const searchParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    categoryFilter = searchParams.category || "";
  });
</script>

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
    <h2 class="text-center text-2xl">Filter by Category</h2>
    <div>
      <button class="button-link block whitespace-nowrap w-full" onclick={updateCategory("")}>All</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <button class="button-link whitespace-nowrap" onclick={updateCategory("💻 Programming")}>💻 Programming</button>
      <button class="button-link whitespace-nowrap" onclick={updateCategory("🧠 Psychology")}>🧠 Psychology</button>
      <button class="button-link whitespace-nowrap" onclick={updateCategory("👔 Workplace")}>👔 Workplace</button>
      <button class="button-link whitespace-nowrap" onclick={updateCategory("🌎 Community")}>🌎 Community</button>
      <button class="button-link whitespace-nowrap" onclick={updateCategory("🙋🏻 Personal")}>🙋🏻 Personal</button>
      <button class="button-link whitespace-nowrap" onclick={updateCategory("💡 Tips")}>💡 Tips</button>
    </div>
  </div>
  <BlogPostList {posts} {categoryFilter} />
</section>
