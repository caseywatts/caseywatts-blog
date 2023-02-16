<script>
  import { CASEY_FACTS } from "../consts";

  Array.prototype.random = function () {
    // I can't believe this isn't built in! lol
    return this[Math.floor(Math.random() * this.length)];
  };

  const randomCaseyFact = function () {
    return CASEY_FACTS.random();
  };

  $: currentFact = randomCaseyFact();

  function newCaseyFact() {
    currentFact = randomCaseyFact();
  }
</script>

<div class="space-y-4">
  <div class="text-center text-2xl">Random Casey Facts</div>
  <div id="casey-fact" class="text-center text-lg bg-violet-200 p-8">
    {currentFact}
  </div>
</div>
<div class="text-center">
  <div class="button-link inline-block" on:click={newCaseyFact} on:keyup={newCaseyFact}>🔄 new fact</div>
</div>
