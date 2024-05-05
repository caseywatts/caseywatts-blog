<script>
  // import BlogPostList from "./BlogPostList.svelte";
  export let recipes;
  // let categoryFilter = "";
  // function updateCategory(category) {
  //   return function () {
  //     if (category) {
  //       categoryFilter = category;
  //       const path = `/blog?category=${category}`;
  //       window.history.replaceState({}, {}, path);
  //     } else {
  //       categoryFilter = "";
  //       window.history.replaceState({}, {}, "/blog");
  //     }
  //   };
  // }

  // import { onMount } from "svelte";
  // onMount(() => {
  //   const searchParams = new Proxy(new URLSearchParams(window.location.search), {
  //     get: (searchParams, prop) => searchParams.get(prop),
  //   });
  //   categoryFilter = searchParams.category || "";
  // });
</script>

<section>
  {recipes}
  <!-- <BlogPostList {posts} {categoryFilter} /> -->
</section>
