import { skillsData } from "@/data/skills";
import { Skill } from "@/types";

export const filterTechs = (techs: string[]): Skill[] => {
  return skillsData.filter((skill) =>
    techs.some(
      (tech) => skill.title.toLocaleLowerCase() === tech.toLocaleLowerCase()
    )
  );
};
