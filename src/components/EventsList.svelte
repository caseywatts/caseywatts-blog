<script>
  import { DateTime } from "luxon";
  import EVENTS from "../data/events.json";
  import EventCard from "./EventCard.svelte";
  import CalEmbed from "./CalEmbed.svelte";
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

<div class="panel panel-main space-y-4">
  <h2 class="text-3xl text-center">Casey's Community Calendar</h2>
  <div class="text-center">DC, MD, VA and Online</div>
</div>

<div class="panel">
  <CalEmbed url="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=ZmlpaWQwZzVlcjEzMnVnMW9zc2FtajJhcDExZHFwbHFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ddd6fe" />
</div>

<div class="panel panel-main text-center space-y-4">
  Add to your calendar: <code class="text-sm">https://www.caseywatts.com/calendar.ics</code>
</div>

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
