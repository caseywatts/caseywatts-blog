<script>
  import { clearLocalStorage } from "../lib/localStorageCheckboxes";
  import { connectCheckboxesToLocalStorage } from "../lib/localStorageCheckboxes";

  connectCheckboxesToLocalStorage();

  let checkedCount;
  let totalCount;

  const updateCheckboxCounter = function () {
    checkedCount = document.querySelectorAll("input[type=checkbox]:checked").length;
    totalCount = document.querySelectorAll("input[type=checkbox]").length;
  };
  updateCheckboxCounter();

  document.querySelectorAll("input[type=checkbox]").forEach((box) => {
    box.addEventListener("change", updateCheckboxCounter);
  });
</script>

<div class="text-lg bg-violet-200 block p-5 rounded-lg text-center">
  <span id="checked">{checkedCount}</span>
  <span> of </span>
  <span id="total">{totalCount}</span>
</div>

<div class="grid md:grid-cols-2 space-y-4 md:space-y-0 mt-4">
  <div class="flex align-middle justify-center items-center text-center">checkboxes are saved<br />in your current browser</div>
  <button class="button-link block mx-auto my-4" on:click={clearLocalStorage}>Clear Checkboxes</button>
</div>
