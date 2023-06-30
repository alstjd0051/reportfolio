import axios from "axios";

export default async function fetchNestjsId(title: any) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/nestjs/${title}`
  );
  return data.nestjs;
}
