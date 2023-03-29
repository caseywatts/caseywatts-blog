<script>
  export let url = "";
  const agendaUrl = `${url}&mode=AGENDA`;
</script>

<div class="mx-auto hidden md:block">
  <iframe src={url} class="mx-auto" style="border:solid 1px #777" width="100%" height="400" frameborder="0" scrolling="no" />
</div>

<div class="mx-auto md:hidden">
  <iframe src={agendaUrl} class="mx-auto" style="border:solid 1px #777" width="100%" height="400" frameborder="0" scrolling="no" />
</div>
