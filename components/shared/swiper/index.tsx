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
// types
import { Experience, Project } from "../../../types/typings";

type Props = {
  cardComponent: ReactNode;
  items: Experience[] | Project[];
  useSwipeKey: "exp" | "proj";
  dotsImages: string[];
};

export default function Swiper({
  cardComponent,
  items,
  dotsImages,
  useSwipeKey,
}: Props) {
  // hooks
  const { currentIndex, goToNext, goToPrev, goToSlide } = useSwiper({
    stateKey: useSwipeKey,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.swiperWrapper}
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
                <Image src={image} alt={"company"} width={100} height={100} />
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
