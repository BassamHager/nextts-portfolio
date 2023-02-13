import React, { useState } from "react";
import Image from "next/image";
import styles from "./experience.module.scss";
// packages
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
// typings
import { Experience } from "../../types/typings";
// components
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = (slides: Experience[]) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = (slides: Experience[]) => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (ind: number) => {
    setCurrentIndex(ind);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.experienceWrapper}
      id="experience"
    >
      <h3 className={styles.mainTitle}>Experience</h3>

      <div className={`group ${styles.experiencesContainer}`}>
        <ExperienceCard experience={experiences?.[currentIndex]} />

        <div className={styles.navArrowsContainer}>
          <div
            className={`${styles.navArrowContainer} group-hover:block`}
            onClick={() => goToPrev(experiences)}
          >
            <BsChevronCompactLeft />
          </div>
          <div
            className={`${styles.navArrowContainer} group-hover:block`}
            onClick={() => goToNext(experiences)}
          >
            <BsChevronCompactRight />
          </div>
        </div>

        <div className={styles.dotsContainer}>
          {experiences?.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={index === currentIndex ? styles.selected : ""}
            >
              {slide?.companyImage ? (
                <Image
                  src={slide.companyImage}
                  alt={slide.company || "company name"}
                  width={100}
                  height={100}
                />
              ) : (
                <RxDotFilled />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
