import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { Learn, NextJS } from "../../../components/lib/typings";
import { sanityClient } from "../../../sanity";

const query = groq`
*[_type == 'nextjs'] {
  ...,
} | order(createdAt desc)
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
  if (res.status(400)) {
    res.end();
  }
}
