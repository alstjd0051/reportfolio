import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: "production",
  projectId: "kfie2jqu",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient({
  projectId: "kfie2jqu",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
