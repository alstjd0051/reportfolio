import React from "react";
import Header from "../../components/commons/layout/Header";
import { GetStaticProps } from "next";
import { Learn } from "../../components/lib/typings";
import fetchLearn from "../../components/utils/fetchLearn";
import { useRouter } from "next/router";

type Props = {
  learn: Learn[];
};

const LeanPage = ({ learn }: Props) => {
  const router = useRouter();
  if (process.env.NODE_ENV !== "development") {
    router.push("/");
  }
  return (
    <>
      <Header contact Home />
      <div className="pt-3 px-10  h-screen">
        {learn.map((item) => (
          <div key={item._id} className="">
            <h1 onClick={() => router.push(item.title)} className="text-white">
              {item.title}
            </h1>
            <button></button>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeanPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const learn = await fetchLearn();
  return {
    props: {
      learn,
    },
    revalidate: 1000,
  };
};
