import { defineCollection, z } from 'astro:content';
import { title } from '../components/SEOTags.svelte';

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

const podcast = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		draft: z.boolean().optional(),
		audioUrl: z.string().url()
	}),
});

const feeds = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		emoji: z.string(),
		url: z.string(),
	})
})

export const collections = { blog, podcast, feeds };
