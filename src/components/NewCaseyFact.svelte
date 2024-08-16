<script>
  import CaseyFacts from "../lib/caseyFacts.js";

  $: nextFact = CaseyFacts.random();

  $: newLocation = `/casey-facts/${nextFact.slug}`;
</script>

<div class="text-center col-span-1 flex justify-center items-center align-middle">
  <a href={newLocation} class="button-link block">🔄 new fact</a>
</div>
