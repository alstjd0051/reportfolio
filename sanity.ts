import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn: false,
};

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.NEXT_SANITY_SECRET_TOKEN,
});

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
