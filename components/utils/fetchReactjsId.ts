import axios from "axios";

export default async function fetchReactjsId(_id: any) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/react/${_id}`
  );
  return data.reactjs;
}
