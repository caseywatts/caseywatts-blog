<script>
  export let ingredient = {};
</script>

<span class="bg-blue-200 p-1 rounded-sm">
  {#if ingredient.units != ""}
    {ingredient.name} ({ingredient.quantity}
    {ingredient.units})
  {:else}
    {ingredient.name} ({ingredient.quantity})
  {/if}
</span>
