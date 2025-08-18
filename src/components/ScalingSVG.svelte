<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children?.()}

<style>
  :root {
    --canvas-outer-size: 1080px;
    --margin: 30px;
  }
  :root {
    --canvas-inner-size: calc(var(--canvas-outer-size) - var(--margin) - var(--margin));
  }
</style>
