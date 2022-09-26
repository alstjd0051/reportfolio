import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { PaegInfo } from "../../components/lib/typings";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PaegInfo[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PaegInfo[] = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
