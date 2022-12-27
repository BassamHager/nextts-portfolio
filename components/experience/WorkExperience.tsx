import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../types/typings";
import styles from "./experience.module.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { urlFor } from "../../sanity";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0); // @TODO: useSwiper in a separate file
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
              className="hover:text-[var(--clr-neon)] cursor-pointer border border-transparent rounded-full overflow-hidden w-[3rem] h-[3rem] grid items-center hover:border-[var(--clr-neon)] hover:shadow-xl hover:shadow-[var(--clr-neon)]"
              onClick={() => goToSlide(index)}
            >
              {slide?.companyImage ? (
                <img
                  src={urlFor(slide.companyImage).url()}
                  alt={slide.company}
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
