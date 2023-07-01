import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "../../lib/typings";
import { urlFor } from "../../../sanity";
import { useRouter } from "next/router";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  const router = useRouter();

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute"
        onClick={() => router.push(`/${skill?.route ? skill.route : ""}`)}
      >
        {skill.route ? (
          <div className=" opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12  md:h-24 md:w-24  xl:w-32 xl:h-32 rounded-full z-0 ">
            <div className="flex items-center justify-center h-full flex-col">
              <p className="text-2xl font-bold text-black opacity-100">
                Click Me
              </p>
              <p className="text-3xl font-bold text-black opacity-100">
                {skill.progress ? (
                  `${skill.progress}%`
                ) : (
                  <p className="text-base text-white p-1 rounded-lg bg-red-600">
                    Studying
                  </p>
                )}
              </p>
            </div>
          </div>
        ) : (
          <div className=" opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:h-24 md:w-24  xl:w-32 xl:h-32 rounded-full z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className=" text-sm md:text-3xl font-bold text-black opacity-100">
                {`${skill.progress}%`}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Skill;
