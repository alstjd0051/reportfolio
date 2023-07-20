import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient, urlFors } from "../../../sanity";
import { NextResponse } from "next/server";
import { Content } from "../../../components/lib/typings";

const contents = (content: Content[]) => {
  return content.map((item: Content) => ({
    ...item,
  }));
};

const query = groq`
*[_type == "content"] | order(_createdAt desc)  {
  ...,
  "id": _id
}
`;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const content = await sanityClient.fetch(query).then(contents);

  res.status(200).json(content);
  if (res.status(404)) {
    res.end();
  }
}
