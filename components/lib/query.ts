import { groq } from "next-sanity";

export const pageInfo = groq`
*[_type == 'pageInfo']
`;
