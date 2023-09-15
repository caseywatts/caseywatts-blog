<script>
  export let amount;
  export let max;
  $: amountRounded = amount.toFixed(1);
  $: percentage = ((amount - 1) / (max - 1)) * 100;
  $: percentage, console.log(`${amount} - 1 = ${amount - 1}`);
  $: percentage, console.log(`${max} - 1 = ${max - 1}`);
  $: percentage, console.log(`${percentage}`);
</script>

<div class="py-6">
  <div class="bg-slate-300 h-12 w-full relative">
    <div class="bg-purple-400 h-12 absolute" style="width: {percentage}%" />
    <div class="h-12 w-full absolute flex justify-between items-center p-2 text-2xl">
      <span>
        {amountRounded}
      </span>
      <span>
        / {max}
      </span>
    </div>
  </div>
</div>
