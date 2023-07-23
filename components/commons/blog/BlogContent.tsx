import React from "react";
import useSWR from "swr";
import { Content } from "../../lib/typings";
import ContentCard from "../items/ContentCard";

const BlogContent = () => {
  const { data } = useSWR<Content[]>("/api/content");
  // console.log(data?.map((item) => item.content));
  return (
    <div className="h-screen relative ">
      <div className="flex gap-5 items-center h-full justify-center  ">
        <div className="max-w-3xl md:block hidden">
          <div id="container">
            {data?.map(({ id, title, _createdAt, content }, i) => (
              <div id="item " key={i}>
                <ContentCard
                  title={title}
                  createdAt={_createdAt}
                  id={id}
                  content={content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
