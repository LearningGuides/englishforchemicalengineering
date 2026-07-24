import { defineCollection} from "astro:content";
import { glob } from "astro/loaders";
import {z} from "astro/zod";
const lessons = defineCollection({
  loader: glob({
    base: "./src/content/lessons",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    lessonNumber: z.number().optional(),
  }),
});

export const collections = {
  lessons,
};