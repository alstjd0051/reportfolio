import { NextJS } from "../lib/typings";

export default async function fetchNextjs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/nextjs/getNextjs`
  );
  const data = await res.json();
  const nextjs: NextJS[] = data.nextjs;

  return nextjs;
}
