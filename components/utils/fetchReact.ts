import { ReactJS } from "../lib/typings";

export default async function fetchReact() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/react/getReact`
  );
  const data = await res.json();
  const reactjs: ReactJS[] = data.reactjs;

  return reactjs;
}
