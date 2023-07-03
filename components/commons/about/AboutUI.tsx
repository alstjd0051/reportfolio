import React from "react";
import { motion } from "framer-motion";
import { PageInfo, Resume } from "../../lib/typings";
import { urlFor } from "../../../sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../items/RichTextComponents";

type Props = {
  pageInfo: PageInfo;
  resume: Resume[];
};

const About = ({ pageInfo, resume }: Props) => {
  const router = useRouter();
  console.log(pageInfo);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="md:mb-0 flex-shrink-0 h-56 rounded-full object-cover md:rounded-lg  md:w-52 md:h-52 xl:h-80 xl:w-[500px] mt-28 md:mt-10   "
      />

      <div className="space-y-10 px-0  ">
        <h4 className="lg:text-4xl sm:text-2xl font-semibold ">
          안녕하세요 저는 {pageInfo?.name} 입니다.
          <br /> 저는
          <span className="underline  decoration-[#F5DF4D] underline-offset-[10px] ">
            {pageInfo.role} 개발자입니다.
          </span>
        </h4>
        <div className="flex flex-col gap-3 ">
          <PortableText
            components={RichTextComponents}
            value={pageInfo?.backgroundInformation}
          />
          <div className="pt-5">
            {resume.map((item) => (
              <div key={item._id} className="   ">
                <div className="flex items-center gap-2 ">
                  <Link className="  " href={item.url ? item.url : ""}>
                    <h1 className=" hover-underline-animation hover:text-yellow-300 border-r  border-solid pr-2 text-sm  xl:text-lg  ">
                      {item.title}
                    </h1>
                  </Link>
                  <div>
                    <p className="basis-1/4 sm:text-sm md:text-base">
                      {item.subTitle}
                    </p>
                  </div>
                  <p className="text-red-300 sm:text-xl hidden md:block  md:text-sm 2xl:text-lg">
                    {item.dateStarted} - {item.dateEnded}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
