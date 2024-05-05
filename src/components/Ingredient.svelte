<script>
  export let ingredient = {};
</script>

<span style="background-color:mediumaquamarine; padding:2px; margin: 2px; border-radius:3px;">
  {#if ingredient.units != ""}
    {ingredient.name} ({ingredient.quantity}
    {ingredient.units})
  {:else}
    {ingredient.name} ({ingredient.quantity})
  {/if}
</span>
