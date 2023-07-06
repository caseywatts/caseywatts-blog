<script>
  export let audioUrl = "";
</script>

<audio controls class="w-full my-4" id="hyperplayer">
  <source src={audioUrl} type="audio/wave" />
  Your browser does not support the audio tag.
</audio>
