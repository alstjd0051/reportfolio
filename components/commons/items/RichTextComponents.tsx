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
    bullet: ({ children, markDefs }: any) => (
      <ul className="ml-3 sm:text-lg md:text-xl list-disc space-y-5">
        <li>{children}</li>
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-10 sm:text-lg md:text-xl list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => {
      console.log(children);
      return (
        <h1
          className={`text-3xl md:text-4xl pt-5 pb-2 font-bold text-[${children[0].props.value.hex}]  `}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl py-5 md:py-10 font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl py-5 md:py-10 font-bold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl py-5 md:py-10 font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#f7ab0a] sm:text-lg md:text-xl border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer nopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f7ab0a] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
