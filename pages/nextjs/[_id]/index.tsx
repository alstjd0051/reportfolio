import React from "react";
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
import CodeBox from "../../../components/commons/items/codeBox";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/commons/items/RichTextComponents";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  nextjs: NextJS[];
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const nextjs = await fetchNextjsId(params?._id);
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
      <div className="w-full  sticky">
        <Header Home contact pageInfo={pageInfo} socials={socials} />
      </div>

      <main className="py-5 px-20 max-w-7xl">
        <div className=" w-full flex items-center  ">
          {nextjs.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <div className="flex flex-col mt-10 ">
                <PortableText
                  value={item.content}
                  components={RichTextComponents}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-52"></div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const nextjs = await fetchNextjs();

  const paths = nextjs.map((post) => ({
    params: { _id: post._id },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};
