import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo, Skill, Social } from "../../lib/typings";
import Head from "next/head";
import { useRouter } from "next/router";
import { ArrowLeftOnRectangleIcon, HomeIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import fetchSocials from "../../utils/fetchSocials";

type Props = {
  socials?: Social[];
  pageInfo?: PageInfo;
  contact?: boolean;
  Home?: boolean;
  Lean?: boolean;
  skill?: Skill[];
};

const Header = ({ socials, contact, Home, skill }: Props) => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title key="title">Tyler - PortFolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header className="py-7 px-5  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          <div className="flex items-center gap-5">
            {socials?.map(({ title, url }, i) => (
              <div key={i} className="">
                <SocialIcon
                  fgColor="gray"
                  bgColor="transparent"
                  url={url}
                  target={"_blank"}
                  className="hover:fill-gray-300"
                />
              </div>
            ))}
          </div>
          {/* Blog */}
          {/* {tooltip && (
            <SiBloglovin
              onClick={onCLickTooltip}
              className="w-8 h-8  cursor-pointer fill-gray-600 hover:fill-gray-300  "
            />
            <motion.div
              initial={{ y: 500, opacity: 1, scale: 3 }}
              animate={{ x: 110, y: 50, opacity: 0.5, scale: 1 }}
              className="absolute  bg-white/75 flex gap-3 rounded-md text-black/60 font-bold  px-4 py-1  "
            >
              <Link target="_blank" href={"https://www.tylerblog.store/"}>
                making blog...
              </Link>
            </motion.div>
          )} */}
        </motion.div>
        <div className="flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3">
              <img
                src={session.user?.image!}
                alt="ProfileImg"
                className="w-9 rounded-full hidden sm:block"
              />
              <ArrowLeftOnRectangleIcon
                className="w-7 fill-white cursor-pointer "
                onClick={() => signOut()}
              />

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
              </div>
            </div>
          ) : (
            <div className="bg-transparent ">
              <motion.button
                whileHover={{
                  scale: 1.2,
                  rotate: "-360deg",
                  x: -50,
                  y: 30,
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 0.01],
                  },
                }}
                className=""
                onClick={() => signIn()}
              >
                SignIn
              </motion.button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

export const getServerSideProps: GetServerSideProps = async () => {
  const social = await fetchSocials();
  return {
    props: {
      social,
    },
  };
};
