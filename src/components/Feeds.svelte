<script>
  import opml from "../lib/opml";
  let myFeeds = `<?xml version="1.0" encoding="UTF-8"?>
  <opml xmlns:frss="https://freshrss.org/opml" version="2.0">
    <head>
      <title>FreshRSS</title>
      <dateCreated>Fri, 31 May 2024 15:48:27 +0000</dateCreated>
    </head>
    <body>
      <outline text="Baltimore">
        <outline text="Baltimore Beat" type="rss" xmlUrl="https://baltimorebeat.com/feed/" htmlUrl="https://baltimorebeat.com/" description="Black-led, Black-controlled news"/>
        <outline text="Baltimore Fishbowl" type="rss" xmlUrl="https://baltimorefishbowl.com/feed/" htmlUrl="https://baltimorefishbowl.com/" description="YOUR WORLD BENEATH THE SURFACE."/>
        <outline text="Greater Greater Washington" type="rss" xmlUrl="https://ggwash.org/rss" htmlUrl="https://ggwash.org/" description="Main Greater Greater Washington RSS feed."/>
        <outline text="Homepage - WYPR" type="rss" xmlUrl="https://www.wypr.org/index.rss" htmlUrl="https://www.wypr.org/" description="WYPR is a public radio station serving the Baltimore, Maryland metropolitan area."/>
      </outline>
    </body>
  </opml>`;
  opml.parse(myFeeds, (x) => {
    console.log(x);
  });
</script>

<div class="panel panel-main mt-24">
  <div class="text-2xl text-center mb-4">Casey's Feeds</div>
  <div class="text-center">Take ownership of your news feeds.</div>
</div>

<div class="panel panel-main mt-24">
  <div class="text-2xl text-center mb-4">FEEDS</div>
</div>
