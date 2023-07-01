import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../../lib/typings";

type Props = {
  skills: SkillType[];
};

const SkillUI = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a sill for currency profieciency
      </h3>
      <div className="pt-44 grid overflow-x-scroll  grid-cols-8  md:grid-cols-8 gap-5 relative scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6667ab]   ">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillUI;
