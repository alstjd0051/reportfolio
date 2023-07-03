import React, { Suspense, useEffect, useState } from "react";
import { NextJS, PageInfo, Skill, Social } from "../../components/lib/typings";
import Header from "../../components/commons/layout/Header";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import { GetStaticProps } from "next";
import fetchSocials from "../../components/utils/fetchSocials";
import Footer from "../../components/commons/layout/Footer";
import fetchNextjs from "../../components/utils/fetchNextjs";
import ContentBox from "../../components/commons/items/contentBox";
import fetchSkills from "../../components/utils/fetchSkills";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  nextjs: NextJS[];
  skills: Skill[];
};

const NextJSPage = ({ pageInfo, socials, nextjs, skills }: Props) => {
  return (
    <div>
      <Header
        skill={skills}
        Home
        socials={socials}
        pageInfo={pageInfo}
        contact
      />
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
    </div>
  );
};

export default NextJSPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const nextjs = await fetchNextjs();
  const skills = await fetchSkills();
  return {
    props: {
      pageInfo,
      socials,
      nextjs,
      skills,
    },
    revalidate: 1000,
  };
};
