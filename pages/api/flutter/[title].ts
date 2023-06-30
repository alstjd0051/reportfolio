import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { Flutter } from "../../../components/lib/typings";
import { sanityClient } from "../../../sanity";

type Data = {
  flutter: Flutter[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const title = req.query.title;
  const query = groq`
    *[_type == 'flutter' && title== '${title}'] {
      ...,
    }
`;
  try {
    const flutter: Flutter[] = await sanityClient.fetch(query);
    res.status(200).json({ flutter });
  } catch (error) {
    res.status(404 || 500).end();
  }
}
