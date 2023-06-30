import React from "react";
import Header from "../../components/commons/layout/Header";
import { NestJS, PageInfo, Social } from "../../components/lib/typings";
import ContentBox from "../../components/commons/items/contentBox";
import { GetStaticProps } from "next";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchNestjs from "../../components/utils/nestjs/fetchNestjs";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  nestjs: NestJS[];
};

export const getStaticProps: GetStaticProps = async () => {
  const paegeInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const nestjs = await fetchNestjs();
  return {
    props: {
      paegeInfo,
      socials,
      nestjs,
    },
    revalidate: 1000,
  };
};

const NestPage = ({ socials, pageInfo, nestjs }: Props) => {
  console.log(nestjs);
  return (
    <>
      <Header Home pageInfo={pageInfo} socials={socials} />

      <main>
        <div className="flex flex-col px-20   ">
          <hr className="w-full py-5 " />
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-items-center gap-10">
            {nestjs?.map((item) => (
              <ContentBox
                title={item.title}
                image={item?.image}
                createdAt={item?.createdAt}
                key={item._id}
                route={`/nestjs/${item.title}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default NestPage;
