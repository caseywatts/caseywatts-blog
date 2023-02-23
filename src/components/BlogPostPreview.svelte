<script>
  export let post = {};
  import FormattedDate from "./FormattedDate.svelte";
</script>

<a href={`/blog/${post.slug}/`} class="panel block bg-blue-100 visited:bg-purple-100 border border-blue-500 visited:border-purple-500 p-2 md:p-6 my-2 md:my-6 mx-auto prose lg:prose-lg drop-shadow-2xl hover:drop-shadow-xl transition ease-in-out duration-500">
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
