<script>
  import OuterLayout from "../layouts/OuterLayout.astro";
  import AudioWidget from "../components/AudioWidget.svelte";
  import srt from "../../public/assets/An _Inverted_ Resume - Casey and Clara.srt?raw";

  const mp3 = `/assets/An _Inverted_ Resume - Casey and Clara.mp3`;

  let minimizedMode = false;
  let autoScroll = true;
  let doubleClick = false;
  let webMonetization = false;
  let playOnClick = true;

  new HyperaudioLite("hypertranscript", "hyperplayer", minimizedMode, autoScroll, doubleClick, webMonetization, playOnClick);
</script>

<OuterLayout>
  <div class="panel panel-main">
    <AudioWidget audioUrl={mp3} />
    <div id="hypertranscript" class="hyperaudio-transcript">
      {@html srt}
      <slot />
    </div>
  </div>
</OuterLayout>
