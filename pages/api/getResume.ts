import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Resume } from "../../components/lib/typings";

const query = groq`
    *[_type=='resume'] {
      ...
    } 
`;

type Data = {
  resume: Resume[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const resume: Resume[] = await sanityClient.fetch(query);

    res.status(200).json({ resume });
  } catch (error) {
    res.end();
  }
}
