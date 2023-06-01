import axios from "axios";

export default async function fetchPageInfo() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  return data.pageInfo;
}
