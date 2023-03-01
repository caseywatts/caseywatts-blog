<script>
  export let scale = {};
  let responses = Array(scale.scaleItems.length);

  function reverseScored(number) {
    // ((Number of scale points) + 1) - (Respondent’s answer)
    return scale.scaleLength + 1 - number;
  }
  $: remainingQuestions = -(responses.filter(String).length - responses.length);
  $: sum = responses.reduce((a, b) => a + b, 0);
  $: average = sum / scale.scaleItems.length;

  function keyPressed(e) {
    const key = e.key;
    if (["1", "2", "3", "4"].includes(key)) {
      const radioButtonGroupParent = e.target.closest(".radio-group");
      const radioInput = radioButtonGroupParent.querySelector(`[data-keyboard-select='${key}']`);

      radioInput.checked = true;
      radioInput.dispatchEvent(new Event("change"));

      if (radioButtonGroupParent.nextSibling?.querySelector("input")) {
        radioButtonGroupParent.nextSibling.querySelector("input").focus();
      }
    } else if (key == "ArrowUp") {
      debugger;
      focusPreviousCard(e);
    } else if (key == "ArrowDown") {
      focusNextCard(e);
    }
  }
  function focusCard(e) {
    e.target.closest(".radio-group").querySelector("input").focus();
  }
  function focusPreviousCard(e) {
    const radioButtonGroupParent = e.target.closest(".radio-group");
    e.stopPropagation();
    if (radioButtonGroupParent.previousSibling?.querySelector("input")) {
      radioButtonGroupParent.previousSibling.querySelector("input").focus();
    }
  }
  function focusNextCard(e) {
    const radioButtonGroupParent = e.target.closest(".radio-group");
    // e.stopPropagation();
    if (radioButtonGroupParent.nextSibling?.querySelector("input")) {
      radioButtonGroupParent.nextSibling.querySelector("input").focus();
    }
  }
</script>

<h2>
  {scale.title}
</h2>

<form>
  {#each scale.scaleItems as item, itemNumber}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="group hover:bg-blue-100 p-4 radio-group" on:click={focusCard}>
      <div>{item.question}</div>
      <div>
        {#each scale.scaleLabels as label, responseRangeNumber}
          <label class="mx-2 inline-block my-1 md:my-0" on:keyup={keyPressed}>
            {#if item.reverseScored}
              <input type="radio" bind:group={responses[itemNumber]} name={`radio-group-${itemNumber}`} value={reverseScored(responseRangeNumber + 1)} data-keyboard-select={responseRangeNumber + 1} />
            {:else}
              <input type="radio" bind:group={responses[itemNumber]} name={`radio-group-${itemNumber}`} value={responseRangeNumber + 1} data-keyboard-select={responseRangeNumber + 1} />
            {/if}
            <span class="hidden md:inline kbd kbd-sm">{responseRangeNumber + 1}</span>
            {label}
          </label>
        {/each}
      </div>
    </div>
  {/each}
</form>

<div>
  {#if remainingQuestions}
    <div class="text-2xl text-center m-4">
      <div>{remainingQuestions}</div>
      <div>remaining questions</div>
    </div>
  {:else}
    <div class="text-2xl text-center m-4">
      <div>{scale.otherName}</div>
      <div>{average} (out of {scale.scaleLength})</div>
      <div class="text-base">via the <a href={scale.source.url}>{scale.source.name}</a></div>
    </div>
  {/if}
</div>
