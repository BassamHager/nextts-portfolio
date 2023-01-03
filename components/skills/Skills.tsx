import React from "react";
import Skill from "./SkillCard"; // fix naming @TODO:
import styles from "./skills.module.scss";
// typings
import { Skill as SkillType } from "../../types/typings";
import SkillCard from "./SkillCard";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <div className={styles.skillsWrapper} id="skills">
      <h3 className={styles.sectionTitle}>Skills</h3>
      <h3 className={styles.explanationText}>
        Hover over a skill for current proficiency (todo)
      </h3>

      <div className={styles.skillsContainer}>
        {skills?.map((skill, i) => {
          return (
            <SkillCard
              key={skill?.image + i}
              skill={skill}
              directionLeft={i % 2 === 0}
            />
          );
        })}
      </div>
    </div>
  );
}
