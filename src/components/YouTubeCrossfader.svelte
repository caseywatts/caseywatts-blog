<script>
  import Plyr from "plyr";
  import { onMount } from "svelte";
  onMount(() => {
    const player = new Plyr("#player");
    player.play();
    debugger;
  });
</script>

<div>YouTubeCrossfader</div>

<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="Moxu6ikyFkU" />

<!-- <iframe id="one" width="560" height="315" src="https://www.youtube.com/embed/Moxu6ikyFkU?si=pIL7bawTMMYBpgth&amp;start=63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

<iframe id="two" width="560" height="315" src="https://www.youtube.com/embed/_2vFTr-9uvg?si=0mLA0fF6GCCfvhu9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> -->

<style>
</style>
