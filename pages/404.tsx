import Link from "next/link";
import React, { useState } from "react";

const Custom404 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickedToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-5">
      <Link href={"/"}>Way Back Home</Link>
      <button onClick={() => clickedToggle()}>Open</button>
      {!isOpen ? (
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/amOSaNX7KJg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        ""
      )}
    </div>
  );
};

export default Custom404;
