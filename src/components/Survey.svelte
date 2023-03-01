<script>
  export let scale = {};
  let responses = Array(scale.scaleItems.length);

  function reverseScored(number) {
    // ((Number of scale points) + 1) - (Respondent’s answer)
    return scale.scaleLength + 1 - number;
  }
  $: remainingQuestions = -(responses.filter(String).length - responses.length);
  $: sum = responses.reduce((a, b) => a + b, 0);
  $: average = sum / scale.scaleLength;
  function keyPressed(e) {
    const radioButtonGroupParent = e.target.parentNode.parentNode;
    console.log(radioButtonGroupParent);
  }
</script>

<h2>
  {scale.title}
</h2>

<div>
  {#each scale.scaleItems as item, itemNumber}
    <div class="group hover:bg-blue-100 p-4">
      <div>{item.question}</div>
      <div>
        {#each scale.scaleLabels as label, responseRangeNumber}
          <label class="mx-2" on:keyup={keyPressed}>
            {#if item.reverseScored}
              <input type="radio" bind:group={responses[itemNumber]} name={itemNumber} value={reverseScored(responseRangeNumber + 1)} />
            {:else}
              <input type="radio" bind:group={responses[itemNumber]} name={itemNumber} value={responseRangeNumber + 1} />
            {/if}
            {label} ({responseRangeNumber + 1})
          </label>
        {/each}
      </div>
    </div>
  {/each}
</div>

<div>
  {#if remainingQuestions}
    Remaining Questions: {remainingQuestions}
  {:else}
    Total: {sum}
    Average: {average}
  {/if}
</div>
