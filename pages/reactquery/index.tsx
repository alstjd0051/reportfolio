import React from 'react';
import { useQuery, dehydrate, QueryClient } from 'react-query';
import { fetchPosts } from '../../components/lib/hook/api/usePosts';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

const ReactQueryExample = () => {
  const { isLoading, error, data } = useQuery<any[], Error>('posts', () =>
    fetchPosts(10),
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return error?.message;

  return (
    <div>
      <nav className="w-full h-14  bg-slate-600  flex items-center px-2 ">
        <Link href={'/'}>
          <HomeIcon className="h-7 w-7 cursor-pointer  " />
        </Link>
      </nav>
      <ul className="p-4">
        {data?.map((post) => (
          <li key={post?.id}>
            <div>
              <span>{post.id}.</span>
              <span key={post.id}>
                <Link href={`/ssr2/${post.id}`}>{post.title}</Link>
              </span>
              <a href="#">{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactQueryExample;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('posts', () => fetchPosts(10));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
