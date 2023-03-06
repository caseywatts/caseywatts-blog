<script>
  import BlogPostList from "./BlogPostList.svelte";
  export let posts;
</script>

<section>
  <div class="panel space-y-6">
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
  <div class="panel space-y-4">
    <h2 class="text-center text-2xl">Categories</h2>
    <div>
      <a class="button-link block whitespace-nowrap" href="/blog">All</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <a class="button-link whitespace-nowrap" href="/blog?category=💻 Programming">💻 Programming</a>
      <a class="button-link whitespace-nowrap" href="/blog?category=🧠 Psychology">🧠 Psychology</a>
      <a class="button-link whitespace-nowrap" href="/blog?category=👔 Workplace">👔 Workplace</a>
      <a class="button-link whitespace-nowrap" href="/blog?category=🌎 Community">🌎 Community</a>
      <a class="button-link whitespace-nowrap" href="/blog?category=🙋🏻 Personal">🙋🏻 Personal</a>
      <a class="button-link whitespace-nowrap" href="/blog?category=💡 Tips">💡 Tips</a>
    </div>
  </div>
  <BlogPostList {posts} client:load />
</section>
