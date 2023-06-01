import axios from "axios";

export default async function fetchSkills() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
  );
  return data.skills;
}
