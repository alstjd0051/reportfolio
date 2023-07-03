import React, { Suspense, useEffect, useState } from "react";
import { NextJS, PageInfo, Social } from "../../components/lib/typings";
import Header from "../../components/commons/layout/Header";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import { GetStaticProps } from "next";
import fetchSocials from "../../components/utils/fetchSocials";
import Footer from "../../components/commons/layout/Footer";
import fetchNextjs from "../../components/utils/fetchNextjs";
import ContentBox from "../../components/commons/items/contentBox";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  nextjs: NextJS[];
};

const NextJSPage = ({ pageInfo, socials, nextjs }: Props) => {
  return (
    <div>
      <Header Home socials={socials} pageInfo={pageInfo} contact />
      <div className="flex flex-col px-20   ">
        <hr className="w-full py-5 " />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-items-center gap-10">
          {nextjs?.map((item) => (
            <ContentBox
              title={item.title}
              image={item.sumbnail}
              createdAt={item?.createdAt}
              key={item._id}
              route={`/nextjs/${item._id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NextJSPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const nextjs = await fetchNextjs();
  return {
    props: {
      pageInfo,
      socials,
      nextjs,
    },
    revalidate: 1000,
  };
};
