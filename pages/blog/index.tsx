import React from "react";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import { GetStaticProps } from "next";
import { Blog, PageInfo, Social } from "../../components/lib/typings";
import Header from "../../components/commons/layout/Header";
import fetchBlog from "../../components/utils/fetchBlog";
import { urlFor } from "../../sanity";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  blog: Blog[];
};

const BlogPage = ({ pageInfo, socials, blog }: Props) => {
  const router = useRouter();
  return (
    <>
      <Header Home contact socials={socials} pageInfo={pageInfo} />
      <main className="pt-16 px-10">
        <div className="flex items-center gap-10">
          {blog.map((item) => {
            if (item.route !== null)
              return (
                <div
                  key={item.route}
                  className="basis-1/6 xl:basis-1/12 overflow-hidden  "
                >
                  {item.route !== null && (
                    <div
                      onClick={() => router.push(`/${item.route}`)}
                      className="flex cursor-pointer  flex-col gap-3"
                    >
                      <motion.img
                        src={urlFor(item.image).url()}
                        alt={item.route}
                        className="object-fill rounded-2xl"
                      />
                      <button className="hidden md:block">{item.route}</button>
                    </div>
                  )}
                </div>
              );
          })}
        </div>
      </main>
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const blog = await fetchBlog();
  return {
    props: {
      pageInfo,
      socials,
      blog,
    },
    revalidate: 1000,
  };
};
