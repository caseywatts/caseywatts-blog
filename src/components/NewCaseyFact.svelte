<script>
  import CaseyFacts from "../lib/caseyFacts.js";

  $: currentFact = CaseyFacts.random();

  function newCaseyFact() {
    currentFact = CaseyFacts.random();
  }
</script>

<div class="text-center col-span-1 flex justify-center items-center align-middle">
  <button class="button-link block" on:click={newCaseyFact} on:keyup={newCaseyFact}>🔄 new fact</button>
</div>
