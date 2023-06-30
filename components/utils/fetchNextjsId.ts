import axios from "axios";
import { NextJS } from "../lib/typings";

export default async function fetchNextjsId(title: any) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/nextjs/${title}`
  );
  return data.nextjs;
}
