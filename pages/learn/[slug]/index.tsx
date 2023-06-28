import type { GetStaticProps } from "next";

import { useRouter } from "next/router";
import React from "react";
import { Learn } from "../../../components/lib/typings";

type Props = {};

const SlugPage = ({}: Props) => {
  const router = useRouter();
  return (
    <div>
      <div>{router.query.slug}</div>
    </div>
  );
};

export default SlugPage;
