import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo, Social } from "../../lib/typings";
import Head from "next/head";
import { BiHelpCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import Weather from "../items/weather";
import { useGeoLocation } from "../../lib/hooks/useGeoLocation";
import { SiBloglovin } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
  contact?: boolean;
};

const geolocationOption = {
  enableHightAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

const Header = ({ socials, pageInfo, contact }: Props) => {
  const router = useRouter();
  const { location, error } = useGeoLocation(geolocationOption);

  return (
    <header className="sticky top-0 py-7 px-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <Head>
        <title key="title">{pageInfo?.name} - PortFolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials?.map((social) => (
          <div key={social._id} className="flex items-center gap-5">
            <AiFillHome
              className="text-gray-700 w-7 h-7 cursor-pointer hover:text-gray-300 "
              onClick={() => router.push("/")}
            />
            <Link href={"https://tylerblog.store/"} target="">
              <SiBloglovin
                target={"_self"}
                className="text-gray-700 w-7 h-7 cursor-pointer hover:text-gray-300 "
              />
            </Link>
            <SocialIcon
              fgColor="gray"
              bgColor="transparent"
              url={social.url}
              target={"_blank"}
              className="hover:fill-gray-300"
            />
            {location && <Weather location={location} />}
          </div>
        ))}
      </motion.div>
      <div className="flex items-center justify-between">
        {contact && (
          <Link href="#contact">
            <motion.div
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-row items-center text-gray-300 cursor-pointer mx-2 "
            >
              {/* Nav */}
              <SocialIcon
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
              />
              <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
                Contect Me
              </p>
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
  );
};

export default Header;
