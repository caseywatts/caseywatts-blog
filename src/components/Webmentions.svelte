<script>
  export const url = "https://www.caseywatts.com/blog/making-event-descriptions-welcoming/"; // UDATE

  $: mentions = [];
  fetch(`https://webmention.io/api/mentions.jf2?target=${url}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson.children);
      mentions = responseJson.children;
    });

  // const mentionCount = fetch(`https://webmention.io/api/count?target=${url}`).then((response) => response.json());
</script>

{#each mentions as mention}
  <div class="text-lg mt-6 mb-2">Liked By</div>
  <a href={mention.url} class="bg-slate-200 hover:bg-slate-100 border border-slate-700 hover:border-slate-600 p-2 my-1 flex align-middle justify-center items-center space-x-2">
    <img class="w-8 rounded-full" src={mention.author.photo} alt="profile photo of {mention.author.name}" />
    <span>{mention.author.name}</span>
  </a>
{/each}
