"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/24/solid";
import { SiBloglovin } from "react-icons/si";
import { useRouter } from "next/navigation";
import { PageInfo, Skill, Social } from "@/typings";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "../items/Avatar";

type Props = {
  socials?: Social[];
  pageInfo?: PageInfo;
  contact?: boolean;
  Home?: boolean;
  Lean?: boolean;
  skill?: Skill[];
};

const Header = ({ Home, Lean, contact, pageInfo, skill, socials }: Props) => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState(false);
  const onCLickTooltip = () => {
    setTooltip(!tooltip);
  };
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
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
          <div className="flex items-center gap-5">
            {socials?.map((social) => (
              <div key={social._id} className="">
                <SocialIcon
                  fgColor="gray"
                  bgColor="transparent"
                  url={social.url}
                  target={"_blank"}
                  className="hover:fill-gray-300"
                />
              </div>
            ))}
            <SiBloglovin
              onClick={onCLickTooltip}
              className="w-8 h-8  cursor-pointer fill-gray-600 hover:fill-gray-300  "
            />
          </div>
          {tooltip && (
            <>
              <motion.div
                initial={{ y: -500, opacity: 0, scale: 1 }}
                animate={{ x: 80, y: 25, opacity: 0.5, scale: 1 }}
                className="absolute left-14 bg-white/75 flex gap-3 rounded-md text-black/60 font-bold  px-4 py-1 bottom-2 "
              >
                {skill?.map((skill) => {
                  if (skill.route !== undefined || null)
                    return (
                      <h1
                        className="cursor-pointer hover:text-red-600"
                        key={skill._id}
                        onClick={() => router.push(`${skill.route}`)}
                      >
                        {skill.route}
                      </h1>
                    );
                })}
              </motion.div>
            </>
          )}
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
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user?.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <button onClick={() => signOut()}>Sign Out</button>
            ) : (
              <button onClick={() => signIn()}>Sign In</button>
            )}
          </li>
        </div>
      </header>
    </>
  );
};

export default Header;
