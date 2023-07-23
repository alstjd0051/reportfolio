import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient, urlFors } from "../../../sanity";
import { NextResponse } from "next/server";
import { Content } from "../../../components/lib/typings";

const query = groq`
*[_type == "contact"][0]  {
  comments,
  "fileUrl": Resume.asset->url
}
`;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const contact = await sanityClient.fetch(query);

  res.status(200).json(contact);
  if (res.status(404)) {
    res.end();
  }
}
