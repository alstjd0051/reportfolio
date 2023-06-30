import { Flutter } from "../../lib/typings";

export default async function fetchFlutterId(title: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flutter/${title}`
  );
  const data = await res.json();
  const flutter: Flutter[] = data.flutter;

  return flutter;
}
