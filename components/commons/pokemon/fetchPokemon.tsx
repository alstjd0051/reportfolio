import React, { useRef } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getPoke } from '../../../pages/api/pokemon';
import useIntersectionObserver from '../../lib/hooks/useIntersectionObserver';

const Pokemon = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'poke',
    ({ pageParam = '' }) => getPoke(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastOffset =
          lastPage.results[lastPage.results.length - 1].url.split('/')[6];
        if (lastOffset > 1118) {
          return undefined;
        }
        return lastOffset;
      },
      staleTime: 3000,
    },
  );
  const loadMoreButtonRef = useRef();

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <div className="relative">
      <ul className="grid grid-cols-3 ">
        {data?.pages.map((page) =>
          page.results.map((poke: any) => (
            <li key={poke.name} className="p-5 font-bold">
              {poke.name}
            </li>
          )),
        )}
      </ul>
      <div className="relative mb-1   ">
        <button
          className="absolute left-3/4 p-5 rounded-md bg-red-600 "
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
