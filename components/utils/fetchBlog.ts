import axios from "axios";

export default async function fetchBlog() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBlog`
  );
  return data.blog;
}
