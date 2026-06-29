import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services shown on the home + services pages. Each service is one .md file
// in src/content/services/ — editable in the CMS at /admin.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    price: z.string(),
    duration: z.string().optional(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

// Gallery photos. Each item is one .md file in src/content/gallery/.
const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    image: z.string(),
    alt: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { services, gallery };
