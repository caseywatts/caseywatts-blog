<script>
  export let date;
</script>

<time class="inline" datetime={date.toISOString()}>
  {date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
</time>
