import React from "react";
import Header from "../../components/commons/layout/Header";
import { Flutter, PageInfo, Social } from "../../components/lib/typings";
import { GetStaticProps } from "next";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchFlutter from "../../components/utils/fetchFlutter";
import ContentBox from "../../components/commons/items/contentBox";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  flutter: Flutter[];
};

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const flutter = await fetchFlutter();
  return {
    props: {
      pageInfo,
      socials,
      flutter,
    },
  };
};

const FlutterPage = ({ pageInfo, socials, flutter }: Props) => {
  console.log(flutter);
  const router = useRouter();
  return (
    <div>
      <Header Home contact pageInfo={pageInfo} socials={socials} />

      <main>
        {flutter?.map((flutter) => (
          <ContentBox
            key={flutter._id}
            title={flutter.title}
            createdAt={flutter._createdAt}
            onClick={() => router.push(`/flutter/${flutter.title}`)}
          />
        ))}
      </main>
    </div>
  );
};

export default FlutterPage;
