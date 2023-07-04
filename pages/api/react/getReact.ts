import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { ReactJS } from "../../../components/lib/typings";
import { sanityClient } from "../../../sanity";

const query = groq`
*[_type == 'react'] {
  ...,
}
`;
type Data = {
  reactjs: ReactJS[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const reactjs: ReactJS[] = await sanityClient.fetch(query);

  res.status(200)?.json({ reactjs });
  if (res.status(400)) {
    res.end();
  }
}
