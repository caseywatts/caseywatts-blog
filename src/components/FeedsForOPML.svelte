<script>
  import fxparser from "fast-xml-parser";
  export let myFeeds = "";
  const feedsXML = new fxparser.XMLParser({ ignoreAttributes: false }).parse(myFeeds);
  const feedsWithDetails = feedsXML.opml.body.outline.outline.map((feed) => {
    return {
      name: feed["@_text"],
      description: feed["@_description"],
      xmlUrl: feed["@_xmlUrl"],
      htmlUrl: feed["@_htmlUrl"],
    };
  });
</script>

<div class="grid grid-cols-2">
  {#each feedsWithDetails as feed}
    <div class="card card-body">
      <div class="text-2xl">
        <a class="link" href={feed.htmlUrl}>
          {feed.name}
        </a>
      </div>
      <div class="text-base">{feed.description}</div>
      <div>
        <a class="link" href={feed.xmlUrl}>rss feed</a>
      </div>
    </div>
  {/each}
</div>
