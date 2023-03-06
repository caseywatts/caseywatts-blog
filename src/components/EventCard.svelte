<script>
  export let event;
  import FormattedDateB from "./FormattedDateB.svelte";
</script>

<div class="p-4 bg-violet-200 m-2">
  <div class="flex justify-between">
    <div>
      <div class="text-2xl">
        {event.emoji}
        {event.name}
      </div>
      <div class="italic">Casey is {event.participating}</div>
      <div>
        {event.description}
      </div>
    </div>
    <div class="text-right whitespace-nowrap">
      <div><FormattedDateB date={new Date(event.date)} /></div>
      <div>{event.location}</div>
      <div>{event.cost}</div>
    </div>
  </div>
</div>
