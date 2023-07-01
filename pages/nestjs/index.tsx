import React, { useState } from "react";
import Header from "../../components/commons/layout/Header";
import { NestJS, PageInfo, Social } from "../../components/lib/typings";
import ContentBox from "../../components/commons/items/contentBox";
import { GetStaticProps } from "next";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchNestjs from "../../components/utils/nestjs/fetchNestjs";
import { ListBulletIcon, PhotoIcon } from "@heroicons/react/24/outline";
import BoardList from "../../components/commons/items/BoardList";

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
  const [changedBoard, setChangedBoard] = useState(false);
  console.log(nestjs);
  const onClickState = () => {
    setChangedBoard(!changedBoard);
  };
  return (
    <>
      <Header Home pageInfo={pageInfo} socials={socials} />

      <main>
        <div className="flex flex-col px-20   ">
          <hr className="w-full py-5 " />
          <div className="justify-end flex gap-3 items-center">
            {changedBoard ? (
              <>
                <PhotoIcon className="cursor-pointer w-8 h-8 stroke-2 " />
                <ListBulletIcon
                  onClick={onClickState}
                  className="cursor-pointer w-5 h-5"
                />
              </>
            ) : (
              <>
                <PhotoIcon
                  onClick={onClickState}
                  className="cursor-pointer w-5 h-5"
                />
                <ListBulletIcon className="cursor-pointer w-8 h-8" />
              </>
            )}
          </div>
          <div
            className={`${
              changedBoard
                ? "grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-items-center gap-10"
                : "flex items-center"
            }`}
          >
            {changedBoard
              ? nestjs?.map((item) => (
                  <ContentBox
                    title={item.title}
                    image={item?.image}
                    createdAt={item?.createdAt}
                    key={item._id}
                    route={`/nestjs/${item.title}`}
                  />
                ))
              : nestjs.map((item) => (
                  <BoardList
                    key={item._id}
                    createdAt={item?.createdAt}
                    title={item.title}
                    route="nestjs"
                  />
                ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default NestPage;
