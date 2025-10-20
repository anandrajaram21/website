import { z, defineCollection } from "astro:content";

// Single data collection with one file containing all data

const dataCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    fullName: z.string(),
    headline: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string(),
    about: z.string(),
    links: z.array(
      z.object({
        name: z.string(),
        href: z.string(),
      }),
    ),
    experience: z.array(
      z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
      }),
    ),
    projects: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        url: z.string(),
        technologies: z.array(z.string()),
        image: z.string(),
      }),
    ),
  }),
});

export const collections = {
  data: dataCollection,
};
