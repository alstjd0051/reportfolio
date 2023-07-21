import React from "react";
import useSWR from "swr";
import BgModel from "../../unit/threejs/model";
import { Content } from "../../lib/typings";
import ContentCard from "../items/ContentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogContent = () => {
  const { data } = useSWR<Content[]>("/api/content");
  console.log(data);
  return (
    <div className="h-screen relative ">
      <div className="flex gap-5 items-center h-full justify-center  ">
        <div className="max-w-3xl">
          <Swiper
            slidesPerView={2}
            navigation={true}
            modules={[Navigation]}
            className="space-x-4"
          >
            {data?.map(({ id, code, title }, i) => (
              <SwiperSlide className="" key={i}>
                <ContentCard code={code} title={title} id={id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="hidden md:block">
        <BgModel />
      </div>
    </div>
  );
};

export default BlogContent;
