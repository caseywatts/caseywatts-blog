<script>
  export let id = "";
</script>

<li>
  <label>
    <input {id} type="checkbox" class="save-to-local-storage" />
    <slot />
  </label>
</li>
