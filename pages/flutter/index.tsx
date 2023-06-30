import React from "react";
import Header from "../../components/commons/layout/Header";
import { Flutter, PageInfo, Social } from "../../components/lib/typings";
import ContentBox from "../../components/commons/items/contentBox";
import { GetStaticProps } from "next";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchFlutter from "../../components/utils/flutter/fetchFlutter";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  flutter: Flutter[];
};

export const getStaticProps: GetStaticProps = async () => {
  const paegeInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const flutter = await fetchFlutter();
  return {
    props: {
      paegeInfo,
      socials,
      flutter,
    },
  };
};

const Flutter = ({ socials, pageInfo, flutter }: Props) => {
  console.log(flutter);
  return (
    <>
      <Header Home pageInfo={pageInfo} socials={socials} />

      <main>
        <div className="flex flex-col px-20   ">
          <hr className="w-full py-5 " />
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-items-center gap-10">
            {flutter?.map((item) => (
              <ContentBox
                title={item.title}
                image={item.image}
                createdAt={item?.createdAt}
                key={item._id}
                route={`/flutter/${item.title}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Flutter;
