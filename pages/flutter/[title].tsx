import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Flutter, PageInfo, Social } from "../../components/lib/typings";
import Header from "../../components/commons/layout/Header";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchFlutter from "../../components/utils/fetchFlutter";
import CodeBox from "../../components/commons/items/codeBox";
import fetchFlutterId from "../../components/utils/fetchFlutterId";

type Props = {
  pageInfo: PageInfo;
  social: Social[];
  flutter: Flutter[];
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const flutter = await fetchFlutterId(params?.title);
  const social = await fetchSocials();
  const pageInfo = await fetchPageInfo();
  return {
    props: {
      social,
      pageInfo,
      flutter,
    },
    revalidate: 1000,
  };
};

const DetailFlutter = ({ pageInfo, social, flutter }: Props) => {
  return (
    <div>
      <Header Home contact socials={social} pageInfo={pageInfo} back />

      <main className="py-5 px-20 max-w-7xl">
        <div className="w-full flex items-center">
          {flutter?.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <div className="flex flex-col mt-10 py-3 ">
                {item.content?.map((code) => (
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
    </div>
  );
};

export default DetailFlutter;

export const getStaticPaths: GetStaticPaths = async () => {
  const flutter = await fetchFlutter();

  const paths = flutter.map((post) => ({
    params: { title: post.title },
  }));

  return {
    paths,
    fallback: "blocking", // false or "blocking"
  };
};
