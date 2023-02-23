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
    words: [`Hi, My Name's`, `${pageInfo?.name}`, "Front-End", "Developer"],

    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-16 items-center justify-center text-center overflow-hidden ">
      <BackGroundCircles />
      <img
        className="relative rounded-full h-52 w-52 mx-auto object-cover"
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
            <a className="heroButton">About</a>
          </Link>
          <Link href="#experience">
            <a className="heroButton">Experience</a>
          </Link>
          <Link href="#skills">
            <a className="heroButton">Skills</a>
          </Link>
          <Link href="#projects">
            <a className="heroButton">Projects</a>
          </Link>
          <Link href="#contact">
            <a className="heroButton">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroUI;
