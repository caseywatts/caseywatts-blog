<script lang="ts">
  interface Props {
    audioUrl?: string;
  }

  let { audioUrl = "" }: Props = $props();
</script>

<audio controls class="w-full my-4" id="hyperplayer">
  <source src={audioUrl} type="audio/wave" />
  Your browser does not support the audio tag.
</audio>
