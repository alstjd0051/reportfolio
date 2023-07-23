import React from "react";
import { PortableText } from "@portabletext/react";
import { CustomRichTextComponents } from "./CustomRichTextComponents";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  content: any[];
};

const ContentCard = ({ id, title, createdAt, content }: Props) => {
  return (
    <div className="text-black overflow-y-scroll rounded-lg min-h-[20rem] bg-white w-[20rem] shadow-2xl shadow-white/40 flex flex-col justify-between px-5 ">
      <div className="flex gap-3">
        <h1 className="font-bold  text-xl pt-5">{title}</h1>
      </div>
      <div className="whitespace-pre-line flex-col overflow-y-scroll pt-5">
        <PortableText value={content} components={CustomRichTextComponents} />
      </div>
      <div className="text-end">{new Date(createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default ContentCard;
