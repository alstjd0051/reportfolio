import React, { useEffect } from "react";
import fetchPageInfo from "../../../components/utils/fetchPageInfo";
import fetchSocials from "../../../components/utils/fetchSocials";
import fetchNextjs from "../../../components/utils/fetchNextjs";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  NextApiRequest,
} from "next";
import { NextJS, PageInfo, Social } from "../../../components/lib/typings";
import Header from "../../../components/commons/layout/Header";
import fetchNextjsId from "../../../components/utils/fetchNextjsId";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { title } from "process";
import axios from "axios";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  nextjs: NextJS[];
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const nextjs = await fetchNextjsId(params?.title);
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      socials,
      nextjs,
    },
    revalidate: 1000,
  };
};

export default function NextIdPage({ pageInfo, socials, nextjs }: Props) {
  return (
    <>
      <Header Home contact pageInfo={pageInfo} socials={socials} />

      <main className="py-5 px-20 max-w-7xl">
        <div className=" w-full h-32 flex items-center  ">
          {nextjs.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const nextjs = await fetchNextjs();

  const paths = nextjs.map((post) => ({
    params: { title: post.title },
  }));

  return {
    paths,
    fallback: "blocking", // false or "blocking"
  };
};
