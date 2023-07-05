import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
export const token = process.env.NEXT_SANITY_SECRET_TOKEN!;

export const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion,
  token,
});
