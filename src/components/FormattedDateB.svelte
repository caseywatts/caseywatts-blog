<script lang="ts">
  import { DateTime } from "luxon";

  let { date } = $props();
  const luxonDate = DateTime.fromISO(date);
</script>

<time class="" datetime={luxonDate.toISO()}>
  {luxonDate.toLocaleString({
    weekday: "long",
    month: "long",
    day: "numeric",
  })}
</time>
