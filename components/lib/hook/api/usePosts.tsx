import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async (limit = 10) => {
  const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
  const result = data.filter((x: any) => x.id <= limit);
  return result;
};

const usePosts = (limit: number) => {
  return useQuery(['posts', limit], () => fetchPosts(limit));
};

export { usePosts, fetchPosts };
