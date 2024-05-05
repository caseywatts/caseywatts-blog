<script>
  export let recipe = {};
  export let title = "";
  import Ingredient from "./Ingredient.svelte";
  import Cookware from "./Cookware.svelte";
  import Step from "./Step.svelte";
</script>

<div class="flex">
  <div>
    <h1>{recipe.metadata.name}</h1>

    {#if recipe.metadata.source}
      <div>
        Source: {recipe.metadata.source}
      </div>
    {/if}

    {#if recipe.metadata.totaltime}
      <div>
        Total Time: {recipe.metadata.totaltime}
      </div>
    {/if}

    {#if recipe.metadata.servings}
      <div>
        Servings: {recipe.metadata.servings}
      </div>
    {/if}
  </div>

  <div>
    <div>Ingredients</div>
    <ul>
      {#each recipe.ingredients as ingredient}
        <li><Ingredient {ingredient} /></li>
      {/each}
    </ul>
  </div>
  <div>
    <div>Cookware</div>
    <ul>
      {#each recipe.cookwares as cookware}
        <li><Cookware {cookware} /></li>
      {/each}
    </ul>
  </div>
</div>

<div>Steps</div>
<ol>
  {#each recipe.steps as step}
    <li><Step {step} /></li>
  {/each}
</ol>
