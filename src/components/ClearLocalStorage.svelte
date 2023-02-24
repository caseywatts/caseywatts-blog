<script>
  function localStorageKey(id) {
    // key it to the current page
    return `${document.location.pathname}#${id}`;
  }

  function clearLocalStorage() {
    document.querySelectorAll("input.save-to-local-storage").forEach((inputEl) => {
      const id = inputEl.id;
      localStorage.setItem(localStorageKey(id), false);
      inputEl.checked = false;
    });
  }
</script>

<div class="grid md:grid-cols-2 space-y-4 md:space-y-0 mt-4 md: mt-0">
  <div class="flex align-middle justify-center items-center text-center">checkboxes are saved<br />in your current browser</div>
  <button class="button-link block mx-auto my-4" on:click={clearLocalStorage}>Clear Checkboxes</button>
</div>
