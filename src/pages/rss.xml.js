import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get(context) {
  const posts = await getCollection("blog");
  const sortedPosts = posts.filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate - a.data.pubDate);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sortedPosts.map((post) => {
      const description = post.data.description || `${post.data.emoji} ${post.data.title} ${post.data.tagline}`;
      return {
        ...post.data,
        description,
        link: `/blog/${post.slug}/`,
      };
    }),
  });
}
