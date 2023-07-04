import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { ReactJS } from "../../../components/lib/typings";
import { sanityClient } from "../../../sanity";

type Data = {
  reactjs: ReactJS[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.query.id;
  const query = groq`
    *[_type == 'react' && _id== '${id}'] {
      ...,
    } | order(createdAt desc)
`;
  const reactjs: ReactJS[] = await sanityClient.fetch(query);
  res.status(200).json({ reactjs });
}
