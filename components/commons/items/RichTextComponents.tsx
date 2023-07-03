import Image from "next/image";
import Link from "next/link";
import { atelierSeasideDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { urlFor } from "../../../sanity";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <Image
            src={urlFor(value).url()}
            alt="Blog Post Image"
            className="object-cover"
          />
        </>
      );
    },
    code: ({ value }: any) => {
      return (
        <>
          <div className="text-clip">
            <SyntaxHighlighter
              PreTag={"div"}
              style={atelierSeasideDark}
              language={value.language}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
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
  },
};
