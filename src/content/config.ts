import { z, defineCollection } from "astro:content";

// Different collection for each page (e.g. blog, projects, etc.)
// Each collection has its own schema
// Each collection will build on a base schema

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  //   image: z.string(),
  url: z.string(),
});

const commonDetails = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    fullName: z.string(),
    headline: z.string(),
    links: z.array(
      z.object({
        name: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

const homeCollection = defineCollection({
  type: "data",
  schema: baseSchema.extend({
    about: z.string(),
  }),
});

const guestbookCollection = defineCollection({
  type: "data",
  schema: baseSchema,
});

export const collections = {
  common: commonDetails,
  home: homeCollection,
  guestbook: guestbookCollection,
};
