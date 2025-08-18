<script lang="ts">
  let { timer = {} } = $props();
</script>

<!-- {timer.quantity} -->
<span class="bg-red-200 py-0.5 px-1 rounded-sm">{timer.quantity} {timer.units}</span>
