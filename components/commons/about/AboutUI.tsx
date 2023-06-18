import React from "react";
import { motion } from "framer-motion";
import { PageInfo, Resume } from "../../lib/typings";
import { urlFor } from "../../../sanity";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfo;
  resume?: Resume[];
};

const About = ({ pageInfo, resume }: Props) => {
  const router = useRouter();
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
        className=" md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg  md:w-96 md:h-96 xl:h-80 xl:w-[500px] mt-28 md:mt-10   "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="md:text-4xl text-2xl font-semibold">
          Hello My name&apos;s {pageInfo?.name}
          <br /> I&apos;m &nbsp;
          <span className="underline decoration-[#F5DF4D] ">
            {pageInfo.role}
          </span>
        </h4>

        <div className="flex flex-col items-start gap-0">
          {resume?.map((resume) => (
            <div key={resume._id} className="flex flex-col gap-10 p-2">
              <div className="flex gap-2 items-center">
                <div onClick={() => router.push(resume.url!)}>
                  <h1 className="font-extrabold hover-underline-animation text-lg cursor-pointer  ">
                    {resume.title}
                  </h1>
                </div>
                <div className="flex items-center gap-3 ">
                  <p className="text-sm font-extralight">{resume.subTitle}</p>
                  <div className="flex items-center text-red-300">
                    <p>{resume.dateStarted} ~ </p>
                    <p>{resume.dateEnded}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
