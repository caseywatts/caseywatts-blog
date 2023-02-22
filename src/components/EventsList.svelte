<script>
  import { EVENTS } from "../events.ts";
  const events = EVENTS.sort((a, b) => b.date.valueOf() - a.date.valueOf());
</script>

{#each events as event}
  <div class="p-4 bg-violet-200">
    <div>
      {event.emoji}
      {event.name}
    </div>
    {event.location}
    {event.description}
    {event.participating}
    {event.cost}
    {event.date}
  </div>
{/each}
