import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { NestJS } from "../../../components/lib/typings";
import { sanityClient } from "../../../sanity";

type Data = {
  nestjs: NestJS[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.query.id;
  const query = groq`
    *[_type == 'nestjs' && _id== '${id}'] {
      ...
    }
`;
  const nestjs: NestJS[] = await sanityClient.fetch(query);
  return res.status(200).json({ nestjs });
}
