<script>
  export let recipe = {};

  let url = `/recipes/${recipe.slug}/`;
</script>

<div class="panel relative group">
  <a href={url} class="link-card">
    <div class="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-4 md:space-y-0 align-middle">
      <div class="text-6xl flex items-center align-middle justify-center">
        <span>{recipe.data.metadata.emoji}</span>
      </div>
      <div class="flex-1 flex flex-col align-middle justify-center items-center md:items-start">
        <div class="text-2xl">{recipe.data.metadata.name}</div>
        <div class="text-sm text-slate-600">{recipe.data.metadata.name}</div>
      </div>
    </div>
  </a>
</div>
