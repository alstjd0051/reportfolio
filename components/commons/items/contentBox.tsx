import React, { useState } from "react";
import { urlFor } from "../../../sanity";
import { motion } from "framer-motion";
import { Image } from "../../lib/typings";

type Props = {
  title: string;
  image?: Image;
  createdAt: Date;
};

const ContentBox = ({ title, image, createdAt }: Props) => {
  const [ShowTitle, setShowTitle] = useState(false);

  return (
    <div className="max-w-72 relative h-80 border rounded-2xl flex flex-col overflow-hidden">
      <div
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
        className="w-full h-full overflow-hidden text-center "
      >
        <>
          {ShowTitle && (
            <div className="absolute flex items-center justify-center h-full w-full font-bold bg-gray-900/20 text-purple-500 sm:text-3xl lg:text-7xl  ">
              <h1>{title}</h1>
            </div>
          )}
        </>
        <div className="w-full h-full">
          {image ? (
            <motion.img
              src={urlFor(image)?.url()}
              className="w-full h-full object-cover"
              alt=""
            />
          ) : (
            <div className="bg-white w-full h-full ">
              <motion.img
                src="/vercel.svg"
                alt="none"
                className="object-contain w-full h-full"
              />
            </div>
          )}
        </div>
        <h1 className="absolute bottom-0 right-0 text-black">
          {new Date(createdAt).toLocaleDateString()}
        </h1>
      </div>
    </div>
  );
};

export default ContentBox;
