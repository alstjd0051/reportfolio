import React, { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute flex justify-between p-5 bg-gray-100/30 -bottom-24  w-full flex-1 text-white ">
      <div className="flex items-center gap-3">
        <h1>Copyright ⓒ 2023</h1>
        <p>This is CMSProject</p>
      </div>
      <div className=" ">
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default Footer;
