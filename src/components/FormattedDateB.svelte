<script>
  export let date;
</script>

<time class="inline" datetime={date.toISOString()}>
  {date.toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })}
</time>
