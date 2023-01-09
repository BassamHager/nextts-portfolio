import { skillsData } from "../data/skills";
import { Skill } from "../types/typings";

export const filterTechs = (techs: string[]): Skill[] => {
  return skillsData.filter(
    (skill) => techs.filter((tech) => skill.title === tech).length
  );
};
