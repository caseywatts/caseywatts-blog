import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		emoji: z.string(),
		title: z.string(),
		tagline: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		tags: z.string().array().optional(),
		mastodonURL: z.string().optional(),
		hashtags: z.string().optional(),
		draft: z.boolean().optional()
	}),
});

export const collections = { blog };
