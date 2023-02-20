<script>
  import { MEMES } from "../consts";

  Array.prototype.random = function () {
    // I can't believe this isn't built in! lol
    return this[Math.floor(Math.random() * this.length)];
  };

  const randomMeme = function () {
    return MEMES.random();
  };

  $: currentMeme = randomMeme();

  function newMeme() {
    currentMeme = randomMeme();
  }
</script>

<div class="space-y-2 text-center">
  <div class="text-center text-2xl">Random Memes</div>
  <div class="text-center text-lg">Crafted by Casey</div>
  <button class="button-link block w-full" on:click={newMeme} on:keyup={newMeme}>🔄 new meme</button>
</div>
<figure class="space-y-6">
  <figcaption class="text-lg bg-blue-200 p-4">{currentMeme.alt}</figcaption>
  <img class="mx-auto" src={currentMeme.path} />
</figure>
