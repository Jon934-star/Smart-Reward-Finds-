import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    draft: z.boolean().optional().default(false),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().optional(),
  }),
});

export const collections = { blog };
