import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo, Social } from "../../lib/typings";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { BiHelpCircle } from "react-icons/bi";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const Header = ({ socials, pageInfo }: Props) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    return [() => signOut(), session?.user?.email];
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  // const dismissHandler = (e: React.FocusEvent<HTMLButtonElement>): void => {
  //   if (e.currentTarget === e.target) setIsOpen(false);
  // };
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
            target={"_blank"}
          />
        ))}
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
              Get in Touch
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
                  onClick={(): void => toggleDropDown()}
                  className="w-5 h-5 text-gray-400 "
                />
                {isOpen && (
                  <div className="relative bg-white flex flex-col md:flex-row items-center justify-center z-50 ">
                    <div className="absolute  bg-inherit  rounded-lg px-2 top-3 md:w-32 text-center py-2  container  ">
                      {/* {session?.user ? (
                        <div className="text-black text-center py-2   ">
                          <button
                            className="py-2 border-b"
                            onClick={() => signOut()}
                          >
                            Sign Out
                          </button>
                          <p className="py-2">{session?.user?.name}</p>
                        </div>
                      ) : (
                        <button
                          className="text-black"
                          onClick={() => signIn("google")}
                        >
                          Sign In
                        </button>
                      )} */}
                      <p className="text-black w-full">To be continued...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

export async function GetServerSideProps() {
  const session = await getSession();
}

/* 
<div className="flex flex-col  items-center justify-center  ">
            {session?.user ? (
              <div className="border">
                <div className="flex relative items-center ">
                  <img
                    src={session.user.image as string}
                    alt=""
                    className="object-cover w-10 h-10 rounded-full "
                  />
                  <div className="flex flex-col items-center ">
                    <p className="text-lg font-bold">{session?.user.name}</p>
                    <p className="text-xs">{session.user.email} </p>
                  </div>
                  <button onClick={() => signOut()}>Sign Out</button>
                </div>
              </div>
            ) : (
              <button onClick={() => signIn("google")}>Sign In</button>
            )}
          </div>
*/
/* 
<div className="relative bg-white flex flex-col md:flex-row items-center justify-center z-50     ">
                    <div className="absolute  bg-inherit  rounded-lg px-2 top-3 ">
                      <div className=" sm:items-center sm:justify-center border-b py-2 md:px-2 px-0 mb:hidden sm:block ">
                        <img
                          src={session.user.image as string}
                          alt=""
                          className={`rounded-full w-5 h-5 sm:w-10 sm:h-10  `}
                        />
                        <p className="lg:text-lg font-semibold text-gray-700 ">
                          {session.user.email}
                        </p>
                      </div>
                      <div className="text-black text-center py-2  ">
                        <button onClick={() => signOut()}>Sign Out</button>
                      </div>
                    </div>
                  </div>
*/
