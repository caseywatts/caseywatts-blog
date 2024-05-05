<script>
  // import BlogPostList from "./BlogPostList.svelte";
  export let recipes;
  import RecipePreview from "./RecipePreview.svelte";
</script>

<div class="panel panel-main space-y-6">
  <h2 class="text-3xl text-center">Recipes</h2>
</div>

<section>
  {#each recipes as recipe}
    <RecipePreview {recipe} />
  {/each}
</section>
