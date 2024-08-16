<script>
  import CaseyFacts from "../lib/caseyFacts.js";

  $: allShuffled = CaseyFacts.allShuffled;
</script>

<div class="text-center text-2xl mb-6">Casey Facts</div>

<div class="space-y-4 md:space-y-0 md:grid grid-cols-4 gap-4">
  {#each allShuffled as fact}
    <div id="casey-fact" class="text-center text-lg bg-violet-200 p-4 col-span-1 sm:col-span-2 flex justify-center align-middle items-center">
      {fact.content}
    </div>
  {/each}
</div>
