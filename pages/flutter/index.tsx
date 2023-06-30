import { GetStaticProps } from "next";
import React from "react";
import { Flutter, PageInfo, Social } from "../../components/lib/typings";
import Header from "../../components/commons/layout/Header";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchFlutter from "../../components/utils/fetchFlutter";
import ContentBox from "../../components/commons/items/contentBox";
import { useRouter } from "next/router";

type Props = {
  flutter: Flutter[];
  pageInfo: PageInfo;
  socials: Social[];
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
  const router = useRouter();
  return (
    <>
      <Header Home contact pageInfo={pageInfo} back socials={socials} />

      <main className="flex flex-col px-20">
        <div className="grid lg:grid-cols-4 mt-5 sm:grid-cols-2 items-center justify-items-center gap-10">
          {flutter.map((flutter) => (
            <ContentBox
              key={flutter._id}
              title={flutter.title ? flutter.title : "untitle"}
              createdAt={flutter._createdAt}
              image={flutter.sumbnail}
              onClick={() => router.push(`/flutter/${flutter.title}`)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default FlutterPage;
