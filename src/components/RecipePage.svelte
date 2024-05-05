<script>
  export let recipe = {};
  import Ingredient from "./Ingredient.svelte";
  import Cookware from "./Cookware.svelte";
  import Step from "./Step.svelte";
</script>

<div class="grid grid-cols-2">
  <div><h1>{recipe.metadata.name} {recipe.metadata.emoji}</h1></div>
  <div class="text-right">
    {#if recipe.metadata.sourceurl}
      <div>
        <a href={recipe.metadata.sourceurl}>Source</a>
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
</div>

<div class="grid grid-cols-2">
  <div>
    <div>
      <div class="text-2xl">Ingredients</div>
      <ul>
        {#each recipe.ingredients as ingredient}
          <li><Ingredient {ingredient} /></li>
        {/each}
      </ul>
    </div>
    <div>
      <div class="text-2xl">Cookware</div>
      <ul>
        {#each recipe.cookwares as cookware}
          <li><Cookware {cookware} /></li>
        {/each}
      </ul>
    </div>
  </div>

  <div>
    <div class="text-2xl">Steps</div>
    <ol>
      {#each recipe.steps as step}
        <li><Step {step} /></li>
      {/each}
    </ol>
  </div>
</div>
