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
    console.log("lol");
    console.log(randomCaseyFact());
    currentFact = randomCaseyFact();
  }
</script>

<div class="space-y-4">
  <div class="text-center text-2xl">Random Casey Facts</div>
  <div id="casey-fact" class="text-center text-lg bg-violet-200 p-8">
    {currentFact}
  </div>
  <div class="text-center italic">refresh the page for another</div>
</div>
<!-- <div>
  <a class="button-link" href="#" on:click={newCaseyFact} on:keyup={newCaseyFact}>get a new fact</a>
</div> -->
