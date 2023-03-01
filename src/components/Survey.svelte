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
    if (["1", "2", "3", "4", "5", "6", "7"].includes(key)) {
      const radioButtonGroupParent = e.target.closest(".radio-group");
      const radioInput = radioButtonGroupParent.querySelector(`[data-keyboard-select='${key}']`);

      radioInput.checked = true;
      radioInput.dispatchEvent(new Event("change"));

      focusNextCard(e);
    } else if (key == "ArrowUp") {
      e.stopPropagation();
      focusPreviousCard(e);
    } else if (key == "ArrowDown") {
      e.stopPropagation();
      focusNextCard(e);
    }
  }
  function focusCard(e) {
    e.target.closest(".radio-group").querySelector("input").focus();
  }
  function focusPreviousCard(e) {
    const radioButtonGroupParent = e.target.closest(".radio-group");
    e.stopPropagation();
    e.preventDefault();
    if (radioButtonGroupParent.previousSibling?.querySelector("input")) {
      radioButtonGroupParent.previousSibling.querySelector("input").focus();
      radioButtonGroupParent.previousSibling.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }
  function focusNextCard(e) {
    const radioButtonGroupParent = e.target.closest(".radio-group");
    e.stopPropagation();
    e.preventDefault();
    if (radioButtonGroupParent.nextSibling?.querySelector("input")) {
      radioButtonGroupParent.nextSibling.querySelector("input").focus();
      radioButtonGroupParent.nextSibling.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }
</script>

<h2 class="flex justify-between align-middle">
  <span>{scale.title}</span>
  <span class="text-base">Expected Time: {scale.expectedTime}</span>
</h2>

<div class="hidden sm:block">You can also use the keyboard to select answers, by pressing <span class="kbd kbd-sm">1</span> <span class="kbd kbd-sm">2</span> <span class="kbd kbd-sm">3</span> etc.</div>

<form>
  {#each scale.scaleItems as item, itemNumber}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="group p-4 radio-group">
      <div>{item.question}</div>
      <div>
        {#each scale.scaleLabels as label, responseRangeNumber}
          <label class="inline-block mt-3 mx-2 md:mx-4 text-center bg-blue-100 hover:bg-blue-200 p-2 indicator" on:keydown={keyPressed}>
            <div class="flex items-center align-middle justify-center gap-2">
              {#if item.reverseScored}
                <input type="radio" bind:group={responses[itemNumber]} name={`radio-group-${itemNumber}`} value={reverseScored(responseRangeNumber + 1)} data-keyboard-select={responseRangeNumber + 1} />
              {:else}
                <input type="radio" bind:group={responses[itemNumber]} name={`radio-group-${itemNumber}`} value={responseRangeNumber + 1} data-keyboard-select={responseRangeNumber + 1} />
              {/if}
              <span class="indicator-item hidden sm:inline kbd kbd-sm">{responseRangeNumber + 1}</span>
              <span class="">{label}</span>
            </div>
          </label>
        {/each}
      </div>
    </div>
  {/each}
</form>

<div class="text-2xl text-center m-4">
  {#if remainingQuestions}
    <div>
      <div>{remainingQuestions}</div>
      <div>remaining questions</div>
    </div>
  {:else}
    <div>
      <div>{scale.otherName}</div>
      <div>{average} (out of {scale.scaleLength})</div>
    </div>
  {/if}
  <div class="text-base">via the <a href={scale.source.url}>{scale.source.name}</a></div>
</div>
