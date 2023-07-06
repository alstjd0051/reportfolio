import { sanityClient } from "../../sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export const addUser = async ({
  id,
  username,
  email,
  name,
  image,
}: OAuthUser) => {
  return sanityClient.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
  });
};
