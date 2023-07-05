import React from "react";

type Props = {
  image?: string | null;
};

const Avatar = ({ image }: Props) => {
  return <p>{image}</p>;
};

export default Avatar;
