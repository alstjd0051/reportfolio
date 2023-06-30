import { Flutter } from "../lib/typings";

export default async function fetchFlutter() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFlutter`);
  const data = await res.json();
  const flutter: Flutter[] = data.flutter;

  return flutter;
}
