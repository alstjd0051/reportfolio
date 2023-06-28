import { GetStaticProps } from "next";
import React from "react";
import { NextJS } from "../../../components/lib/typings";
import fetchNextjs from "../../../components/utils/fetchNextjs";

type Props = {
  nextjs: NextJS[];
};

const NextJSPage = (props: Props) => {
  return <div>NextJSPage</div>;
};

export default NextJSPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const nextjs = await fetchNextjs();
  return {
    props: {
      nextjs,
    },
    revalidate: 1000,
  };
};
