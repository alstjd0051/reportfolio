import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { Learn } from "../../components/lib/typings";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == 'learn'] {
  ...,
  tag[]-> 
}
`;
type Data = {
  learn: Learn[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const learn: Learn[] = await sanityClient.fetch(query);

  res.status(200).json({ learn });
  if (res.status(400)) {
    res.end();
  }
}
