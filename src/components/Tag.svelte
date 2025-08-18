<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<span class="absolute top-0 right-0 -translate-y-1/2 md:translate-x-1/2 rotate-3 group-hover:-rotate-1 transition p-1 mx-0.5 bg-violet-100 border-2 border-violet-300 z-10">
  {@render children?.()}
</span>
