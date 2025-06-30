import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      gradient: z.string().optional(),
    }),
    sections: z.array(z.object({
      id: z.string(),
      title: z.string(),
      content: z.string(),
      type: z.enum(['content', 'cards', 'emergency', 'contact-form']).optional(),
    })).optional(),
  }),
});

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.enum(['content', 'cards', 'emergency', 'contact-form', 'interactive']).optional(),
    priority: z.enum(['high', 'medium', 'low']).optional(),
  }),
});

export const collections = {
  pages,
  sections,
};