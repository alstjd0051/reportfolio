import { Experience } from "../lib/typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperince`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
