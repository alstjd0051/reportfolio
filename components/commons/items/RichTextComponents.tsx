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
          <div className="">
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
      <ul className="ml-3 list-disc space-y-5">
        <li>{children}</li>
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-10 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl py-10 font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#f7ab0a] border-l-4 pl-5 py-5 my-5">
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
