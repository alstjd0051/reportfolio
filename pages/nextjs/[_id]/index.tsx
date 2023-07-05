import React from "react";
import fetchPageInfo from "../../../components/utils/fetchPageInfo";
import fetchSocials from "../../../components/utils/fetchSocials";
import fetchNextjs from "../../../components/utils/fetchNextjs";
import { GetServerSideProps } from "next";
import { NextJS, PageInfo, Social } from "../../../components/lib/typings";
import Header from "../../../components/commons/layout/Header";
import fetchNextjsId from "../../../components/utils/fetchNextjsId";
import CodeBox from "../../../components/commons/items/codeBox";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/commons/items/RichTextComponents";
import { useRouter } from "next/router";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  nextjs: NextJS[];
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const nextjs = await fetchNextjsId(params?._id);
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      socials,
      nextjs,
    },
  };
};

export default function NextIdPage({ pageInfo, socials, nextjs }: Props) {
  const router = useRouter();
  return (
    <>
      <div className="w-full  sticky">
        <Header Home contact pageInfo={pageInfo} socials={socials} />
      </div>

      <main className="py-5 px-20 max-w-7xl">
        <div className=" w-full flex items-center  ">
          {nextjs.map((item) => (
            <div key={item._id}>
              <div className="font-bold text-5xl cursor-pointer flex gap-3 items-center ">
                <span onClick={() => router.push("/nextjs")}>nextjs</span>
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
