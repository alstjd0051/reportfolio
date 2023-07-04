import axios from "axios";

export default async function fetchFlutterId(_id: any) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/flutter/${_id}`
  );
  return data.flutter;
}
