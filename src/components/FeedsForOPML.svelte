<script>
  import fxparser from "fast-xml-parser";
  export let myFeeds = "";
  const feedsXML = new fxparser.XMLParser({ ignoreAttributes: false }).parse(myFeeds);
  const feedCollectionTitle = feedsXML.opml.body.outline["@_text"];
  const feedsWithDetails = feedsXML.opml.body.outline.outline.map((feed) => {
    return {
      name: feed["@_text"],
      description: feed["@_description"],
      xmlUrl: feed["@_xmlUrl"],
      htmlUrl: feed["@_htmlUrl"],
    };
  });
</script>

<div class="text-2xl">{feedCollectionTitle}</div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {#each feedsWithDetails as feed}
    <div class="card card-body">
      <div class="text-xl">
        <a class="link" href={feed.htmlUrl}>
          {feed.name}
        </a>
      </div>
      {#if feed.description}
        <div class="text-base">{feed.description}</div>
      {/if}
      <div>
        <a class="link" href={feed.xmlUrl}>rss</a>
      </div>
    </div>
  {/each}
</div>
