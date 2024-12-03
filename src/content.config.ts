import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    identifier: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
