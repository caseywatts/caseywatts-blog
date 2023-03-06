<script>
  import { DateTime } from "luxon";

  export let date;
  const luxonDate = DateTime.fromISO(date);
</script>

<time class="" datetime={luxonDate.toISO()}>
  {luxonDate.toLocaleString({
    weekday: "long",
    month: "long",
    day: "numeric",
  })}
</time>
