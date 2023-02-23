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

<div class="text-center text-2xl mb-6">Random Casey Facts</div>
<div class="space-y-4 md:space-y-0 md:grid grid-cols-4">
  <div id="casey-fact" class="text-center text-lg bg-violet-200 p-8 col-span-3 flex justify-center align-middle items-center">
    {currentFact.content}
  </div>
  <div class="text-center col-span-1 flex justify-center items-center align-middle">
    <button class="button-link block" on:click={newCaseyFact} on:keyup={newCaseyFact}>🔄 new fact</button>
  </div>
</div>
