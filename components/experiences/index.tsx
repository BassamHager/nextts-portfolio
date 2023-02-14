import { useState, useEffect } from "react";
// typings
import { Experience } from "../../types/typings";
// components
import Swiper from "../shared/swiper";
import ExperienceCard from "./experienceCard";
// hooks
import useSwiper from "../../hooks/useSwiper";
// styles
import styles from "./experience.module.scss";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  // hooks
  const { currentIndex } = useSwiper({ stateKey: "exp" });
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
      <h3 className={styles.mainTitle}>Experience</h3>

      <Swiper
        cardComponent={
          <ExperienceCard experience={experiences?.[currentIndex]} />
        }
        useSwipeKey="exp"
        items={experiences}
        dotsImages={expImages}
      />
    </div>
  );
}
