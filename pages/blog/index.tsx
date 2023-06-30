import React from "react";
import fetchPageInfo from "../../components/utils/fetchPageInfo";
import fetchSocials from "../../components/utils/fetchSocials";
import { GetStaticProps } from "next";
import { Blog, PageInfo, Social } from "../../components/lib/typings";
import Header from "../../components/commons/layout/Header";
import fetchBlog from "../../components/utils/fetchBlog";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  blog: Blog[];
};

const BlogPage = ({ pageInfo, socials, blog }: Props) => {
  console.log(blog);
  return (
    <>
      <Header Home contact socials={socials} pageInfo={pageInfo} />
      <main>
        <div>
          {blog.map((item) => (
            <h1 key={item._id}>{item.route}</h1>
          ))}
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
