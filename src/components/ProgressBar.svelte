<script lang="ts">
  let { amount, max } = $props();
  let amountRounded = $derived(amount.toFixed(1));
  let percentage = $derived(((amount - 1) / (max - 1)) * 100);
  let percentageRemainder = $derived(100 - percentage);
  let scale = $derived(Array.from(Array(max).keys()).map((x) => x + 1));
  let showValueInsideAmount = $derived(percentage > 20);
</script>

<div class="py-4">
  <div class="bg-slate-300 h-12 w-full relative">
    <div class="h-12 flex items-center">
      <div class="bg-purple-400 h-12 text-right flex justify-end items-center px-3" style="width: {percentage}%">
        {#if showValueInsideAmount}
          {amountRounded}
        {/if}
      </div>
      <div class="bg-slate-300 h-12 text-left flex justify-start items-center px-3" style="width: {percentageRemainder}%">
        {#if !showValueInsideAmount}
          {amountRounded}
        {/if}
      </div>
    </div>
  </div>
  <div class="flex justify-between text-base mt-1">
    {#each scale as x}
      <span> {x} </span>
    {/each}
  </div>
</div>
