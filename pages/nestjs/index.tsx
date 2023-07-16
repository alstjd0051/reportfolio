import React, { useState } from "react";
import Header from "../../components/commons/layout/Header";
import { NestJS, PageInfo, Social } from "../../components/lib/typings";
import ContentBox from "../../components/commons/items/contentBox";
import { GetServerSideProps, GetStaticProps } from "next";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchNestjs from "../../components/utils/nestjs/fetchNestjs";
import { ListBulletIcon, PhotoIcon } from "@heroicons/react/24/outline";
import BoardList from "../../components/commons/items/BoardList";
import useSWR from "swr";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const paegeInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  return {
    props: {
      paegeInfo,
      socials,
    },
  };
};

const NestPage = ({ socials, pageInfo }: Props) => {
  const [changedBoard, setChangedBoard] = useState(false);
  const onClickState = () => {
    setChangedBoard(!changedBoard);
  };
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/nestjs/getNestjs`
  );
  console.log(data);
  const nestjs: NestJS[] = data?.nestjs;

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
                : "flex items-center flex-col"
            }`}
          >
            {changedBoard
              ? nestjs?.map((item) => (
                  <ContentBox
                    title={item.title}
                    image={item?.image}
                    createdAt={item?.createdAt}
                    key={item._id}
                    route={`/nestjs/${item._id}`}
                  />
                ))
              : nestjs?.map((item) => (
                  <>
                    <BoardList
                      key={item._id}
                      createdAt={item?.createdAt}
                      title={item.title}
                      route={`nestjs/${item._id}`}
                    />
                  </>
                ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default NestPage;
