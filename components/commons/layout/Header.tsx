import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo, Social } from "../../lib/typings";
import Head from "next/head";
import { BiHelpCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import Weather from "../items/weather";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const Header = ({ socials, pageInfo }: Props) => {
  const router = useRouter();

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
          <SocialIcon
            key={social._id}
            fgColor="gray"
            bgColor="transparent"
            url={social.url}
            target={"_blank"}
          />
        ))}
        <Weather />
      </motion.div>
      <div className="flex items-center justify-between">
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
        <motion.div
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
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
