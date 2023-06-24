import axios from "axios";
import { Resume } from "../lib/typings";

export default async function fetchResume() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getResume`);
  const data = await res.json();
  const resume: Resume[] = data.resume;

  return resume;
}
