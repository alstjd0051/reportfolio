import React, { useState } from 'react';
import axios from 'axios';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { getPoke } from '../api/pokemon';
import Pokemon from '../../components/commons/pokemon/fetchPokemon';

const Infinite = () => {
  return <Pokemon />;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('poke', () => getPoke(), {
    staleTime: 1000,
  });
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Infinite;
