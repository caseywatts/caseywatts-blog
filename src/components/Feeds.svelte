<script>
  import FeedsForOpml from "./FeedsForOPML.svelte";
  import friendsFeeds from "../../public/CaseyFriendsFeeds.xml?raw";
</script>

<div class="panel panel-main mt-24">
  <div class="text-2xl text-center mb-4">Casey's Feeds</div>
  <div class="text-center">Take ownership of your news feeds.</div>
</div>

<div class="panel panel-main mt-24">
  <div class="text-center mb-4">
    <FeedsForOpml myFeeds={friendsFeeds} />
  </div>
</div>
