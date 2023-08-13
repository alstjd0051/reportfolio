import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../../sanity";
import { PageInfo } from "../../lib/typings";
import BackGroundCircles from "../BackGroundCircles";

type Props = {
  pageInfo: PageInfo;
  session?: boolean;
};

const HeroUI = ({ pageInfo, session }: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, My Name's`, `${pageInfo?.name}`, "Front-End", "Sommelier"],
    loop: true,
    delaySpeed: 50,
  });

  const nonSession = () => {
    return alert("Required Login");
  };

  return (
    <section className="h-screen flex flex-col space-y-16 translate-y-20 items-center justify-center text-center overflow-hidden relative ">
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
        <div className="pt-5 hidden lg:flex gap-10 items-center justify-center ">
          <Link href="#about">
            <p className="heroButton">About</p>
          </Link>
          <Link href="#skills">
            <p className="heroButton">Skills</p>
          </Link>
          <Link href="#projects">
            <p className="heroButton">Projects</p>
          </Link>

          <Link href="#contact">
            <p className="heroButton">Contact</p>
          </Link>
          <Link href="#game">
            <p className="heroButton">{`game`.toLocaleUpperCase()}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroUI;
