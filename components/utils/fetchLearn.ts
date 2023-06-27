import axios from "axios";
import { Learn } from "../lib/typings";

export default async function fetchLearn() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getLearn`);
  const data = await res.json();
  const learn: Learn[] = data.learn;

  return learn;
}
