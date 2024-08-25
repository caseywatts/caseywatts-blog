<script>
  export let recipe = {};
  import Ingredient from "./Ingredient.svelte";
  import Cookware from "./Cookware.svelte";
  import Step from "./Step.svelte";

  import { onMount } from "svelte";
  import { connectCheckboxesToLocalStorage, clearLocalStorage } from "../lib/localStorageCheckboxes";

  onMount(() => {
    connectCheckboxesToLocalStorage();
  });
</script>

<div class="grid grid-cols-2">
  <div class="mb-4">
    <h1 class="mb-2">{recipe.metadata.name} {recipe.metadata.emoji}</h1>
    {#if recipe.metadata.source}
      <div>
        Source: {recipe.metadata.source}
      </div>
    {/if}

    {#if recipe.metadata.sourceurl}
      <div>
        <a href={recipe.metadata.sourceurl}>Source</a>
      </div>
    {/if}
  </div>
  <div class="bg-purple-200 p-2 rounded-full text-center flex flex-col align-middle justify-center">
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
    <div>
      <button class="link inline-block" on:click={clearLocalStorage}>Clear Checkboxes</button>
    </div>
  </div>
</div>

<div class="grid grid-cols-2">
  <div>
    <div>
      <div class="text-2xl">Ingredients</div>
      <ul>
        {#each recipe.ingredients as ingredient}
          <li>
            <input type="checkbox" id={ingredient.name} class="save-to-local-storage" />
            <label for={ingredient.name}><Ingredient {ingredient} /> </label>
          </li>
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
