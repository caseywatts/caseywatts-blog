import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get(context) {
  const posts = await getCollection("blog");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => {
      const description = post.description || `${post.data.emoji} ${post.data.title} ${post.data.tagline}`;
      return {
        ...post.data,
        description,
        link: `/blog/${post.slug}/`,
      };
    }),
  });
}
