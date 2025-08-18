<script lang="ts">
  interface Props {
    id?: string;
    children?: import('svelte').Snippet;
  }

  let { id = "", children }: Props = $props();
</script>

<li>
  <label>
    <input {id} type="checkbox" class="save-to-local-storage" />
    {@render children?.()}
  </label>
</li>
