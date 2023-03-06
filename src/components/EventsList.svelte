<script>
  import { DateTime } from "luxon";
  import { EVENTS } from "../events.ts";
  import EventCard from "./EventCard.svelte";
  const soonestFirst = (a, b) => DateTime.fromISO(a.date).valueOf() - DateTime.fromISO(b.date).valueOf();
  const mostRecentFirst = (a, b) => DateTime.fromISO(b.date).valueOf() - DateTime.fromISO(a.date).valueOf();

  let today = DateTime.now(); // default to the date deployed, but update it client-side

  $: inPast = (event) => {
    debugger;
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

<h2 class="text-4xl">Upcoming Events</h2>
{#each upcomingEvents as event}
  <EventCard {event} />
{/each}

<h2 class="text-4xl">Past Events</h2>
{#each pastEvents as event}
  <EventCard {event} inPast="true" />
{/each}
