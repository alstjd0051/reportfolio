import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { NextJS } from "../../../../components/lib/typings";
import { sanityClient } from "../../../../sanity";

type Data = {
  nextjs: NextJS[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const title = req.query.title;
  const query = groq`
    *[_type == 'nextjs' && title == '${title}'] {
      ...,
    }
`;
  const nextjs: NextJS[] = await sanityClient.fetch(query);
  res.status(200).json({ nextjs });
}
