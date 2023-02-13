import React, { useState } from "react";
import Image from "next/image";
// packages
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
// styles
import styles from "./swiper.module.scss";

type Props = {
  items: any[];
};

export default function Swiper({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = (slides: any[]) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = (slides: any[]) => {
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
        {/* <ExperienceCard experience={experiences?.[currentIndex]} /> */}

        <div className={styles.navArrowsContainer}>
          <div
            className={`${styles.navArrowContainer} group-hover:block`}
            onClick={() => goToPrev(items)}
          >
            <BsChevronCompactLeft />
          </div>
          <div
            className={`${styles.navArrowContainer} group-hover:block`}
            onClick={() => goToNext(items)}
          >
            <BsChevronCompactRight />
          </div>
        </div>

        <div className={styles.dotsContainer}>
          {items?.map((slide, index) => (
            <div
              key={index}
              className="hover:text-[var(--clr-neon)] cursor-pointer border border-transparent rounded-full overflow-hidden w-[3rem] h-[3rem] grid items-center hover:border-[var(--clr-neon)] hover:shadow-xl hover:shadow-[var(--clr-neon)]"
              onClick={() => goToSlide(index)}
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
