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

<div>
  <button class="button-link block mx-auto my-4" on:click={clearLocalStorage}>Clear Checkboxes</button>
</div>
