import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

const builder = imageUrlBuilder(sanityClient);

export const urlFors = (source: SanityImageSource) => {
  return builder.image(source).width(800).url();
};
