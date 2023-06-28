import { groq } from "next-sanity";
import React from "react";
import { sanityClient } from "../../../sanity";
import { NextJS } from "../../../components/lib/typings";
import { GetStaticPaths, GetStaticProps } from "next";
import fetchNextjs from "../../../components/utils/fetchNextjs";
import { NextRouter, useRouter } from "next/router";

interface Props {
  nextjs: NextJS[];
}

const NextJSIdPage = ({ nextjs }: Props) => {
  const router = useRouter();
  console.log(nextjs);
  return (
    <div>
      {nextjs?.map((item) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
};

export default NextJSIdPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "nextjs",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const nextjs = await fetchNextjs();
  return {
    props: {
      nextjs,
    },
    revalidate: 1000,
  };
};
