import axios from "axios";

export default async function fetchResume() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getResume`
  );
  return data.resume;
}
