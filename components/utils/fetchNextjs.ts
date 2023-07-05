import axios from "axios";
import { NextJS } from "../lib/typings";

export default async function fetchNextjs() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/next/getNextjs`
  );

  return data.nextjs;
}
