import React from "react";
import fetchPageInfo from "../../../components/utils/fetchPageInfo";
import fetchSocials from "../../../components/utils/fetchSocials";
import fetchNextjs from "../../../components/utils/fetchNextjs";
import { GetStaticPaths, GetStaticProps } from "next";
import { Flutter, PageInfo, Social } from "../../../components/lib/typings";
import Header from "../../../components/commons/layout/Header";
import CodeBox from "../../../components/commons/items/codeBox";
import fetchFlutterId from "../../../components/utils/flutter/fetchFlutterId";
import fetchFlutter from "../../../components/utils/flutter/fetchFlutter";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/commons/items/RichTextComponents";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  flutter: Flutter[];
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const flutter = await fetchFlutterId(params?.title);
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      socials,
      flutter,
    },
    revalidate: 1000,
  };
};

export default function NextIdPage({ pageInfo, socials, flutter }: Props) {
  return (
    <>
      <Header Home contact pageInfo={pageInfo} socials={socials} />

      <main className="py-5 px-20 max-w-7xl">
        <div className=" w-full flex items-center  ">
          {flutter.map((item) => (
            <div className="w-full" key={item._id}>
              <h1>{item.title}</h1>
              <div className="flex flex-col mt-10 flex-1 ">
                {item.content?.map((code) => (
                  <>
                    {/* <CodeBox
                      key={code._key}
                      code={code?.code}
                      language={code?.language}
                    /> */}
                  </>
                ))}
                <PortableText
                  value={item?.content}
                  components={RichTextComponents}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const flutter = await fetchFlutter();

  const paths = flutter.map((post) => ({
    params: { title: post.title },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};
