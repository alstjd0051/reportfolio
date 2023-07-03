import React, { useEffect, useState } from "react";
import Header from "../../components/commons/layout/Header";
import { Flutter, PageInfo, Social } from "../../components/lib/typings";
import ContentBox from "../../components/commons/items/contentBox";
import { GetStaticProps } from "next";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import fetchFlutter from "../../components/utils/flutter/fetchFlutter";
import { ListBulletIcon, PhotoIcon } from "@heroicons/react/24/outline";
import BoardList from "../../components/commons/items/BoardList";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  flutter: Flutter[];
};

export const getStaticProps: GetStaticProps = async () => {
  const paegeInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const flutter = await fetchFlutter();
  return {
    props: {
      paegeInfo,
      socials,
      flutter,
    },
    revalidate: 10,
  };
};

const Flutter = ({ socials, pageInfo, flutter }: Props) => {
  const [changedBoard, setChangedBoard] = useState(false);
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
                : "flex items-center flex-col"
            }`}
          >
            {changedBoard
              ? flutter?.map((item) => (
                  <ContentBox
                    title={item.title}
                    image={item?.image}
                    createdAt={item?.createdAt}
                    key={item._id}
                    route={`/flutter/${item.title}`}
                  />
                ))
              : flutter.map((item) => (
                  <>
                    <BoardList
                      key={item._id}
                      createdAt={item?.createdAt}
                      title={item.title}
                      route="flutter"
                    />
                  </>
                ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Flutter;
