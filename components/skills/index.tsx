import React, { useCallback, useState, useEffect } from "react";
import styles from "./skills.module.scss";
// typings
import { Category, Skill as SkillType } from "../../types/typings";
// components
import SkillCard from "./skillCard";
// data
import { CATEGORIES } from "../../data/skills/index";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  const [category, setCategory] = useState<Category>("technologies");
  const [skillsPerCategory, setSkillsPerCategory] = useState<SkillType[]>([]);

  const filterSkillsPerCategories = useCallback(
    (catName: Category) => {
      if (!catName) return [];
      if (catName === "all") return setSkillsPerCategory(skills);
      const filtered: SkillType[] = skills.filter(
        (skill) => skill.cat === catName
      );
      setSkillsPerCategory(filtered);
    },
    [skills]
  );

  useEffect(() => {
    filterSkillsPerCategories("technologies");
  }, []);

  useEffect(() => {
    filterSkillsPerCategories(category);
  }, [filterSkillsPerCategories, category]);

  return (
    <div className={styles.skillsWrapper} id="skills">
      <h3 className={styles.sectionTitle}>Skills</h3>

      <ul className={styles.skillCategories}>
        {CATEGORIES.map((cat, ind) => {
          return (
            <li
              key={cat}
              className={`${cat === category ? styles.selectedCategory : ""}`}
            >
              <button onClick={() => setCategory(cat)}>{cat}</button>
            </li>
          );
        })}
      </ul>

      {skillsPerCategory.length ? (
        <div className={styles.skillsContainer}>
          {skillsPerCategory.map((skill, i) => {
            return (
              <SkillCard
                key={skill.image + i}
                skill={skill}
                directionLeft={i % 2 === 0}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
