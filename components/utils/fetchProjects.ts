import axios from "axios";

export default async function fetchProjects() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  return data.projects;
}
