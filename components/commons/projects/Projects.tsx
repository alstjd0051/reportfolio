import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../../lib/typings";
import { urlFor } from "../../../sanity";
import { useRouter } from "next/dist/client/router";
import { GetServerSideProps, GetStaticProps } from "next";
import fetchProjects from "../../utils/fetchProjects";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const router = useRouter();
  const [onhover, setOnhover] = useState(false);
  const hoverme = () => {
    return setOnhover(!onhover);
  };
  console.log(projects.slice(1).map((item) => item.title));
  // console.log(projects.map((item) => item.title));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500 ">
        Projects
      </h3>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-[#939597] scrollbar-thumb-[#F5DF4D]  ">
        {projects
          ?.slice(1)
          ?.map(
            ({ _id, image, linkToBuild, title, summary, technologies }, i) => (
              <div
                key={_id}
                className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 translate-y-10 "
                onClick={() => router.push(linkToBuild)}
              >
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={urlFor(image).url()}
                  className="w-[70%]   sm:min-h-[355px] cursor-pointer  "
                  onMouseOver={hoverme}
                />
                <div className="max-w-6xl space-y-10 px-0  md:px-10">
                  <h4 className="text-center text-4xl font-semibold">
                    {title}
                  </h4>

                  <p className="text-center text-lg md:text-left">{summary}</p>
                  <div className="flex flex-row">
                    {technologies?.map((index) => (
                      <div className="space-x-2 m-2 " key={index._id}>
                        <img
                          className="w-10 h-10 rounded-full"
                          src={urlFor(index.image).url()}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <div className="absolute top-[30px] left-0 h-[500px] w-full -skew-y-12 bg-[#F5DF4D]/10 " />
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const projects = await fetchProjects();
  return {
    props: {
      projects,
    },
  };
};

export default Projects;
