import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const educacion = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/educacion' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      description: z.string(),
      category: z.enum(['Ortodoncia', 'Prevención', 'Urgencias', 'Niños', 'Implantes']),
      image: image(),
      imageAlt: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      readingMinutes: z.number().default(4),
      related: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
    }),
});

export const collections = { educacion };
