import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo, Skill, Social } from "../../lib/typings";
import { useRouter } from "next/router";
import { ArrowLeftOnRectangleIcon, HomeIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";

import useSWR from "swr";
import { SiBloglovin } from "react-icons/si";

type Props = {
  socials?: Social[];
  pageInfo?: PageInfo;
  contact?: boolean;
  Home?: boolean;
  Lean?: boolean;
  skill?: Skill[];
};

const Header = ({ contact, Home }: Props) => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);
  const { data: session } = useSession();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,
    (url) => fetch(url, { cache: "no-store" }).then((res) => res.json())
  );

  const socials: Social[] = data?.socials;

  return (
    <header className="py-7 px-[10vw] fixed w-full   flex items-center  justify-between  z-20 xl:items-center">
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
                className="hover:fill-gray-300 "
              />
            </div>
          ))}
          <Link href={"http://tylerblog.store/"} target={"_blank"}>
            <SiBloglovin
              size={30}
              className="hover:fill-gray-300 fill-gray-600 cursor-pointer"
              title="Blog"
            />
          </Link>
        </div>
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
  );
};

export default Header;
