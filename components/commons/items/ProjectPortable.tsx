import Image from "next/image";
import Link from "next/link";
import { atelierSeasideDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { urlFor } from "../../../sanity";
import { motion } from "framer-motion";
import Refractor from "react-refractor";

export const ProjectPortable = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <motion.img
            src={urlFor(value).url()}
            alt="Blog Post Image"
            className="object-fill"
          />
        </>
      );
    },
    code: ({ value }: any) => {
      return (
        <>
          <SyntaxHighlighter
            style={atelierSeasideDark}
            language={value.language}
            customStyle={{ whiteSpace: "pre-wrap" }}
          >
            {value.code}
          </SyntaxHighlighter>
        </>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-3 sm:text-lg md:text-xl list-disc space-y-5">
        <li>{children}</li>
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-7 mt-2sm:text-lg md:text-xl list-decimal">
        {children}
      </ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className={`text-sm leading-3 md:text-base text-center font-normal`}>
        {children}
      </p>
    ),

    h1: ({ children }: any) => (
      <h1
        className={`text-3xl py-4 md:text-4xl  font-bold ${
          children[0]?.props?.value?.hex &&
          `text-[${children[0]?.props?.value?.hex!}]`
        }  `}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl py-4 md:text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl py-4 md:text-2xl font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg py-4 md:text-xl font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#f7ab0a] sm:text-lg md:text-xl border-l-4 pl-5 px-4 py-2 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer nopener"
        : undefined;
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;

      return (
        <Link rel={rel} href={`${value?.href}`} target={target}>
          <a className="hover-underline-animation">{children}</a>
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className={`text-sm py-1 md:text-lg font-bold`}>
        {children}
      </strong>
    ),
  },
};
