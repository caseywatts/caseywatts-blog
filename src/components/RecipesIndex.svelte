<script lang="ts">
  
  import RecipePreview from "./RecipePreview.svelte";
  interface Props {
    // import BlogPostList from "./BlogPostList.svelte";
    recipes: any;
  }

  let { recipes }: Props = $props();
</script>

<div class="panel panel-main space-y-6">
  <h2 class="text-3xl text-center">Recipes</h2>
</div>

<section>
  {#each recipes as recipe}
    <RecipePreview {recipe} />
  {/each}
</section>
