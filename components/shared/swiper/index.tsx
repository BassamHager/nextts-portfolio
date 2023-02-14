import React, { ReactNode } from "react";
import Image from "next/image";
// styles
import styles from "./swiper.module.scss";
// packages
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
// hooks
import useSwiper from "../../../hooks/useSwiper";

type Props = {
  cardComponent: ReactNode;
  items: any[];
  dotsImages: string[];
};

export default function Swiper({ cardComponent, items, dotsImages }: Props) {
  const { currentIndex, goToNext, goToPrev, goToSlide } = useSwiper();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.swiperWrapper}
      id="experience"
    >
      <div className={`group ${styles.itemsContainer}`}>
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
          {dotsImages?.map((image, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={index === currentIndex ? styles.selected : ""}
            >
              {image ? (
                <Image
                  src={image}
                  alt={image || "item image"}
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
