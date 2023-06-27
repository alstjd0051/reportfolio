import axios from "axios";
import { Learn, NextJS } from "../lib/typings";

export default async function fetchNextjs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getNextjs`);
  const data = await res.json();
  const nextjs: NextJS[] = data.nextjs;

  return nextjs;
}
