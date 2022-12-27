import { Skill } from "../types/typings";

export const fetchSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    );
    const data = await res.json();
    const skills: Skill[] = data?.skills;

    return skills;
  } catch (error) {
    console.error(error);
  }
};
