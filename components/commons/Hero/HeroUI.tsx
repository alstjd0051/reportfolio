import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../../sanity";
import { PageInfo } from "../../lib/typings";
import BackGroundCircles from "../BackGroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const HeroUI = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, My Name's`, `${pageInfo?.name}`, "Front-End", "Sommelier"],
    loop: true,
    delaySpeed: 50,
  });

  return (
    <div className="h-screen flex flex-col space-y-16 items-center justify-center text-center overflow-hidden ">
      <BackGroundCircles />
      <img
        className="relative rounded-full h-60 w-60  mx-auto object-fill"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-lg font-bold uppercase text-[#DBDBDB] pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
          <span className="mr-3 sm:text-2xl md:text-6xl">{text}</span>
          <Cursor cursorColor="#F5DF4D" />
        </h1>
        <div className="pt-5 hidden lg:flex ">
          <Link href="#about">
            <p className="heroButton">About</p>
          </Link>
          {/* <Link href="#experience">
            <p className="heroButton">SideProject</p>
          </Link> */}
          <Link href="#skills">
            <p className="heroButton">Skills</p>
          </Link>
          <Link href="#projects">
            <p className="heroButton">Projects</p>
          </Link>
          <Link href="#contact">
            <p className="heroButton">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroUI;
