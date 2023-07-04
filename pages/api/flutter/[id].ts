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
  const id = req.query.id;
  const query = groq`
    *[_type == 'flutter' && _id== '${id}'] 
`;
  const flutter: Flutter[] = await sanityClient.fetch(query);
  return res.status(200).json({ flutter });
}
