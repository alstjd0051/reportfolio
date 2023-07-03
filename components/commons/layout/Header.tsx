import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo, Skill, Social } from "../../lib/typings";
import Head from "next/head";
import { BiHelpCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import { useGeoLocation } from "../../lib/hooks/useGeoLocation";
import { SiBloglovin } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { HomeIcon, PencilIcon } from "@heroicons/react/24/solid";

type Props = {
  socials?: Social[];
  pageInfo?: PageInfo;
  contact?: boolean;
  Home?: boolean;
  Lean?: boolean;
  skill?: Skill[];
};

const Header = ({ socials, pageInfo, contact, Home, Lean, skill }: Props) => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState(false);

  const onCLickTooltip = () => {
    setTooltip(!tooltip);
  };

  return (
    <>
      <Head>
        <title key="title">Tyler - PortFolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header className="sticky top-0 py-7 px-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          {Home && (
            <div className="pr-5">
              <HomeIcon
                className="w-5 h-5 fill-gray-300 cursor-pointer"
                onClick={() => router.push("/")}
              />
            </div>
          )}

          {socials?.map((social) => (
            <div key={social._id} className="flex items-center gap-5">
              <SocialIcon
                fgColor="gray"
                bgColor="transparent"
                url={social.url}
                target={"_blank"}
                className="hover:fill-gray-300"
              />
              {/* {
              <PencilIcon className="w-5 h-5 fill-gray-500 hover:fill-gray-300" />
            } */}
            </div>
          ))}
          {skill?.map((skill) => {
            if (skill.route !== undefined)
              return (
                <>
                  {skill.route && (
                    <PencilIcon
                      key={skill._id}
                      onClick={onCLickTooltip}
                      className="w-7 h-7 cursor-pointer fill-black bg-gray-600 rounded-full p-1 "
                    />
                  )}
                  {tooltip && (
                    <motion.div
                      initial={{ y: -500, opacity: 0, scale: 1 }}
                      animate={{ y: 0, opacity: 0.5, scale: 1 }}
                      className="absolute left-14 bg-white/75 flex gap-3 rounded-md text-black/60 font-bold  px-4 py-1 bottom-2 "
                    >
                      <h1
                        className="cursor-pointer "
                        onClick={() => router.push(`/${skill.route}`)}
                      >
                        {skill.route}
                      </h1>
                    </motion.div>
                  )}
                </>
              );
          })}
          {/* Social Icons */}
        </motion.div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex items-center justify-between hover:delay-500 transition  "
        >
          {contact && (
            <Link href="#contact">
              <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex  items-center text-gray-300 cursor-pointer mx-2 duration-700 "
              >
                {/* Nav */}
                <SocialIcon
                  className="cursor-pointer"
                  network="email"
                  fgColor="gray"
                  bgColor="transparent"
                />
                {hover && (
                  <p className={`text-sm text-gray-400 `}>Contect Me</p>
                )}
              </motion.div>
            </Link>
          )}
          {/* <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <>
            <div className="flex sm:w-full   ">
              <div className="flex flex-col">
                <BiHelpCircle
                  onClick={() => router.push("/readDoc")}
                  className="w-5 h-5 text-gray-400 cursor-pointer "
                />
              </div>
            </div>
          </>
        </motion.div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
