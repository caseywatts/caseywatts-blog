<script>
</script>

<slot />

<style>
  :root {
    --canvas-outer-size: 1080px;
    --margin: 30px;
  }
  :root {
    --canvas-inner-size: calc(var(--canvas-outer-size) - var(--margin) - var(--margin));
  }
</style>
