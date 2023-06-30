import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { NextJS } from "../../components/lib/typings";

const query = groq`
    *[_type == "nextjs"] {
    ...,
    } 
`;

type Data = {
  nextjs: NextJS[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const nextjs: NextJS[] = await sanityClient.fetch(query);

  res.status(200).json({ nextjs });
}
