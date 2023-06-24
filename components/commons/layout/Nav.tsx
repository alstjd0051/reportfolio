import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex">
      <div className="flex h-10 w-full  ">
        <Link href="/">
          <HomeIcon className="cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
