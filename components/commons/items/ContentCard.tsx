import React from "react";
import { Code } from "../../lib/typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";

type Props = {
  code: Code[];
  id: string;
  title: string;
};

const ContentCard = ({ code, id, title }: Props) => {
  return (
    <div className="text-black overflow-y-scroll rounded-lg min-h-[20rem] bg-white w-[20rem] shadow-lg flex flex-col px-5 " onClick={() =>console.log(id)} >
      <div className="flex gap-3">
        <h1 className="font-bold p-1 text-xl ">{title}</h1>
      </div>
      <div className="whitespace-pre-line overflow-y-scroll">
        <PortableText value={code} components={RichTextComponents} />
      </div>
    </div>
  );
};

export default ContentCard;
