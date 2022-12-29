import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../../components/lib/hook/api/usePosts';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import { QueryClient, dehydrate } from 'react-query';

interface Posts {
  title: string;
  body: string;
  id: number;
}

const Ssr2 = () => {
  const { isLoading, error, data } = useQuery<Posts[], Error>('posts', () =>
    fetchPosts(10),
  );
  const router = useRouter();
  const { id } = router.query;
  const idx = Number(id) - 1;

  if (isLoading) return <div>Loading...</div>;
  if (error) return error?.message;

  return (
    <div className="flex-col ">
      <nav className="w-full flex gap-5">
        <ArrowLeftIcon className="w-7 cursor-pointer" onClick={router.back} />
        <Link href={'/'}>
          <HomeIcon className="w-7 h-7 cursor-pointer" />
        </Link>
      </nav>

      <div className="py-10 w-full h-full">
        {data && (
          <div>
            <h1 className="font-bold text-4xl leading-loose">
              {data[idx].title}
            </h1>
            <p>{data[idx].body}</p>
            <p>{data[idx].id}번째 게시글</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ssr2;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('posts', () => fetchPosts(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
