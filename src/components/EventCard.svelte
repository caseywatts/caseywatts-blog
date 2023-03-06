<script>
  export let event;
  export let inPast = "false";
  import FormattedDateB from "./FormattedDateB.svelte";
  import Tag from "./Tag.svelte";
</script>

<a href={event.url} class="link-card space-y-4">
  <Tag>{event.category}</Tag>
  <div class="flex flex-col md:flex-row justify-between align-bottom">
    <div>
      <div class="text-2xl">
        {event.emoji}
        {event.name}
      </div>
      <div class="py-1 text-slate-500">
        <div>
          Casey {inPast == "true" ? "was" : "is"}
          {event.participating}
        </div>
      </div>
    </div>
    <div class="text-right">
      <div class="text-2xl whitespace-nowrap text-slate-700 font-extralight">
        <FormattedDateB date={event.date} />
        {#if event.endDate}
          <br />to <FormattedDateB date={event.endDate} />
        {/if}
      </div>
      <div class="font-light">
        {event.cost}, {event.location}
      </div>
    </div>
  </div>
  <div class="bg-violet-50 border border-violet-400 block p-4">
    {event.description}
  </div>
</a>
