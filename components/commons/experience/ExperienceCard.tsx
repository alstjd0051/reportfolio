/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../../sanity";
import { Experience } from "../../lib/typings";
import { useRouter } from "next/dist/client/router";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const router = useRouter();
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
      w-[500px] md:w-[600px] xl:w-[900px]  snap-center  bg-[#292929] p-10 
      hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-28 "
      key={experience._id}
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 xl:w-[200px] xl:h-[200px]  object-scale-down"
        src={urlFor(experience?.companyImage).url()}
        onClick={() => router.push(experience.page)}
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        {experience.content && (
          <p className="font-bold text-lg  mt-1 ">{experience?.content}</p>
        )}
        <div className="flex space-x-2 my-2 ">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt="Img"
            />
          ))}
        </div>
        {/* <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString()} ~
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString()}
        </p> */}
        <ul className="list-disc space-y-4 ml-5 text-lg w-4/5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-yellow-400 pr-5">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
