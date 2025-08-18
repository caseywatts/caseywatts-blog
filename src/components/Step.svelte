<script lang="ts">
  import Ingredient from "./Ingredient.svelte";
  import Cookware from "./Cookware.svelte";
  import Timer from "./Timer.svelte";
  let { step = {} } = $props();
</script>

{#each step as stepFragment}
  {#if stepFragment.type == "text"}
    {stepFragment.value}
  {:else if stepFragment.type == "ingredient"}
    <Ingredient ingredient={stepFragment} />
  {:else if stepFragment.type == "cookware"}
    <Cookware cookware={stepFragment} />
  {:else if stepFragment.type == "timer"}
    <Timer timer={stepFragment} />
  {:else}
    {JSON.stringify(stepFragment)}
  {/if}
{/each}
