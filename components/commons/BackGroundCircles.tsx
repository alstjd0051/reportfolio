import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackGroundCircles = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333] rounded-full h-[200px] w-[200px] mt-60 animate-ping " />
      <div className="rounded-full border border-[#331] h-[300px] w-[300px] absolute mt-[22rem] " />
      <div className="rounded-full border border-[#332] h-[500px] w-[500px] absolute mt-[22rem] " />
      <div className="rounded-full border border-[#F5DF4D] opacity-20 h-[650px] w-[650px] absolute  mt-[22rem] animate-pulse " />
      <div className="rounded-full border border-[#333] opacity-20 h-[800px] w-[800px] absolute mt-[22rem]  " />
    </motion.div>
  );
};

export default BackGroundCircles;
