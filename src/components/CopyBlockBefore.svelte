<script>
  // must be wrapped in a div with the code block
  function copyBlockBefore(e) {
    const code = e.srcElement.closest("astro-island").parentNode.querySelector("code").innerText;
    navigator.clipboard.writeText(code);
  }
</script>

<div class="text-right">
  <span class="button-link" on:click={copyBlockBefore} on:keydown={copyBlockBefore}>copy</span>
</div>
