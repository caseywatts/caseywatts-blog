<script>
  import { DateTime } from "luxon";
  import { EVENTS } from "../events.ts";
  import EventCard from "./EventCard.svelte";
  const soonestFirst = (a, b) => DateTime.fromISO(a.date).valueOf() - DateTime.fromISO(b.date).valueOf();
  const mostRecentFirst = (a, b) => DateTime.fromISO(b.date).valueOf() - DateTime.fromISO(a.date).valueOf();

  let today = DateTime.now(); // default to the date deployed, but update it client-side

  $: inPast = (event) => {
    return DateTime.fromISO(event.date).valueOf() < today.valueOf();
  };
  $: inFuture = (event) => {
    return DateTime.fromISO(event.date).valueOf() >= today.valueOf();
  };

  $: upcomingEvents = EVENTS.filter(inFuture).sort(soonestFirst);
  $: pastEvents = EVENTS.filter(inPast).sort(mostRecentFirst);

  import { onMount } from "svelte";
  onMount(() => {
    today = DateTime.now();
  });
</script>

<div class="panel panel-main space-y-6">
  <h2 class="text-3xl text-center">Upcoming Events</h2>
</div>
<div class="my-12 space-y-12">
  {#each upcomingEvents as event}
    <EventCard {event} />
  {/each}
</div>

<div class="my-36" />

<div class="panel panel-main space-y-6">
  <h2 class="text-3xl text-center">Past Events</h2>
</div>
<div class="my-12 space-y-12">
  {#each pastEvents as event}
    <EventCard {event} inPast="true" />
  {/each}
</div>
