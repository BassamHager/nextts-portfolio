import React from "react";
import Skill from "./Skill"; // fix naming @TODO:
import styles from "./skills.module.scss";
// typings
import { Skill as SkillType } from "../../types/typings";

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
            <Skill key={skill?._id} skill={skill} directionLeft={i % 2 === 0} />
          );
        })}
      </div>
    </div>
  );
}
