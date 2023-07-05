import { useRouter } from "next/router";
import React from "react";

type Props = {
  Num?: number;
  title: string;
  createdAt: Date;
  route: string;
  id?: string;
};

const BoardList = ({ title, Num, createdAt, route, id }: Props) => {
  const router = useRouter();
  return (
    <div className="flex items-center  w-full mt-10 py-3 border-b-2 border-white/50 justify-between ">
      <div
        onClick={() => router.push(`${route}`)}
        className="flex cursor-pointer    "
      >
        <p className="text-clip  ">{title}</p>
      </div>
      <div className="basis-1/12 text-end ">
        <p>{new Date(createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BoardList;
