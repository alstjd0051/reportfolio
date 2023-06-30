import React, { useEffect } from "react";
import fetchPageInfo from "../../../components/utils/fetchPageInfo";
import fetchSocials from "../../../components/utils/fetchSocials";
import fetchNextjs from "../../../components/utils/fetchNextjs";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextJS, PageInfo, Social } from "../../../components/lib/typings";
import Header from "../../../components/commons/layout/Header";
import fetchNextjsId from "../../../components/utils/fetchNextjsId";
import CodeBox from "../../../components/commons/items/codeBox";

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
  console.log(nextjs.map((item) => item.code));
  return (
    <>
      <Header Home contact pageInfo={pageInfo} socials={socials} />

      <main className="py-5 px-20 max-w-7xl">
        <div className=" w-full flex items-center  ">
          {nextjs.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <div className="flex flex-col mt-10 ">
                {item.code?.map((code) => (
                  <>
                    <CodeBox
                      key={code._key}
                      code={code?.code}
                      language={code?.language}
                    />
                  </>
                ))}
              </div>
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
