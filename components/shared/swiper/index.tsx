import React, { ReactNode } from "react";
import Image from "next/image";
// styles
import styles from "../../../components/experience/experience.module.scss";
// packages
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
// hooks
import useSwiper from "../../../hooks/useSwiper";

type Props = {
  cardComponent: ReactNode;
  items: any[];
};

export default function Swiper({ cardComponent, items }: Props) {
  const { currentIndex, goToNext, goToPrev, goToSlide } = useSwiper();

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
        {cardComponent}

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
