import React from "react";
import useSWR from "swr";
import BgModel from "../../unit/threejs/model";
import { Content } from "../../lib/typings";
import ContentCard from "../items/ContentCard";

const BlogContent = () => {
  const { data } = useSWR<Content[]>("/api/content");
  console.log(data);
  return (
    <div className="h-screen relative ">
      <div className="flex gap-5 items-center h-full justify-center  ">
        <div className="max-w-3xl md:block hidden">
          <div id="container">
            {data?.map(({ id, code, title }, i) => (
              <div id="item" key={i}>
                <ContentCard code={code} title={title} id={id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <BgModel />
      </div>
    </div>
  );
};

export default BlogContent;
