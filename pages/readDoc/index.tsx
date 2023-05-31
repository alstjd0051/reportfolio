import React from "react";
import Header from "../../components/commons/layout/Header";
import { PageInfo, Social } from "../../components/lib/typings";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import { GetStaticProps } from "next";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const readDoc = ({ pageInfo, socials }: Props) => {
  return (
    <>
      <Header pageInfo={pageInfo} socials={socials} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      socials,
    },
    revalidate: 100,
  };
};

export default readDoc;
