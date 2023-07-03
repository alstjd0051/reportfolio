import axios from "axios";

export default async function fetchNextjsId(_id: any) {
  console.log(_id);
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/next/${_id}`
  );
  return data.nextjs;
}
