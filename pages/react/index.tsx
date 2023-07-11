import { GetStaticProps } from "next";
import React, { useState } from "react";
import { PageInfo, ReactJS, Skill, Social } from "../../components/lib/typings";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSkills from "../../components/utils/fetchSkills";
import fetchReact from "../../components/utils/fetchReact";
import Header from "../../components/commons/layout/Header";
import { ListBulletIcon, PhotoIcon } from "@heroicons/react/24/solid";
import ContentBox from "../../components/commons/items/contentBox";
import BoardList from "../../components/commons/items/BoardList";
import fetchSocials from "../../components/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  reactJS: ReactJS[];
  socials: Social[];
};

const ReactPage = ({ pageInfo, skills, reactJS, socials }: Props) => {
  const [changedBoard, setChangedBoard] = useState(false);
  const onClickState = () => {
    setChangedBoard(!changedBoard);
  };
  return (
    <div>
      <Header skill={skills} Home socials={socials} pageInfo={pageInfo} />
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
              ? reactJS?.map((item) => (
                  <ContentBox
                    title={item.title}
                    image={item.sumbnail}
                    createdAt={item?.createdAt}
                    key={item._id}
                    route={`/react/${item._id}`}
                  />
                ))
              : reactJS.map((item) => (
                  <>
                    <BoardList
                      key={item._id}
                      createdAt={item?.createdAt}
                      title={item.title}
                      route={`react/${item._id}`}
                    />
                  </>
                ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReactPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const reactJS = await fetchReact();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      skills,
      reactJS,
      socials,
    },
    revalidate: 10,
  };
};
