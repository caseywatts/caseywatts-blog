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

<div class="leading-7">
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
    <div class="">
      {#if recipe.metadata.totaltime}
        <div>
          Time: <span class="bg-blue-200 py-0.5 px-1 rounded-sm">{recipe.metadata.totaltime}</span>
        </div>
      {/if}

      {#if recipe.metadata.servings}
        <div>
          Serves: <span class="bg-blue-200 py-0.5 px-1 rounded-sm">{recipe.metadata.servings}</span>
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
            <li>
              <input type="checkbox" id={cookware.name} class="save-to-local-storage" />
              <label for={cookware.name}><Cookware {cookware} /> </label>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div>
      <div class="text-2xl">Steps</div>
      <ol style="list-style-type:decimal">
        {#each recipe.steps as step, index}
          <li>
            <input type="checkbox" id={"step-" + index} class="save-to-local-storage" />
            <label for={"step-" + index}><Step {step} /> </label>
          </li>
        {/each}
      </ol>
    </div>
  </div>
  <div class="mt-12 text-center">
    <button class="link inline-block" on:click={clearLocalStorage}>Clear Checkboxes</button>
  </div>
</div>
