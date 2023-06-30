import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { NestJS } from "../../../components/lib/typings";
import { sanityClient } from "../../../sanity";

const query = groq`
*[_type == 'nestjs'] {
  ...,
} | order(createdAt desc)
`;
type Data = {
  nestjs: NestJS[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const nestjs: NestJS[] = await sanityClient.fetch(query);

  res.status(200).json({ nestjs });
  if (res.status(404)) {
    res.end();
  }
}
