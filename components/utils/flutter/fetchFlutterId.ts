import axios from "axios";

export default async function fetchFlutterId(title: any) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flutter/${title}`
  );
  return data.flutter;
}
