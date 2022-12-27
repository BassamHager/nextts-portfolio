import { Experience } from "../types/typings";

export const fetchExperiences = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    );
    const data = await res.json();
    const experiences: Experience[] = data?.experiences;

    return experiences;
  } catch (error) {
    console.error(error);
  }
};
