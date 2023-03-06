<script>
  export let event;
  export let inPast = "false";
  import FormattedDateB from "./FormattedDateB.svelte";
</script>

<div class="p-4 bg-violet-200 m-2 space-y-2">
  <div class="flex justify-between align-bottom">
    <div>
      <div class="text-2xl">
        {event.emoji}
        {event.name}
      </div>
      <div class="">
        a <span class="bg-violet-100 p-1">{event.category}</span> event Casey {inPast == "true" ? "was" : "is"}
        {event.participating}
      </div>
    </div>
    <div class="text-right">
      <div class="text-2xl whitespace-nowrap text-slate-700 font-extralight">
        <FormattedDateB date={event.date} />
      </div>
      <div class="font-light">
        {event.cost}, {event.location}
      </div>
    </div>
  </div>
  <div class="flex align-bottom justify-between text-right whitespace-nowrap" />
  <div class="bg-violet-100 block p-2">
    {event.description}
  </div>
</div>
