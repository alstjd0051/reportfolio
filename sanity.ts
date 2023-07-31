import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PostContact } from "./components/lib/typings";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const token =
  process.env.NEXT_SANITY_SECRET_TOKEN! ||
  "skL9Mm7L4qgrt2jKHLvdxwVNofJOwZfwCt8U6N7LVPKoiocIiNx1mRLCuEGIWlwXDppSE55C8HbpJCs85MrWRiJWbOslGPnwbW92ykQDfdS2VaM180ZuWvVkt6vWta8fRXqucUQsLIHcfjcwYyX1Ez93hqz3fTRdu8jE3UpDJlBKPFoi4tQn";
export const assetsURL = `https://${projectId}.api.sanity.io/v2021-03-25/assets/images/${dataset}`;

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
  useCdn: true,
  token,
});

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

const builder = imageUrlBuilder(sanityClient);

export const urlFors = (source: SanityImageSource) => {
  return builder.image(source).width(800).url();
};

export async function CreateSend({ author, comments, email }: PostContact) {
  return await sanityClient.create({
    _type: "comment",
    author,
    email,
    comments,
  });
}
