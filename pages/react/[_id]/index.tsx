import React from "react";
import fetchPageInfo from "../../../components/utils/fetchPageInfo";
import fetchSocials from "../../../components/utils/fetchSocials";
import fetchNextjs from "../../../components/utils/fetchNextjs";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  NextJS,
  PageInfo,
  ReactJS,
  Social,
} from "../../../components/lib/typings";
import Header from "../../../components/commons/layout/Header";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/commons/items/RichTextComponents";
import { useRouter } from "next/router";
import fetchReact from "../../../components/utils/fetchReact";
import fetchReactjsId from "../../../components/utils/fetchReactjsId";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  reactjs: ReactJS[];
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const reactjs = await fetchReactjsId(params?._id);
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      socials,
      reactjs,
    },
    revalidate: 10,
  };
};

export default function NextIdPage({ pageInfo, socials, reactjs }: Props) {
  const router = useRouter();

  return (
    <>
      <div className="w-full  sticky">
        <Header Home contact pageInfo={pageInfo} socials={socials} />
      </div>

      <main className="py-5 px-20 max-w-7xl">
        <div className=" w-full flex items-center  ">
          {reactjs.map((item) => (
            <div key={item._id}>
              <div className="font-bold cursor-pointer flex gap-3 items-center text-xl md:text-xl lg:text-2xl xl:text-3xl ">
                <span onClick={() => router.push("/react")}>reactjs</span>
                <span>/</span>
                <h1 className="">{item.title}</h1>
              </div>
              <div className="flex flex-col mt-10 ">
                <PortableText
                  value={item.content}
                  components={RichTextComponents}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-52"></div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const reactjs = await fetchReact();

  const paths = reactjs.map((post) => ({
    params: { _id: post._id },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};
