<script>
  import { RATES } from "../consts.ts";
  $: selectedRate = null;
  $: filteredRates = RATES.filter((rate) => {
    if (selectedRate == null) {
      return true;
    } else {
      return rate.range == selectedRate;
    }
  });
</script>

<div class="panel panel-main mt-24">
  <div class="text-2xl text-center mb-4">How to Pay Casey</div>
  <div class="text-center">Thank you for working with me!</div>
</div>

<div class="panel panel-main mt-24">
  <div class="text-2xl text-center mb-4">Paying as an Individual</div>
  <div class="">If you're paying out of pocket yourself, you can pay a discounted rate. My <b>sliding scale</b> means you will get a discount on my rate depending on how much money you make -- e.g. folks who make more money will pay more, and folks who make less money will pay less.</div>
  <div class="text-2xl mb-2 mt-4">Select Your Income Range</div>
  <div class="mb-4">Has your income has been fluctuating lately? You can take an average of the past 3 months.</div>
  <div>
    {#each RATES as rate}
      {#if rate.range == selectedRate}
        <div
          on:click={() => {
            selectedRate = null;
          }}
          on:keyup={() => {
            selectedRate = null;
          }}
          tabindex="0"
          role="button"
          class="filter-button inline-block active"
        >
          {rate.range}
        </div>
      {:else}
        <div
          on:click={() => {
            selectedRate = rate.range;
          }}
          on:keyup={() => {
            selectedRate = rate.range;
          }}
          tabindex="0"
          role="button"
          class="filter-button inline-block"
        >
          {rate.range}
        </div>
      {/if}
    {/each}
  </div>
  <div class="text-2xl mt-8">Per Single Session</div>
  <div class="mt-4 grid grid-cols-2">
    {#each filteredRates as rate}
      <a class="button-link m-2 p-2" href="https://caseywatts.com#{rate.singleCode}">
        <div class="text-center">
          <div class="text-xl underline">{rate.range} / y</div>
          <div class="m-2"></div>
          <div class="text-lg"><span class="underline">${rate.perSession}</span> per 25-min session</div>
          <div class="m-2"></div>
          {#if rate.singleCode}
            <div class="text-slate-600"><span class="line-through">$160</span> {rate.discount} discount</div>
          {:else}
            <div>no discount</div>
          {/if}
        </div></a
      >
    {/each}
  </div>
  <div class="text-2xl mt-4">Per 3-pack (10% discount)</div>
  <div class="mt-4 grid grid-cols-2">
    {#each filteredRates as rate}
      <a class="button-link m-2 p-2" href="https://caseywatts.com#{rate.threePackCode}">
        <div class="text-center">
          <div class="text-xl underline">{rate.range} / y</div>
          <div class="m-2"></div>
          <div class="text-lg"><span class="underline">${(rate.perSession * 3 * 0.9).toFixed(2)}</span> per 25-min session</div>
          <div class="m-2"></div>
          {#if rate.threePackCode}
            <div class="text-slate-600"><span class="line-through">${(160 * 3 * 0.9).toFixed(2)}</span> {rate.discount} discount + 10% discount</div>
          {:else}
            <div>no discount</div>
          {/if}
        </div></a
      >
    {/each}
  </div>
</div>
