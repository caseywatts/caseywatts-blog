<script>
  export let amount;
  export let max;
  $: amountRounded = amount.toFixed(1);
  $: percentage = ((amount - 1) / (max - 1)) * 100;
  $: percentageRemainder = 100 - percentage;
  // $: percentage, console.log(`${amount} - 1 = ${amount - 1}`);
  // $: percentage, console.log(`${max} - 1 = ${max - 1}`);
  // $: percentage, console.log(`${percentage}`);
  $: scale = Array.from(Array(max).keys()).map((x) => x + 1);
  $: showValueInsideAmount = percentage > 20;
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
