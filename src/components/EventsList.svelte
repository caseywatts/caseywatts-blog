<script>
  import { EVENTS } from "../events.ts";
  import EventCard from "./EventCard.svelte";
  const soonestFirst = (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf();
  const mostRecentFirst = (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf();

  let today = new Date(); // default to the date deployed, but update it client-side

  $: inPast = (event) => {
    return new Date(event.date).valueOf() < today.valueOf();
  };
  $: inFuture = (event) => {
    return new Date(event.date).valueOf() >= today.valueOf();
  };

  $: upcomingEvents = EVENTS.filter(inFuture).sort(soonestFirst);
  $: pastEvents = EVENTS.filter(inPast).sort(mostRecentFirst);

  import { onMount } from "svelte";
  onMount(() => {
    today = new Date();
  });
</script>

<h2>Upcoming Events</h2>
{#each upcomingEvents as event}
  <EventCard {event} />
{/each}

<h2>Past Events</h2>
{#each pastEvents as event}
  <EventCard {event} />
{/each}
