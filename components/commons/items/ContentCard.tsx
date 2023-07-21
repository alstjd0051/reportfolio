import React from "react";
import { Code } from "../../lib/typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";

type Props = {
  code: Code[];
  id: string;
  title: string;
  createdAt: string;
};

const ContentCard = ({ code, id, title, createdAt }: Props) => {
  return (
    <div
      className="text-black overflow-y-scroll rounded-lg min-h-[20rem] bg-white w-[20rem] shadow-2xl shadow-white/40 flex flex-col justify-between px-5 "
      onClick={() => console.log(id)}
    >
      <div className="flex gap-3">
        <h1 className="font-bold  text-xl pt-5">{title}</h1>
      </div>
      <div className="whitespace-pre-line overflow-y-scroll pt-5">
        <PortableText value={code} components={RichTextComponents} />
      </div>
      <div className="text-end">{new Date(createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default ContentCard;
