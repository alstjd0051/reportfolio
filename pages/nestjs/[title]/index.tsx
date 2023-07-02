import React from "react";
import fetchPageInfo from "../../../components/utils/fetchPageInfo";
import fetchSocials from "../../../components/utils/fetchSocials";
import { GetStaticPaths, GetStaticProps } from "next";
import { NestJS, PageInfo, Social } from "../../../components/lib/typings";
import Header from "../../../components/commons/layout/Header";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/commons/items/RichTextComponents";
import "easymde/dist/easymde.min.css";
import fetchNestjsId from "../../../components/utils/nestjs/fetchNestjsID";
import fetchNestjs from "../../../components/utils/nestjs/fetchNestjs";
import { useRouter } from "next/router";

type Props = {
  pageInfo?: PageInfo;
  socials?: Social[];
  nestjs: NestJS[];
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const nestjs = await fetchNestjsId(params?.title);
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      socials,
      nestjs,
    },
    revalidate: 1000,
  };
};

export default function NextIdPage({ pageInfo, socials, nestjs }: Props) {
  const router = useRouter();
  return (
    <>
      <Header Home contact pageInfo={pageInfo} socials={socials} />

      <main className="py-5 px-20 max-w-7xl">
        <div className=" w-full flex items-center  ">
          {nestjs.map((item) => (
            <div className="w-full" key={item._id}>
              <h1 className="flex-1  py-2 font-bold  pl-3 dark:bg-white/40 bg-black text-white/10 dark:text-white/60 items-center flex gap-3 ">
                <p
                  className="cursor-pointer"
                  onClick={() => router.push("/nestjs")}
                >
                  nestjs /
                </p>
                <p>{item.title}</p>
              </h1>
              <div className="flex flex-col sm:mt-0 md:mt-10 flex-1 ">
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
  const nestjs = await fetchNestjs();

  const paths = nestjs.map((post) => ({
    params: { title: post.title },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};
