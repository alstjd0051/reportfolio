import { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Blog } from "../../components/lib/typings";

const query = groq`
*[_type == 'skill' ] {
  route,
  image
} 
`;
type Data = {
  blog: Blog[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const blog: Blog[] = await sanityClient.fetch(query);

  res.status(200).json({ blog });
  if (res.status(400)) {
    res.end();
  }
}
