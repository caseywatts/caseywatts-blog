<script>
  import { clearLocalStorage } from "../lib/localStorageCheckboxes";
  import { connectCheckboxes } from "../lib/localStorageCheckboxes";
  connectCheckboxes();
</script>

<div class="grid md:grid-cols-2 space-y-4 md:space-y-0 mt-4">
  <div class="flex align-middle justify-center items-center text-center">checkboxes are saved<br />in your current browser</div>
  <button class="button-link block mx-auto my-4" on:click={clearLocalStorage}>Clear Checkboxes</button>
</div>
