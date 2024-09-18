"use client";

import { useState, useEffect, useContext } from "react";
// styles
import styles from "./experience.module.scss";
// typings
import { Experience } from "@/types";
// components
import SwipingTool from "@/components/ui/swipingTool";
import ExperienceCard from "./experienceCard";
// hooks
import { AppContext } from "@/context";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  // context
  const { currentIndex } = useContext(AppContext);

  // internal state
  const [expImages, setExpImages] = useState<string[]>([]);

  const mapExperienceImages = (objects: Experience[]): string[] =>
    objects.map((obj) => obj.companyImage);

  useEffect(() => {
    const images = mapExperienceImages(experiences);
    setExpImages(images);
  }, [experiences]);

  return (
    <div className={styles.experiencesWrapper} id="experience">
      <h2 className={styles.mainTitle}>work experience</h2>

      <SwipingTool
        cardComponent={
          <ExperienceCard experience={experiences?.[currentIndex]} />
        }
        useSwipeCategory="experience"
        items={experiences}
        logos={expImages}
      />
    </div>
  );
};

export default WorkExperience;
