<script>
  export let allFeeds;
  import FeedsForOpml from "./FeedsForOPML.svelte";
  import friendsFeeds from "../../public/CaseyFriendsFeeds.xml?raw";
</script>

<div class="panel panel-main mt-24">
  <div class="text-2xl text-center mb-4">Casey's Curated News Feeds</div>
  <div class="text-center">Take ownership of your media consumption.</div>
</div>

<div class="panel panel-main prose">
  <div class="text-2xl">How to use RSS/OPML?</div>
  <div>1. Get an RSS Feed Reader app on your phone like <a href="https://www.inoreader.com/">Inoreader</a>.</div>
  <div>2. In the app, "Import OPML" - paste the OPML link there.</div>
</div>

{#each allFeeds as feed}
  <!-- <a href="/feeds/{feed.slug}" class="panel panel-main block"> -->
  <div class="panel panel-main">
    <div class="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-4 md:space-y-0 align-middle">
      <div class="text-6xl flex items-center align-middle justify-center">
        <span>{feed.data.emoji}</span>
      </div>
      <div class="flex-1 flex flex-col align-middle justify-center items-center md:items-start">
        <div class="text-2xl">{feed.data.title} Feeds</div>
        <div class="text-sm text-slate-600">{feed.data.description}</div>
      </div>
      <div class="text-right text-slate-600 text-sm flex items-center justify-center">
        <span>
          Copy <a class="link" href={feed.data.url}>OPML Url</a>
        </span>
      </div>
    </div>
  </div>
  <!-- </a> -->
{/each}
