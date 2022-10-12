import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo, Social } from "../../lib/typings";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const Header = ({ socials, pageInfo }: Props) => {
  const { data: session } = useSession();
  console.log("HERE IS DATA", session);
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <Head>
        <title key="title">{pageInfo.name} - PortFolio</title>
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            fgColor="gray"
            bgColor="transparent"
            url={social.url}
          />
        ))}
      </motion.div>
      <div className="flex items-center justify-between">
        <Link href="#contact">
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer mx-5 "
          >
            {/* Nav */}
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
              Get in Touch
            </p>
          </motion.div>
        </Link>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col  items-center justify-center  ">
            {session?.user ? (
              <>
                <p>{session?.user.name}</p>
                <button onClick={() => signOut()}>Sign Out</button>
              </>
            ) : (
              <button onClick={() => signIn("google")}>Sign In</button>
            )}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
