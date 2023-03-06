<script>
  export let url = ""; // UDATE

  $: likes = [];
  fetch(`https://webmention.io/api/mentions.jf2?target=${url}&wm-property=like-of`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // console.log(responseJson.children);
      likes = responseJson.children;
    });

  // const mentionCount = fetch(`https://webmention.io/api/count?target=${url}`).then((response) => response.json());
</script>

{#if likes.length}
  <div class="panel panel-main text-center">
    <h2 class="text-2xl mb-2">Likes on Mastodon and Twitter</h2>
    {#each likes as mention}
      <div class="flex flex-row gap-4 justify-center">
        <a href={mention.url} class="bg-slate-200 hover:bg-slate-100 border border-slate-700 hover:border-slate-600 p-2 my-1 flex align-middle justify-center items-center gap-3 rounded-full">
          <span>❤️ by</span>
          <img class="w-8 rounded-full" src={mention.author.photo} alt="profile photo of {mention.author.name}" />
          <span>{mention.author.name}</span>
        </a>
      </div>
    {/each}
  </div>
{/if}
