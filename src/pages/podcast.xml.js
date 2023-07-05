import { Podcast } from "podcast";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { rssSchema } from "@astrojs/rss";

const podcastMeta = {
  title: "Casey Watts! The Podcast",
  description: "Casey Watts! The Podcast",
  author: "Casey Watts!",
  email: "casey@happyandeffective.com",
  imageUrl: "https://www.caseywatts.com/public/headshot.jpg",
};

const feed = new Podcast({
  title: podcastMeta.title,
  description: podcastMeta.description,
  author: podcastMeta.author,
  feedUrl: "https://www.caseywatts.com/podcast.xml",
  siteUrl: "https://www.caseywatts.com/",
  imageUrl: podcastMeta.imageUrl,
  language: "en",
  pubDate: Date.now(),
  itunesAuthor: podcastMeta.author,
  itunesSubtitle: podcastMeta.description,
  itunesSummary: podcastMeta.description,
  itunesOwner: { name: podcastMeta.author, email: podcastMeta.email },
  itunesExplicit: false,
  itunesCategory: [
    {
      text: "Education",
      subcats: [
        {
          text: "Self-Improvement",
        },
      ],
    },
  ],
  itunesImage: podcastMeta.imageUrl,
});

export async function get(context) {
  const episodes = await getCollection("podcast");
  const sortedEpisodes = episodes.filter((episode) => !episode.data.draft).sort((a, b) => b.data.pubDate - a.data.pubDate);

  sortedEpisodes.map((episode) => {
    const description = episode.data.description || `${episode.data.emoji} ${episode.data.title} ${episode.data.tagline}`;

    feed.addItem({
      ...episode.data,
      title: episode.data.title,
      enclosure: {
        url: episode.data.audioUrl,
      },
      guid: episode.slug,
    });
  });

  return {
    body: feed.buildXml(),
  };
}
