import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { Flutter } from "../../../components/lib/typings";
import { sanityClient } from "../../../sanity";

const query = groq`
*[_type == 'flutter'] {
  ...,
} | order(createdAt desc)
`;
type Data = {
  flutter: Flutter[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const flutter: Flutter[] = await sanityClient.fetch(query);

  res.status(200).json({ flutter });
  if (res.status(404)) {
    res.end();
  }
}
