import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Flutter } from "../../../components/lib/typings";

const query = groq`
  *[_type == 'flutter' ]
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
}
