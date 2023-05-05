<script>
  export let text = "ha";
  $: buttonText = "copy text";

  function copyText() {
    navigator.clipboard.writeText(text);

    buttonText = "copied text";
    setTimeout(() => {
      buttonText = "copy text";
    }, 1000);
  }
</script>

<pre id="linkedin-content" class="bg-slate-50 p-4">{text}</pre>
<div class="text-right m-2">
  <button class="button-link" on:click={copyText}>{buttonText}</button>
</div>
